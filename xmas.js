
let soundThreshold = 120
let darkThreshold = 13
let activePattern = 0
let sensorCovered = true
let applauseRequested = false

input.buttonA.onEvent(ButtonEvent.Down, function () {
    if (activePattern == 1) {
        activePattern = 0
    } else {
        activePattern = 1
    }
})

input.buttonB.onEvent(ButtonEvent.Down, function () {
    if (activePattern == 2) {
        activePattern = 0
    } else {
        activePattern = 2
    }
})

forever(function () {
    let isCovered = input.lightLevel() < darkThreshold
    if (isCovered && !sensorCovered) {
        applauseRequested = true
    }
    sensorCovered = isCovered
    pause(50)
})

forever(function () {
    if (input.soundLevel() >= soundThreshold) {
        lightsForSound()
    } else if (applauseRequested) {
        shadowApplause()
    } else if (activePattern == 1) {
        cascade()
    } else if (activePattern == 2) {
        colorConversation()
    } else {
        turnAllOff()
        pause(50)
    }
})

function lightsForSound() {
    turnAllOn()
    while (input.soundLevel() >= soundThreshold) {
        pause(50)
    }
    turnAllOff()
}

function shadowApplause() {
    applauseRequested = false
    turnAllOff()
    for (let flash = 0; flash < 3; flash++) {
        turnAllOn()
        if (!waitForApplause()) return
        turnAllOff()
        if (!waitForApplause()) return
    }
}

function colorConversation() {
    let colors = [0, 1, 2, 3, 4, 5]
    let selected = [false, false, false, false, false, false]

    for (let i = 0; i < 3; i++) {
        let randomIndex = Math.randomRange(i, 5)
        let chosenColor = colors[randomIndex]
        colors[randomIndex] = colors[i]
        colors[i] = chosenColor
        selected[chosenColor] = true
    }

    green(selected[0])
    yellow(selected[1])
    white(selected[2])
    blue(selected[3])
    red(selected[4])
    orange(selected[5])
    if (!pauseForMood(500, 2)) return
    turnAllOff()
    if (!pauseForMood(250, 2)) return
}

function cascade() {
    green(true)
    if (!pauseForMood(250, 1)) return
    yellow(true)
    if (!pauseForMood(250, 1)) return
    green(false)
    if (!pauseForMood(250, 1)) return
    white(true)
    if (!pauseForMood(250, 1)) return
    yellow(false)
    if (!pauseForMood(250, 1)) return
    blue(true)
    if (!pauseForMood(250, 1)) return
    white(false)
    if (!pauseForMood(250, 1)) return
    red(true)
    if (!pauseForMood(250, 1)) return
    blue(false)
    if (!pauseForMood(250, 1)) return
    orange(true)
    if (!pauseForMood(250, 1)) return
    red(false)
    if (!pauseForMood(250, 1)) return

    turnAllOff()
}

/** The functions below control the LEDs and timing. */

function green(isOn: boolean) {
    pins.A0.digitalWrite(isOn)
}

function yellow(isOn: boolean) {
    pins.A1.digitalWrite(isOn)
}

function white(isOn: boolean) {
    pins.A2.digitalWrite(isOn)
}

function blue(isOn: boolean) {
    pins.A5.digitalWrite(isOn)
}

function red(isOn: boolean) {
    pins.A6.digitalWrite(isOn)
}

function orange(isOn: boolean) {
    pins.A7.digitalWrite(isOn)
}

function turnAllOn() {
    green(true)
    yellow(true)
    white(true)
    blue(true)
    red(true)
    orange(true)
}

function turnAllOff() {
    green(false)
    yellow(false)
    white(false)
    blue(false)
    red(false)
    orange(false)
}

function pauseForMood(dayDelay: number, pattern: number): boolean {
    let delay = dayDelay
    if (input.switchRight()) {
        delay = dayDelay * 4
    }
    return waitForPattern(delay, pattern)
}

function waitForApplause(): boolean {
    for (let elapsed = 0; elapsed < 150; elapsed += 50) {
        if (input.soundLevel() >= soundThreshold) {
            lightsForSound()
            return false
        }
        pause(50)
    }
    if (input.soundLevel() >= soundThreshold) {
        lightsForSound()
        return false
    }
    return true
}

function waitForPattern(milliseconds: number, pattern: number): boolean {
    let elapsed = 0
    while (elapsed < milliseconds) {
        if (input.soundLevel() >= soundThreshold) {
            lightsForSound()
            return false
        }
        if (applauseRequested) {
            shadowApplause()
            return false
        }
        if (activePattern != 0 && activePattern != pattern) {
            turnAllOff()
            return false
        }
        pause(50)
        elapsed += 50
    }
    if (input.soundLevel() >= soundThreshold) {
        lightsForSound()
        return false
    }
    if (applauseRequested) {
        shadowApplause()
        return false
    }
    if (activePattern != 0 && activePattern != pattern) {
        turnAllOff()
        return false
    }
    return true
}

