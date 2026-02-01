/**
 * Talking Robot - Micro:bit MakeCode JavaScript
 * Flash this to your Micro:bit using MakeCode
 * Works with the Talking Robot web app via BLE UART
 * 
 * Instructions:
 * 1. Go to https://makecode.microbit.org
 * 2. Create new project
 * 3. Click "JavaScript" tab
 * 4. Paste this code
 * 5. Add "Bluetooth" extension (click Extensions > bluetooth)
 * 6. Download and flash to Micro:bit
 */

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
    . . . . .
    # # . # #
    . . . . .
    . # # # .
    . . . . .
    `)

const WOW = images.createImage(`
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    . # # # .
    `)

const OOPS = images.createImage(`
    . # . # .
    . . . . .
    . # # # .
    # . . . #
    . . # . .
    `)

const HAHA = images.createImage(`
    # . . . #
    . . . . .
    # # # # #
    # . . . #
    . # # # .
    `)

const CRY = images.createImage(`
    . # . # .
    . . . . .
    . # # # .
    # . # . #
    # . # . #
    `)

const SCREAM = images.createImage(`
    . # # # .
    # . . . #
    # # # # #
    # . . . #
    # # # # #
    `)

const SHH = images.createImage(`
    . # . # .
    . . . . .
    . . . # .
    . . # . .
    . . . . .
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
    # # . # #
    # # # # #
    . # . # .
    . # . # .
    `)

const SKULL = images.createImage(`
    . # # # .
    # . # . #
    . # # # .
    . # # # .
    . # # # .
    `)

const VAMPIRE = images.createImage(`
    # . . . #
    . # . # .
    . . . . .
    # # # # #
    . # . # .
    `)

const POOP = images.createImage(`
    . . # . .
    . # # # .
    . # # # .
    # # # # #
    . . . . .
    `)

// Animals
const CAT = images.createImage(`
    # . . . #
    # . . . #
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
        basic.pause(150)
        basic.showLeds(`
            . . . # .
            . . # # .
            . # . . .
            # . . . .
            . . . . .
            `)
        basic.pause(150)
        basic.showLeds(`
            . . # . .
            . # # . .
            # . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(150)
        basic.showLeds(`
            . # . . .
            # # . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(150)
    }
}

function danceAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            . . # . .
            . # . # .
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            # # # # .
            # . # . #
            . . # . .
            # . . . #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . # . .
            . # # # #
            # . # . #
            . . # . .
            # . . . #
            `)
        basic.pause(200)
    }
}

function spinAnim() {
    for (let i = 0; i < 2; i++) {
        basic.showArrow(ArrowNames.North)
        basic.pause(100)
        basic.showArrow(ArrowNames.East)
        basic.pause(100)
        basic.showArrow(ArrowNames.South)
        basic.pause(100)
        basic.showArrow(ArrowNames.West)
        basic.pause(100)
    }
}

function jumpAnim() {
    for (let y = 4; y >= 0; y--) {
        basic.clearScreen()
        led.plot(2, y)
        basic.pause(100)
    }
    for (let y = 0; y <= 4; y++) {
        basic.clearScreen()
        led.plot(2, y)
        basic.pause(100)
    }
}

function blinkAnim() {
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.pause(150)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . # # # .
        `)
    basic.pause(150)
    basic.showLeds(`
        . . . . .
        # # . # #
        . . . . .
        . . . . .
        . # # # .
        `)
}

function wiggleAnim() {
    for (let i = 0; i < 4; i++) {
        basic.showLeds(`
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            # . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            . . . . #
            `)
        basic.pause(100)
    }
}

function bounceAnim() {
    for (let i = 0; i < 3; i++) {
        for (let y = 4; y >= 0; y--) {
            basic.clearScreen()
            led.plot(2, y)
            basic.pause(80)
        }
        for (let y = 0; y <= 4; y++) {
            basic.clearScreen()
            led.plot(2, y)
            basic.pause(80)
        }
    }
}

function nodAnim() {
    basic.showIcon(IconNames.Yes)
    basic.pause(300)
    basic.clearScreen()
    basic.pause(150)
    basic.showIcon(IconNames.Yes)
}

function noAnim() {
    basic.showIcon(IconNames.No)
    basic.pause(300)
    basic.clearScreen()
    basic.pause(150)
    basic.showIcon(IconNames.No)
}

