/**
 * Talking Robot V2 - Micro:bit MakeCode JavaScript
 * VERSION: 2.0 with LED Sync
 * 
 * NEW: Sends LED state back to web app for real-time display sync!
 * 
 * Flash this to your Micro:bit using MakeCode
 * Works with the Talking Robot V2 web app via BLE UART
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

// ==================== LED SYNC FUNCTION ====================
// Sends current LED state as a string of 25 chars (0 or 1)

function sendLEDState() {
    let state = "LED:"
    for (let y = 0; y < 5; y++) {
        for (let x = 0; x < 5; x++) {
            state += led.point(x, y) ? "1" : "0"
        }
    }
    bluetooth.uartWriteString(state + "\n")
}

// Wrapper to show image and sync LED state
function showAndSync(img: Image) {
    img.showImage(0)
    basic.pause(50) // Small delay to ensure LEDs are updated
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

const CRAZY = images.createImage(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)

const DIZZY = images.createImage(`
    . # . # .
    # . . . #
    . . # . .
    # . . . #
    . # . # .
    `)

const WINK = images.createImage(`
    . . # . .
    . # . # .
    . . . . .
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

const WOW = images.createImage(`
    . # . # .
    . . . . .
    . . # . .
    . # . # .
    . . # . .
    `)

const OOPS = images.createImage(`
    . # . # .
    . . . . .
    . . . . .
    . # # # .
    . . . . .
    `)

const HAHA = images.createImage(`
    . # . # .
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    `)

const CRY = images.createImage(`
    . # . # .
    . . . . .
    . . . . .
    . # # # .
    # . . . #
    `)

const SCREAM = images.createImage(`
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    # # # # #
    `)

const SHH = images.createImage(`
    . # . # .
    . . . . .
    . . . . .
    . . # . .
    . . # . .
    `)

const GHOST = images.createImage(`
    . # # # .
    # . # . #
    # # # # #
    # # # # #
    # . # . #
    `)

const ALIEN = images.createImage(`
    . # # # .
    # . . . #
    . # # # .
    . # . # .
    # . . . #
    `)

const SKULL = images.createImage(`
    . # # # .
    # . # . #
    # # # # #
    . # # # .
    . # # # .
    `)

const VAMPIRE = images.createImage(`
    # # # # #
    . # # # .
    . # . # .
    . . . . .
    . # . # .
    `)

const POOP = images.createImage(`
    . . # . .
    . # # # .
    # . . . #
    # # # # #
    . . . . .
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

const DUCK = images.createImage(`
    . # # . .
    # # # . .
    . # # # .
    . # # # .
    . . . . .
    `)

const COW = images.createImage(`
    # . . . #
    # # . # #
    . # # # .
    . # # # .
    . . # . .
    `)

const PIG = images.createImage(`
    . # # # .
    # . # . #
    # # # # #
    . # # # .
    . . . . .
    `)

const FROG = images.createImage(`
    # . . . #
    . # . # .
    # # # # #
    # . . . #
    . # . # .
    `)

const SNAKE = images.createImage(`
    . # . . .
    # . # . .
    . # . . .
    . . # . .
    . . . # #
    `)

const MONKEY = images.createImage(`
    . # # # .
    # . # . #
    . # # # .
    . # . # .
    # . . . #
    `)

// ==================== ANIMATIONS WITH SYNC ====================

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
        basic.showLeds(`
            . . # . .
            . # # . .
            # . . . .
            . . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(150)
        basic.showLeds(`
            . # . . .
            # # . . .
            . . . . .
            . . . . .
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
    showAndSync(DIZZY)
}

function jumpAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . # # # .
            # # # # #
            `)
        sendLEDState()
        basic.pause(150)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(150)
    }
    showAndSync(HAPPY)
}

function blinkAnim() {
    for (let i = 0; i < 4; i++) {
        basic.showLeds(`
            . . . . .
            # # . # #
            . . . . .
            # . . . #
            . # # # .
            `)
        sendLEDState()
        basic.pause(100)
        showAndSync(HAPPY)
        basic.pause(200)
    }
}

function nodAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            `)
        sendLEDState()
        basic.pause(200)
        showAndSync(HAPPY)
        basic.pause(200)
    }
}

function noAnim() {
    for (let i = 0; i < 2; i++) {
        basic.showLeds(`
            . . . . .
            # . . # .
            . . . . .
            # . . . #
            . # # # .
            `)
        sendLEDState()
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . # . . #
            . . . . .
            # . . . #
            . # # # .
            `)
        sendLEDState()
        basic.pause(200)
    }
    showAndSync(HAPPY)
}

function wiggleAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            . # . . .
            # . . . .
            `)
        sendLEDState()
        basic.pause(150)
        basic.showLeds(`
            . # . # .
            . . . . .
            # # # # #
            . . . # .
            . . . . #
            `)
        sendLEDState()
        basic.pause(150)
    }
    showAndSync(HAPPY)
}

function bounceAnim() {
    for (let i = 0; i < 4; i++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            # # # # #
            . . . . .
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . # # # .
            # # # # #
            . . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            . # # # .
            # # # # #
            . . . . .
            . . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(100)
    }
    showAndSync(HAPPY)
}

function partyAnim() {
    for (let i = 0; i < 5; i++) {
        basic.showLeds(`
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            `)
        sendLEDState()
        basic.pause(150)
        basic.showLeds(`
            . # . # .
            # . # . #
            . # . # .
            # . # . #
            . # . # .
            `)
        sendLEDState()
        basic.pause(150)
    }
    showAndSync(HAPPY)
}

function discoAnim() {
    for (let i = 0; i < 8; i++) {
        for (let y = 0; y < 5; y++) {
            for (let x = 0; x < 5; x++) {
                led.toggle(x, y)
            }
        }
        sendLEDState()
        basic.pause(100)
    }
    showAndSync(HAPPY)
}

function rainbowAnim() {
    for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 5; row++) {
            led.plot(col, row)
        }
        sendLEDState()
        basic.pause(100)
    }
    basic.pause(300)
    for (let col = 0; col < 5; col++) {
        for (let row = 0; row < 5; row++) {
            led.unplot(col, row)
        }
        sendLEDState()
        basic.pause(100)
    }
    showAndSync(HAPPY)
}

function fireworksAnim() {
    for (let i = 0; i < 3; i++) {
        basic.clearScreen()
        sendLEDState()
        basic.pause(100)
        led.plot(2, 4)
        sendLEDState()
        basic.pause(50)
        led.plot(2, 3)
        sendLEDState()
        basic.pause(50)
        led.plot(2, 2)
        sendLEDState()
        basic.pause(50)
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . # # # .
            . . # . .
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            # . # . #
            . # # # .
            # # . # #
            . # # # .
            # . # . #
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        sendLEDState()
        basic.pause(100)
    }
    showAndSync(HAPPY)
}

function confettiAnim() {
    for (let i = 0; i < 20; i++) {
        let x = Math.randomRange(0, 4)
        let y = Math.randomRange(0, 4)
        led.toggle(x, y)
        sendLEDState()
        basic.pause(50)
    }
    showAndSync(HAPPY)
}

function laserAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(50)
        basic.showLeds(`
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(50)
        basic.showLeds(`
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(50)
        basic.showLeds(`
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            . . . . .
            `)
        sendLEDState()
        basic.pause(50)
        basic.showLeds(`
            . . . . #
            . . . # .
            . . # . .
            . # . . .
            # . . . .
            `)
        sendLEDState()
        basic.pause(50)
    }
    showAndSync(COOL)
}

function freezeAnim() {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    sendLEDState()
    basic.pause(200)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    sendLEDState()
    basic.pause(500)
    showAndSync(COOL)
}

function fireAnim() {
    for (let i = 0; i < 5; i++) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            `)
        sendLEDState()
        basic.pause(100)
    }
    showAndSync(HAPPY)
}

function magicAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showIcon(IconNames.SmallDiamond)
        sendLEDState()
        basic.pause(150)
        basic.showIcon(IconNames.Diamond)
        sendLEDState()
        basic.pause(150)
    }
    showAndSync(HAPPY)
}

function rocketAnim() {
    for (let row = 4; row >= 0; row--) {
        basic.clearScreen()
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # . # . #
            . . # . .
            `)
        sendLEDState()
        basic.pause(100)
    }
    basic.clearScreen()
    sendLEDState()
    basic.pause(200)
    showAndSync(WOW)
}

function explodeAnim() {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    sendLEDState()
    basic.pause(80)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . . # . .
        . . . . .
        `)
    sendLEDState()
    basic.pause(80)
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
    sendLEDState()
    basic.pause(80)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . . . #
        . # . # .
        # . # . #
        `)
    sendLEDState()
    basic.pause(150)
    basic.clearScreen()
    sendLEDState()
    basic.pause(100)
    showAndSync(OOPS)
}

function thunderAnim() {
    for (let i = 0; i < 2; i++) {
        basic.showLeds(`
            . . # # .
            . # # . .
            . . # . .
            . # . . .
            . # . . .
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        sendLEDState()
        basic.pause(50)
        basic.clearScreen()
        sendLEDState()
        basic.pause(200)
    }
    showAndSync(WOW)
}

function fartAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . #
            . . . # #
            . . # # .
            `)
        sendLEDState()
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # #
            . . # # .
            . # # . .
            `)
        sendLEDState()
        basic.pause(100)
    }
    showAndSync(SILLY)
}

// ==================== COMMAND HANDLER ====================

function handleCommand(cmd: string) {
    cmd = cmd.trim().toLowerCase()

    // Emotions
    if (cmd == "happy") { showAndSync(HAPPY) }
    else if (cmd == "sad") { showAndSync(SAD) }
    else if (cmd == "angry") { showAndSync(ANGRY) }
    else if (cmd == "surprised") { showAndSync(SURPRISED) }
    else if (cmd == "love") { showAndSync(LOVE) }
    else if (cmd == "sleepy") { showAndSync(SLEEPY) }
    else if (cmd == "silly") { showAndSync(SILLY) }
    else if (cmd == "crazy") { showAndSync(CRAZY) }
    else if (cmd == "dizzy") { showAndSync(DIZZY) }
    else if (cmd == "wink") { showAndSync(WINK) }
    else if (cmd == "cool") { showAndSync(COOL) }
    else if (cmd == "wow") { showAndSync(WOW) }
    else if (cmd == "oops") { showAndSync(OOPS) }
    else if (cmd == "haha") { showAndSync(HAHA) }
    else if (cmd == "cry") { showAndSync(CRY) }
    else if (cmd == "scream") { showAndSync(SCREAM) }
    else if (cmd == "shh") { showAndSync(SHH) }
    else if (cmd == "ghost") { showAndSync(GHOST) }
    else if (cmd == "alien") { showAndSync(ALIEN) }
    else if (cmd == "skull") { showAndSync(SKULL) }
    else if (cmd == "vampire") { showAndSync(VAMPIRE) }
    else if (cmd == "poop") { showAndSync(POOP) }

    // Animals
    else if (cmd == "cat") { showAndSync(CAT) }
    else if (cmd == "dog") { showAndSync(DOG) }
    else if (cmd == "duck") { showAndSync(DUCK) }
    else if (cmd == "cow") { showAndSync(COW) }
    else if (cmd == "pig") { showAndSync(PIG) }
    else if (cmd == "frog") { showAndSync(FROG) }
    else if (cmd == "snake") { showAndSync(SNAKE) }
    else if (cmd == "monkey") { showAndSync(MONKEY) }

    // Actions
    else if (cmd == "wave") { waveAnim() }
    else if (cmd == "dance") { danceAnim() }
    else if (cmd == "spin") { spinAnim() }
    else if (cmd == "jump") { jumpAnim() }
    else if (cmd == "shake") { 
        basic.showIcon(IconNames.Confused) 
        sendLEDState()
    }
    else if (cmd == "nod") { nodAnim() }
    else if (cmd == "no") { noAnim() }
    else if (cmd == "blink") { blinkAnim() }
    else if (cmd == "wiggle") { wiggleAnim() }
    else if (cmd == "bounce") { bounceAnim() }
    else if (cmd == "yawn") { 
        showAndSync(SLEEPY)
        basic.pause(500) 
    }
    else if (cmd == "sneeze") {
        showAndSync(SURPRISED)
        basic.pause(200)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        sendLEDState()
        basic.pause(100)
        showAndSync(HAPPY)
    }
    else if (cmd == "hiccup") {
        for (let i = 0; i < 3; i++) {
            showAndSync(SURPRISED)
            basic.pause(200)
            showAndSync(HAPPY)
            basic.pause(300)
        }
    }
    else if (cmd == "tickle") {
        showAndSync(HAHA)
        wiggleAnim()
    }

    // Sounds (visual animations only)
    else if (cmd == "fart") { fartAnim() }
    else if (cmd == "burp") {
        showAndSync(SURPRISED)
        basic.pause(200)
        showAndSync(SILLY)
    }
    else if (cmd == "beep") {
        for (let i = 0; i < 3; i++) {
            led.plot(2, 2)
            sendLEDState()
            basic.pause(100)
            led.unplot(2, 2)
            sendLEDState()
            basic.pause(100)
        }
        showAndSync(HAPPY)
    }
    else if (cmd == "laugh") {
        for (let i = 0; i < 4; i++) {
            showAndSync(HAPPY)
            basic.pause(100)
            showAndSync(HAHA)
            basic.pause(100)
        }
        showAndSync(HAPPY)
    }
    else if (cmd == "horn") {
        basic.showLeds(`
            . . . # #
            . . # # #
            . # # # #
            . . # # #
            . . . # #
            `)
        sendLEDState()
        basic.pause(500)
        showAndSync(HAPPY)
    }
    else if (cmd == "siren") {
        for (let i = 0; i < 4; i++) {
            basic.showLeds(`
                # . . . .
                # . . . .
                # # # # #
                # . . . .
                # . . . .
                `)
            sendLEDState()
            basic.pause(150)
            basic.showLeds(`
                . . . . #
                . . . . #
                # # # # #
                . . . . #
                . . . . #
                `)
            sendLEDState()
            basic.pause(150)
        }
        showAndSync(HAPPY)
    }

    // Party
    else if (cmd == "party") { partyAnim() }
    else if (cmd == "disco") { discoAnim() }
    else if (cmd == "rainbow") { rainbowAnim() }
    else if (cmd == "fireworks") { fireworksAnim() }
    else if (cmd == "confetti") { confettiAnim() }
    else if (cmd == "birthday") {
        for (let i = 0; i < 3; i++) {
            partyAnim()
        }
    }
    else if (cmd == "applause") {
        for (let i = 0; i < 5; i++) {
            showAndSync(HAPPY)
            basic.pause(100)
            showAndSync(HAHA)
            basic.pause(100)
        }
    }
    else if (cmd == "yay") {
        basic.showLeds(`
            # . . . #
            # . . . #
            . . . . .
            . . . . .
            . # # # .
            `)
        sendLEDState()
        basic.pause(500)
        showAndSync(HAPPY)
    }

    // Superpowers
    else if (cmd == "laser") { laserAnim() }
    else if (cmd == "freeze") { freezeAnim() }
    else if (cmd == "fire") { fireAnim() }
    else if (cmd == "magic") { magicAnim() }
    else if (cmd == "invisible") {
        for (let b = 4; b >= 0; b--) {
            led.setBrightness(b * 50)
            sendLEDState()
            basic.pause(200)
        }
        basic.pause(500)
        for (let b = 0; b <= 4; b++) {
            led.setBrightness(b * 50 + 50)
            sendLEDState()
            basic.pause(200)
        }
        led.setBrightness(255)
        showAndSync(HAPPY)
    }
    else if (cmd == "transform") {
        showAndSync(HAPPY)
        basic.pause(200)
        showAndSync(CAT)
        basic.pause(200)
        showAndSync(DOG)
        basic.pause(200)
        showAndSync(FROG)
        basic.pause(200)
        showAndSync(HAPPY)
    }
    else if (cmd == "shield") {
        basic.showLeds(`
            . # # # .
            # # # # #
            # # # # #
            # # # # #
            . # # # .
            `)
        sendLEDState()
        basic.pause(500)
        showAndSync(COOL)
    }
    else if (cmd == "thunder") { thunderAnim() }
    else if (cmd == "explode") { explodeAnim() }
    else if (cmd == "rocket") { rocketAnim() }

    // Games
    else if (cmd == "count") {
        for (let n = 1; n <= 5; n++) {
            basic.showNumber(n)
            sendLEDState()
            basic.pause(500)
        }
        showAndSync(HAPPY)
    }
    else if (cmd == "random") {
        let r = Math.randomRange(1, 10)
        basic.showNumber(r)
        sendLEDState()
        basic.pause(1000)
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
    else if (cmd == "timer") {
        for (let t = 5; t >= 0; t--) {
            basic.showNumber(t)
            sendLEDState()
            basic.pause(1000)
        }
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        sendLEDState()
        basic.pause(500)
        showAndSync(HAPPY)
    }
    else if (cmd == "quiz") {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
        sendLEDState()
        basic.pause(1000)
        showAndSync(HAPPY)
    }

    // Robot movement
    else if (cmd == "forward") { 
        basic.showArrow(ArrowNames.North) 
        sendLEDState()
    }
    else if (cmd == "backward") { 
        basic.showArrow(ArrowNames.South) 
        sendLEDState()
    }
    else if (cmd == "left") { 
        basic.showArrow(ArrowNames.West) 
        sendLEDState()
    }
    else if (cmd == "right") { 
        basic.showArrow(ArrowNames.East) 
        sendLEDState()
    }
    else if (cmd == "stop") {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
        sendLEDState()
    }

    // Speech events
    else if (cmd == "speak_start") { 
        basic.showIcon(IconNames.Happy) 
        sendLEDState()
    }
    else if (cmd == "speak_end") { 
        showAndSync(HAPPY) 
    }
    else if (cmd == "thinking") {
        basic.showIcon(IconNames.Confused)
        sendLEDState()
    }

    // Unknown command - show question mark
    else {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
        sendLEDState()
    }
}

// ==================== BLUETOOTH SETUP ====================

// Enable Bluetooth UART service
bluetooth.startUartService()

// Handle incoming Bluetooth data
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data.length > 0) {
        handleCommand(data)
    }
})

// Connection events
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
    basic.showIcon(IconNames.Yes)
    sendLEDState()
    basic.pause(200)
    showAndSync(HAPPY)
})

// ==================== STARTUP ====================

// Show ready face and sync
HAPPY.showImage(0)
basic.pause(100)
sendLEDState()
