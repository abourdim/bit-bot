/**
 * Talking Robot - Micro:bit BLE Controller (V2)
 * For use with the Talking Robot web app
 *
 * Works around MakeCode limitation:
 * - basic.showLeds() requires a literal
 * - images.createImage() also requires a literal in some targets
 * So we store faces as Image objects created from literals.
 */

// ============ FACE IMAGES ============

const FACE_IDLE = images.createImage(`
. # . # .
. # . # .
. . . . .
# . . . #
. # # # .
`)

const FACE_LISTENING = images.createImage(`
# # . # #
# # . # #
. . . . .
. . . . .
. # # # .
`)

const FACE_THINKING = images.createImage(`
. # . # .
. . . . .
. . . . .
. # # # .
. . . . .
`)

const FACE_SPEAK_1 = images.createImage(`
. # . # .
. # . # .
. . . . .
. # # # .
. # # # .
`)

const FACE_SPEAK_2 = images.createImage(`
. # . # .
. # . # .
. . . . .
. . . . .
. # # # .
`)

const FACE_HAPPY = images.createImage(`
. . . . .
. # . # .
. . . . .
# . . . #
. # # # .
`)

const FACE_SAD = images.createImage(`
. . . . .
. # . # .
. . . . .
. # # # .
# . . . #
`)

const FACE_BLINK = images.createImage(`
. . . . .
. . . . .
. # . # .
. . . . .
. # # # .
`)

// ============ STATE ============

let currentState = "idle"
let isSpeaking = false
let speakFrame = 0

// V2 mic threshold (optional)
let micThreshold = 120
let lastMicBlink = 0

// ============ FUNCTIONS ============

function ts(): string {
    return "[" + input.runningTime() + "ms]"
}

function dbg(tag: string, msg: string) {
    serial.writeLine("" + ts() + " " + tag + " " + msg)
}

function uartTx(line: string) {
    bluetooth.uartWriteLine(line)
    dbg("TX", line)
}

// ✅ Now we pass an Image (not a string)
function showFace(img: Image) {
    img.showImage(0)
}

// V2 sound helpers
function beepOk() {
    music.playTone(988, music.beat(BeatFraction.Eighth))
}

function beepStart() {
    music.playTone(784, music.beat(BeatFraction.Eighth))
    music.playTone(988, music.beat(BeatFraction.Eighth))
}

function beepStop() {
    music.playTone(988, music.beat(BeatFraction.Eighth))
    music.playTone(784, music.beat(BeatFraction.Eighth))
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
        speakFrame = 0

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
        // Wave animation (literals are fine here)
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
        uartTx("ECHO: " + cmd)
    }
}

// ============ BLUETOOTH EVENTS ============

bluetooth.onBluetoothConnected(function () {
    showFace(FACE_HAPPY)
    beepOk()
    basic.pause(500)
    showFace(FACE_IDLE)
    dbg("BLE", "connected")
})

bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    beepStop()
    basic.pause(500)
    showFace(FACE_IDLE)
    dbg("BLE", "disconnected")
})

bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let message = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    dbg("RX", message)
    handleCommand(message)
})

// ============ BUTTON + LOGO EVENTS (V2) ============

input.onButtonPressed(Button.A, function () {
    dbg("BTN", "A pressed - start listening")
    uartTx("BTN_A")
    beepStart()
    setState("listening")
})

input.onButtonPressed(Button.B, function () {
    dbg("BTN", "B pressed - stop")
    uartTx("BTN_B")
    beepStop()
    setState("idle")
})

input.onButtonPressed(Button.AB, function () {
    dbg("BTN", "A+B pressed - happy")
    beepOk()
    setState("happy")
})

// V2: touch logo = blink
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    dbg("LOGO", "pressed - blink")
    uartTx("LOGO")
    setState("blink")
})

// ============ MAIN LOOP ============

// Init
serial.redirectToUSB()
serial.setBaudRate(BaudRate.BaudRate115200)
bluetooth.startUartService()

dbg("BOOT", "Talking Robot started (V2)")
showFace(FACE_IDLE)

// Loop
basic.forever(function () {

    // Speaking animation
    if (isSpeaking) {
        if (speakFrame === 0) {
            showFace(FACE_SPEAK_1)
            speakFrame = 1
        } else {
            showFace(FACE_SPEAK_2)
            speakFrame = 0
        }
        basic.pause(150)
        return
    }

    // Optional V2 mic-reactive blink while listening
    if (currentState === "listening") {
        let lvl = input.soundLevel()
        let now = input.runningTime()
        if (lvl > micThreshold && now - lastMicBlink > 400) {
            lastMicBlink = now
            showFace(FACE_BLINK)
            basic.pause(120)
            showFace(FACE_LISTENING)
        }
    }

    basic.pause(80)
})