// Party animations
function partyAnim() {
    for (let i = 0; i < 10; i++) {
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                led.plotBrightness(x, y, Math.randomRange(0, 255))
            }
        }
        basic.pause(150)
    }
}

function discoAnim() {
    for (let i = 0; i < 20; i++) {
        basic.clearScreen()
        for (let j = 0; j < 5; j++) {
            led.plot(Math.randomRange(0, 4), Math.randomRange(0, 4))
        }
        basic.pause(100)
    }
}

function fireworksAnim() {
    for (let i = 0; i < 2; i++) {
        // Center dot
        basic.clearScreen()
        led.plot(2, 2)
        basic.pause(200)
        // Small explosion
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
        basic.pause(200)
        // Big explosion
        basic.showLeds(`
            # . # . #
            . # # # .
            # # # # #
            . # # # .
            # . # . #
            `)
        basic.pause(300)
        basic.clearScreen()
        basic.pause(200)
    }
}

function rainbowAnim() {
    for (let b = 255; b >= 0; b -= 25) {
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                led.plotBrightness(x, y, b)
            }
        }
        basic.pause(50)
    }
    for (let b = 0; b <= 255; b += 25) {
        for (let x = 0; x < 5; x++) {
            for (let y = 0; y < 5; y++) {
                led.plotBrightness(x, y, b)
            }
        }
        basic.pause(50)
    }
}

// Superpower animations
function laserAnim() {
    for (let i = 0; i < 5; i++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(50)
    }
}

function freezeAnim() {
    basic.showLeds(`
        # # # # #
        # . # . #
        # # # # #
        # . # . #
        # # # # #
        `)
    basic.pause(500)
}

function fireAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            # # # # #
            `)
        basic.pause(150)
        basic.showLeds(`
            . . # . .
            . # . # .
            . # # # .
            # # # # #
            # # # # #
            `)
        basic.pause(150)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . # # # .
            # # # # #
            `)
        basic.pause(150)
    }
}

function magicAnim() {
    for (let i = 0; i < 5; i++) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(150)
        basic.showIcon(IconNames.Diamond)
        basic.pause(150)
    }
}

