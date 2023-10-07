/**
 * Talking Robot V3 - Micro:bit MakeCode JavaScript
 * VERSION: 3.0 with AI Games Support
 * 
 * NEW FEATURES:
 * - Tilt detection (LEFT/RIGHT) for quiz answers
 * - Shake detection for adventure exploration
 * - Temperature sensor reading
 * - Light sensor reading
 * - LED state sync
 * 
 * Flash this to your Micro:bit using MakeCode
 * Works with the Talking Robot V3 web app via BLE UART
 * 
 * Instructions:
 * 1. Go to https://makecode.microbit.org
 * 2. Create new project
 * 3. Click "JavaScript" tab
 * 4. Paste this code
 * 5. Add "Bluetooth" extension (click Extensions > bluetooth)
 * 6. In Project Settings: Set "No Pairing Required"
 * 7. Download and flash to Micro:bit
 */

// ==================== CONFIGURATION ====================
const TILT_THRESHOLD = 300  // Tilt sensitivity (lower = more sensitive)
const SHAKE_THRESHOLD = 1500  // Shake detection threshold
let lastTiltTime = 0
let lastShakeTime = 0
const INPUT_COOLDOWN = 500  // Prevent rapid duplicate inputs (ms)

// ==================== LED SYNC FUNCTION ====================
function sendLEDState() {
    let state = "LED:"
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            state += led.point(x, y) ? "1" : "0"
        }
    }
    bluetooth.uartWriteString(state + "\n")
}

function showAndSync(img: Image) {
    img.showImage(0)
    basic.pause(50)
    sendLEDState()
}

// ==================== LED PATTERNS ====================

// Emotions & Faces
const HAPPY = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)

