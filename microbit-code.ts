/**
 * Talking Robot - Micro:bit BLE Controller
 * For use with the Talking Robot web app
 * 
 * Features:
 * - BLE UART communication
 * - LED face animations (idle, listening, thinking, speaking)
 * - Button controls (A = start listening, B = stop)
 */

// ============ FACE PATTERNS ============

// Idle face - happy
const FACE_IDLE = `
    . # . # .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`

// Listening face - alert eyes
const FACE_LISTENING = `
    # # . # #
    # # . # #
    . . . . .
    . . . . .
    . # # # .
`

// Thinking face - looking up
const FACE_THINKING = `
    . # . # .
    . . . . .
    . . . . .
    . # # # .
    . . . . .
`

// Speaking frame 1 - mouth open
const FACE_SPEAK_1 = `
    . # . # .
    . # . # .
    . . . . .
    . # # # .
    . # # # .
`

// Speaking frame 2 - mouth closed
const FACE_SPEAK_2 = `
    . # . # .
    . # . # .
    . . . . .
    . . . . .
    . # # # .
`

// Happy face
const FACE_HAPPY = `
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
`

// Sad face
const FACE_SAD = `
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
`

// Blink frame
const FACE_BLINK = `
    . . . . .
    . . . . .
    . # . # .
    . . . . .
    . # # # .
`

// ============ STATE ============

let currentState = "idle"
let isSpeaking = false
let speakFrame = 0

// ============ FUNCTIONS ============

function dbg(tag: string, msg: string) {
    serial.writeLine("" + ts() + " " + tag + " " + msg)
}

function ts(): string {
    return "[" + input.runningTime() + "ms]"
}

function uartTx(line: string) {
    bluetooth.uartWriteLine(line)
    dbg("TX", line)
}

function showFace(pattern: string) {
    basic.showLeds(pattern)
}

function setState(state: string) {
    currentState = state
    dbg("STATE", state)
    
    if (state === "idle") {
        isSpeaking = false
        showFace(FACE_IDLE)
    } else if (state === "listening") {
        isSpeaking = false
        showFace(FACE_LISTENING)
    } else if (state === "thinking") {
        isSpeaking = false
        showFace(FACE_THINKING)
    } else if (state === "speaking") {
        isSpeaking = true
    } else if (state === "happy") {
        isSpeaking = false
        showFace(FACE_HAPPY)
        basic.pause(1500)
        showFace(FACE_IDLE)
    } else if (state === "sad") {
        isSpeaking = false
        showFace(FACE_SAD)
        basic.pause(1500)
        showFace(FACE_IDLE)
    } else if (state === "blink") {
        showFace(FACE_BLINK)
        basic.pause(150)
        showFace(FACE_IDLE)
    }
}

function handleCommand(cmd: string) {
    let clean = cmd.trim().toLowerCase()
    dbg("CMD", clean)
    
    if (clean === "speak_start") {
        setState("speaking")
    } else if (clean === "speak_end") {
        setState("idle")
    } else if (clean === "listening") {
        setState("listening")
    } else if (clean === "thinking") {
        setState("thinking")
    } else if (clean === "happy") {
        setState("happy")
    } else if (clean === "sad") {
        setState("sad")
    } else if (clean === "blink") {
        setState("blink")
    } else if (clean === "wave") {
        // Wave animation
        for (let i = 0; i < 3; i++) {
            basic.showLeds(`
                . . . . #
                . . . # .
                . . # . .
                . # . . .
                # . . . .
            `)
            basic.pause(150)
            basic.showLeds(`
                # . . . .
                . # . . .
                . . # . .
                . . . # .
                . . . . #
            `)
            basic.pause(150)
        }
        showFace(FACE_IDLE)
    } else {
        // Echo back for debugging
        uartTx("ECHO: " + cmd)
    }
}

// ============ BLUETOOTH EVENTS ============

bluetooth.onBluetoothConnected(function () {
    showFace(FACE_HAPPY)
    basic.pause(500)
    showFace(FACE_IDLE)
    dbg("BLE", "connected")
})

bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    basic.pause(500)
    showFace(FACE_IDLE)
    dbg("BLE", "disconnected")
})

bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let message = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    dbg("RX", message)
    handleCommand(message)
})

// ============ BUTTON EVENTS ============

input.onButtonPressed(Button.A, function () {
    dbg("BTN", "A pressed - start listening")
    uartTx("BTN_A")
    setState("listening")
})

input.onButtonPressed(Button.B, function () {
    dbg("BTN", "B pressed - stop")
    uartTx("BTN_B")
    setState("idle")
})

input.onButtonPressed(Button.AB, function () {
    dbg("BTN", "A+B pressed - happy")
    setState("happy")
})

// ============ MAIN LOOP ============

// Initialize
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
bluetooth.startUartService()

dbg("BOOT", "Talking Robot started")
showFace(FACE_IDLE)

// Animation loop
basic.forever(function () {
    if (isSpeaking) {
        // Animate mouth while speaking
        if (speakFrame === 0) {
            showFace(FACE_SPEAK_1)
            speakFrame = 1
        } else {
            showFace(FACE_SPEAK_2)
            speakFrame = 0
        }
        basic.pause(150)
    } else {
        basic.pause(100)
    }
})