function explodeAnim() {
    basic.clearScreen()
    led.plot(2, 2)
    basic.pause(150)
    basic.showLeds(`
        . . . . .
        . . # . .
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.pause(150)
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.pause(150)
    basic.showLeds(`
        # . # . #
        . # # # .
        # # # # #
        . # # # .
        # . # . #
        `)
    basic.pause(150)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.pause(150)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.pause(150)
}

function rocketAnim() {
    // Countdown
    basic.showString("3")
    basic.pause(300)
    basic.showString("2")
    basic.pause(300)
    basic.showString("1")
    basic.pause(300)
    // Liftoff
    for (let y = 4; y >= -1; y--) {
        basic.clearScreen()
        if (y >= 0 && y < 5) {
            led.plot(2, y)
        }
        if (y + 1 >= 0 && y + 1 < 5) {
            led.plotBrightness(1, y + 1, 128)
            led.plotBrightness(3, y + 1, 128)
        }
        basic.pause(150)
    }
    basic.showIcon(IconNames.Diamond)
    music.playTone(988, 500)
}

function thunderAnim() {
    for (let i = 0; i < 3; i++) {
        basic.showLeds(`
            . . . # .
            . . # . .
            . # # # .
            . . # . .
            . # . . .
            `)
        basic.pause(100)
        basic.clearScreen()
        basic.pause(50)
    }
    music.playTone(100, 300)
}

// ==================== SOUND EFFECTS ====================

function beepSound() {
    music.playTone(262, 100)
    music.playTone(330, 100)
}

function laughSound() {
    music.playTone(523, 100)
    music.playTone(659, 100)
    music.playTone(784, 100)
    music.playTone(1047, 200)
}

function hornSound() {
    music.playTone(262, 400)
    music.playTone(262, 400)
}

function sirenSound() {
    for (let i = 0; i < 2; i++) {
        music.playTone(880, 200)
        music.playTone(660, 200)
    }
}

function fartSound() {
    for (let freq = 200; freq >= 100; freq -= 10) {
        music.playTone(freq, 50)
    }
}

function burpSound() {
    for (let freq = 150; freq <= 250; freq += 20) {
        music.playTone(freq, 30)
    }
}

function catSound() {
    music.playTone(880, 200)
    music.playTone(784, 400)
}

function dogSound() {
    music.playTone(392, 100)
    music.playTone(392, 100)
}

function duckSound() {
    music.playTone(523, 100)
    music.playTone(523, 100)
    music.playTone(523, 100)
}

function cowSound() {
    music.playTone(200, 500)
}

function pigSound() {
    music.playTone(392, 100)
    music.playTone(330, 200)
}

function frogSound() {
    music.playTone(262, 100)
    music.playTone(392, 100)
}

function snakeSound() {
    music.playTone(100, 300)
}

function monkeySound() {
    music.playTone(523, 100)
    music.playTone(659, 100)
    music.playTone(523, 100)
}

// ==================== COMMAND HANDLER ====================

function handleCommand(cmd: string) {
    cmd = cmd.trim().toLowerCase()

    // Emotions
    if (cmd == "happy") { basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # . . . #
        . # # # .
        `) }
    else if (cmd == "sad") { basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # # # .
        # . . . #
        `) }
    else if (cmd == "angry") { ANGRY.showImage(0) }
    else if (cmd == "surprised") { SURPRISED.showImage(0) }
    else if (cmd == "love") { LOVE.showImage(0) }
    else if (cmd == "sleepy") { SLEEPY.showImage(0) }
    else if (cmd == "silly") { SILLY.showImage(0) }
    else if (cmd == "crazy") { CRAZY.showImage(0) }
    else if (cmd == "dizzy") { DIZZY.showImage(0) }
    else if (cmd == "wink") { WINK.showImage(0) }
    else if (cmd == "cool") { COOL.showImage(0) }
    else if (cmd == "wow") { WOW.showImage(0) }
    else if (cmd == "oops") { OOPS.showImage(0) }
    else if (cmd == "haha") { HAHA.showImage(0) }
    else if (cmd == "cry") { CRY.showImage(0) }
    else if (cmd == "scream") { SCREAM.showImage(0) }
    else if (cmd == "shh") { SHH.showImage(0) }
    else if (cmd == "ghost") { GHOST.showImage(0) }
    else if (cmd == "alien") { ALIEN.showImage(0) }
    else if (cmd == "skull") { SKULL.showImage(0) }
    else if (cmd == "vampire") { VAMPIRE.showImage(0) }
    else if (cmd == "poop") { POOP.showImage(0) }

    // Animals
    else if (cmd == "cat") { CAT.showImage(0); catSound() }
    else if (cmd == "dog") { DOG.showImage(0); dogSound() }
    else if (cmd == "duck") { DUCK.showImage(0); duckSound() }
    else if (cmd == "cow") { COW.showImage(0); cowSound() }
    else if (cmd == "pig") { PIG.showImage(0); pigSound() }
    else if (cmd == "frog") { FROG.showImage(0); frogSound() }
    else if (cmd == "snake") { SNAKE.showImage(0); snakeSound() }
    else if (cmd == "monkey") { MONKEY.showImage(0); monkeySound() }

    // Actions
    else if (cmd == "wave") { waveAnim() }
    else if (cmd == "dance") { danceAnim() }
    else if (cmd == "spin") { spinAnim() }
    else if (cmd == "jump") { jumpAnim() }
    else if (cmd == "shake") { basic.showIcon(IconNames.Confused) }
    else if (cmd == "nod") { nodAnim() }
    else if (cmd == "no") { noAnim() }
    else if (cmd == "blink") { blinkAnim() }
    else if (cmd == "wiggle") { wiggleAnim() }
    else if (cmd == "bounce") { bounceAnim() }
    else if (cmd == "yawn") { SLEEPY.showImage(0); basic.pause(500) }
    else if (cmd == "sneeze") {
        SURPRISED.showImage(0)
        basic.pause(200)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
    }
    else if (cmd == "hiccup") {
        for (let i = 0; i < 3; i++) {
            SURPRISED.showImage(0)
            basic.pause(200)
            HAPPY.showImage(0)
            basic.pause(300)
        }
    }
    else if (cmd == "tickle") {
        HAHA.showImage(0)
        wiggleAnim()
    }

    // Sounds
    else if (cmd == "fart") { fartSound() }
    else if (cmd == "burp") { burpSound() }
    else if (cmd == "beep") { beepSound() }
    else if (cmd == "laugh") { laughSound() }
    else if (cmd == "horn") { hornSound() }
    else if (cmd == "siren") { sirenSound() }

    // Party
    else if (cmd == "party") { partyAnim() }
    else if (cmd == "disco") { discoAnim() }
    else if (cmd == "rainbow") { rainbowAnim() }
    else if (cmd == "fireworks") { fireworksAnim() }
    else if (cmd == "confetti") { partyAnim() }
    else if (cmd == "birthday") { music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once) }
    else if (cmd == "applause") {
        for (let i = 0; i < 5; i++) {
            basic.showIcon(IconNames.Happy)
            basic.pause(150)
            basic.showIcon(IconNames.Heart)
            basic.pause(150)
        }
    }
    else if (cmd == "yay") { basic.showIcon(IconNames.Happy) }

    // Superpowers
    else if (cmd == "laser") { laserAnim() }
    else if (cmd == "freeze") { freezeAnim() }
    else if (cmd == "fire") { fireAnim() }
    else if (cmd == "magic") { magicAnim() }
    else if (cmd == "invisible") { basic.clearScreen() }
    else if (cmd == "transform") { spinAnim(); basic.showIcon(IconNames.Diamond) }
    else if (cmd == "shield") {
        basic.showLeds(`
            . # # # .
            # . # . #
            # . . . #
            # . # . #
            . # # # .
            `)
    }
    else if (cmd == "thunder") { thunderAnim() }
    else if (cmd == "explode") { explodeAnim() }
    else if (cmd == "rocket") { rocketAnim() }

    // Games
    else if (cmd == "count") {
        for (let i = 1; i <= 5; i++) {
            basic.showNumber(i)
            basic.pause(500)
        }
    }
    else if (cmd == "random") { basic.showNumber(Math.randomRange(0, 9)) }
    else if (cmd == "dice") {
        let roll = Math.randomRange(1, 6)
        if (roll == 1) basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
        else if (roll == 2) basic.showLeds(`
            # . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . #
            `)
        else if (roll == 3) basic.showLeds(`
            # . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . #
            `)
        else if (roll == 4) basic.showLeds(`
            # . . . #
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            `)
        else if (roll == 5) basic.showLeds(`
            # . . . #
            . . . . .
            . . # . .
            . . . . .
            # . . . #
            `)
        else basic.showLeds(`
            # . . . #
            . . . . .
            # . . . #
            . . . . .
            # . . . #
            `)
    }
    else if (cmd == "timer") {
        for (let i = 5; i >= 1; i--) {
            basic.showNumber(i)
            basic.pause(1000)
        }
        beepSound()
    }
    else if (cmd == "quiz") {
        basic.showLeds(`
            . . # . .
            . # . # .
            . . . # .
            . . . . .
            . . # . .
            `)
    }

    // Robot movement (placeholder)
    else if (cmd == "forward") { basic.showArrow(ArrowNames.North) }
    else if (cmd == "backward") { basic.showArrow(ArrowNames.South) }
    else if (cmd == "left") { basic.showArrow(ArrowNames.West) }
    else if (cmd == "right") { basic.showArrow(ArrowNames.East) }
    else if (cmd == "stop") {
        basic.showLeds(`
            # # # # #
            # . . . #
            # . # . #
            # . . . #
            # # # # #
            `)
    }

    // Speech events
    else if (cmd == "speak_start") { basic.showIcon(IconNames.Happy) }
    else if (cmd == "speak_end") { HAPPY.showImage(0) }

    // Unknown command
    else {
        basic.showLeds(`
            . # # # .
            . . . # .
            . . # . .
            . . . . .
            . . # . .
            `)
    }
}

// ==================== BLUETOOTH SETUP ====================

let rxBuffer = ""

// Enable Bluetooth UART service
bluetooth.startUartService()

// Handle incoming Bluetooth data
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let data = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    if (data.length > 0) {
        handleCommand(data)
    }
})

// ==================== BUTTON HANDLERS ====================

input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("BTN_A\n")
    basic.showIcon(IconNames.Target)
    basic.pause(200)
    HAPPY.showImage(0)
})

input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("BTN_B\n")
    basic.showIcon(IconNames.No)
    basic.pause(200)
    HAPPY.showImage(0)
})

input.onButtonPressed(Button.AB, function () {
    bluetooth.uartWriteString("BTN_AB\n")
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    HAPPY.showImage(0)
})

// ==================== STARTUP ====================

// Show ready face
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)

// Play startup sound
music.playTone(523, 100)
music.playTone(659, 100)
music.playTone(784, 200)