const SAD = images.createImage(`
    . . . . .
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)

const ANGRY = images.createImage(`
    # . . . #
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    `)

const SURPRISED = images.createImage(`
    . # . # .
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    `)

const LOVE = images.createImage(`
    . # . # .
    # # # # #
    # # # # #
    . # # # .
    . . # . .
    `)

const SLEEPY = images.createImage(`
    . . . . .
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    `)

const SILLY = images.createImage(`
    . # . # .
    . . . . .
    # # # # #
    . . . . #
    . # # # .
    `)

const WOW = images.createImage(`
    . # . # .
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    `)

const HAHA = images.createImage(`
    . # . # .
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    `)

const COOL = images.createImage(`
    # # # # #
    # . # . #
    . . . . .
    # . . . #
    . # # # .
    `)

// Animals
const CAT = images.createImage(`
    # . . . #
    . # . # .
    . . . . .
    # . # . #
    . . # . .
    `)

const DOG = images.createImage(`
    # . . . #
    # . . . #
    . . . . .
    . # # # .
    . # . # .
    `)

// Game icons
const ARROW_LEFT = images.createImage(`
    . . # . .
    . # . . .
    # # # # #
    . # . . .
    . . # . .
    `)

const ARROW_RIGHT = images.createImage(`
    . . # . .
    . . . # .
    # # # # #
    . . . # .
    . . # . .
    `)

const QUESTION = images.createImage(`
    . # # # .
    . . . # .
    . . # . .
    . . . . .
    . . # . .
    `)

const CHECK = images.createImage(`
    . . . . .
    . . . . #
    . . . # .
    # . # . .
    . # . . .
    `)

const CROSS = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)

const THERMOMETER = images.createImage(`
    . . # . .
    . . # . .
    . . # . .
    . # # # .
    . . # . .
    `)

const LIGHT_BULB = images.createImage(`
    . # # # .
    # . . . #
    # . . . #
    . # . # .
    . . # . .
    `)

// ==================== ANIMATIONS ====================

function waveAnim() {
    for (let i = 0; i < 2; i++) {
        basic.showLeds(`
            . . . . #
            . . . # #
            . . # . .
            . # . . .
            # . . . .
            `)
        sendLEDState()
        basic.pause(150)
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . . .
            # . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(150)
    }
    showAndSync(HAPPY)
}

function danceAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            . # . # .
            # . . . #
            `)
        sendLEDState()
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            . . # . .
            # . . . #
            . # . # .
            `)
        sendLEDState()
        basic.pause(200)
    }
    showAndSync(HAPPY)
}

function spinAnim() {
    for (let i = 0; i < 2; i++) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # . # #
            . . # . .
            . . # . .
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            # . . . .
            . # . . .
            . . # . .
            . . . # .
            . . . . #
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        sendLEDState()
        basic.pause(100)
    }
    showAndSync(HAPPY)
}

function partyAnim() {
    for (let i = 0; i < 5; i++) {
        led.setBrightness(Math.randomRange(100, 255))
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        sendLEDState()
        basic.pause(100)
    }
    led.setBrightness(255)
    showAndSync(HAPPY)
}

function magicAnim() {
    for (let i = 0; i < 3; i++) {
        for (let b = 50; b <= 255; b += 50) {
            led.setBrightness(b)
            basic.showIcon(IconNames.Diamond)
            sendLEDState()
            basic.pause(50)
        }
        for (let b = 255; b >= 50; b -= 50) {
            led.setBrightness(b)
            basic.pause(50)
        }
    }
    led.setBrightness(255)
    showAndSync(HAPPY)
}

// ==================== TILT DETECTION ====================
basic.forever(function () {
    let currentTime = input.runningTime()
    
    // Only check tilt if enough time has passed
    if (currentTime - lastTiltTime > INPUT_COOLDOWN) {
        let x = input.acceleration(Dimension.X)
        
        if (x < -TILT_THRESHOLD) {
            // Tilted LEFT
            lastTiltTime = currentTime
            bluetooth.uartWriteString("TILT_LEFT\n")
            showAndSync(ARROW_LEFT)
            basic.pause(300)
            showAndSync(HAPPY)
        } else if (x > TILT_THRESHOLD) {
            // Tilted RIGHT
            lastTiltTime = currentTime
            bluetooth.uartWriteString("TILT_RIGHT\n")
            showAndSync(ARROW_RIGHT)
            basic.pause(300)
            showAndSync(HAPPY)
        }
    }
})

// ==================== SHAKE DETECTION ====================
input.onGesture(Gesture.Shake, function () {
    let currentTime = input.runningTime()
    
    if (currentTime - lastShakeTime > INPUT_COOLDOWN) {
        lastShakeTime = currentTime
        bluetooth.uartWriteString("SHAKE\n")
        basic.showIcon(IconNames.Surprised)
        sendLEDState()
        basic.pause(300)
        showAndSync(HAPPY)
    }
})

// ==================== COMMAND HANDLER ====================
function handleCommand(cmd: string) {
    cmd = cmd.toLowerCase().trim()
    
    // Emotions
    if (cmd == "happy") { showAndSync(HAPPY) }
    else if (cmd == "sad") { showAndSync(SAD) }
    else if (cmd == "angry") { showAndSync(ANGRY) }
    else if (cmd == "surprised" || cmd == "wow") { showAndSync(WOW) }
    else if (cmd == "love") { showAndSync(LOVE) }
    else if (cmd == "sleepy") { showAndSync(SLEEPY) }
    else if (cmd == "silly") { showAndSync(SILLY) }
    else if (cmd == "haha") { showAndSync(HAHA) }
    else if (cmd == "cool") { showAndSync(COOL) }
    
    // Animals
    else if (cmd == "cat") { showAndSync(CAT) }
    else if (cmd == "dog") { showAndSync(DOG) }
    
    // Actions
    else if (cmd == "wave") { waveAnim() }
    else if (cmd == "dance") { danceAnim() }
    else if (cmd == "spin") { spinAnim() }
    else if (cmd == "party") { partyAnim() }
    else if (cmd == "magic") { magicAnim() }
    
    // Game specific
    else if (cmd == "quiz") {
        showAndSync(QUESTION)
    }
    else if (cmd == "correct" || cmd == "yes") {
        showAndSync(CHECK)
        basic.pause(500)
        partyAnim()
    }
    else if (cmd == "wrong" || cmd == "no") {
        showAndSync(CROSS)
        basic.pause(500)
        showAndSync(SAD)
    }
    else if (cmd == "thinking") {
        basic.showIcon(IconNames.Confused)
        sendLEDState()
    }
    
    // Sensor readings
    else if (cmd == "read_temp") {
        showAndSync(THERMOMETER)
        basic.pause(300)
        let temp = input.temperature()
        bluetooth.uartWriteString("TEMP:" + temp + "\n")
        basic.showNumber(temp)
        sendLEDState()
        basic.pause(1000)
        showAndSync(HAPPY)
    }
    else if (cmd == "read_light") {
        showAndSync(LIGHT_BULB)
        basic.pause(300)
        let light = input.lightLevel()
        bluetooth.uartWriteString("LIGHT:" + light + "\n")
        basic.showNumber(light)
        sendLEDState()
        basic.pause(1000)
        showAndSync(HAPPY)
    }
    
    // Arrows for choices
    else if (cmd == "left") {
        showAndSync(ARROW_LEFT)
    }
    else if (cmd == "right") {
        showAndSync(ARROW_RIGHT)
    }
    else if (cmd == "forward") {
        basic.showArrow(ArrowNames.North)
        sendLEDState()
    }
    else if (cmd == "backward") {
        basic.showArrow(ArrowNames.South)
        sendLEDState()
    }
    
    // Numbers (for games)
    else if (cmd == "count") {
        for (let n = 1; n <= 5; n++) {
            basic.showNumber(n)
            sendLEDState()
            basic.pause(500)
        }
        showAndSync(HAPPY)
    }
    else if (cmd == "dice") {
        for (let i = 0; i < 5; i++) {
            basic.showNumber(Math.randomRange(1, 6))
            sendLEDState()
            basic.pause(100)
        }
        let d = Math.randomRange(1, 6)
        basic.showNumber(d)
        sendLEDState()
        basic.pause(1000)
        showAndSync(HAPPY)
    }
    
    // Rainbow effect
    else if (cmd == "rainbow") {
        for (let i = 0; i < 3; i++) {
            led.setBrightness(255)
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            sendLEDState()
            basic.pause(200)
            led.setBrightness(150)
            basic.pause(100)
            led.setBrightness(50)
            basic.pause(100)
        }
        led.setBrightness(255)
        showAndSync(HAPPY)
    }
    
    // Unknown command
    else {
        showAndSync(QUESTION)
    }
}

// ==================== BLUETOOTH SETUP ====================

bluetooth.startUartService()

bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data.length > 0) {
        handleCommand(data)
    }
})

bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
    sendLEDState()
    basic.pause(500)
    showAndSync(HAPPY)
})

bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
    basic.pause(500)
    SAD.showImage(0)
})

// ==================== BUTTON HANDLERS ====================

input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("BTN_A\n")
    basic.showIcon(IconNames.Target)
    sendLEDState()
    basic.pause(200)
    showAndSync(HAPPY)
})

input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("BTN_B\n")
    basic.showIcon(IconNames.No)
    sendLEDState()
    basic.pause(200)
    showAndSync(HAPPY)
})

input.onButtonPressed(Button.AB, function () {
    bluetooth.uartWriteString("BTN_AB\n")
    // When both buttons pressed, send current sensor readings
    let temp = input.temperature()
    let light = input.lightLevel()
    bluetooth.uartWriteString("TEMP:" + temp + "\n")
    basic.pause(100)
    bluetooth.uartWriteString("LIGHT:" + light + "\n")
    basic.showIcon(IconNames.Yes)
    sendLEDState()
    basic.pause(200)
    showAndSync(HAPPY)
})

// ==================== STARTUP ====================

HAPPY.showImage(0)
basic.pause(100)
sendLEDState()
