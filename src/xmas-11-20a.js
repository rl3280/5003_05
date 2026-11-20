
let darkThreshold = 13

function cascade() {
    green(true)
    pauseForLight()
    yellow(true)
    pauseForLight()
    green(false)
    pauseForLight()
    white(true)
    pauseForLight()
    yellow(false)
    pauseForLight()
    blue(true)
    pauseForLight()
    white(false)
    pauseForLight()
    red(true)
    pauseForLight()
    blue(false)
    pauseForLight()
    orange(true)
    pauseForLight()
    red(false)
    pauseForLight()

    turnAllOff()
}

let cascadeEnabled = false

input.buttonA.onEvent(ButtonEvent.Down, function () {
    cascadeEnabled = !cascadeEnabled
})

forever(function () {
    if (cascadeEnabled) {
        cascade()
    } else {
        turnAllOff()
        pause(50)
    }
})


/** The functions below control the LEDs and the cascade timing. */

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

function pauseForLight() {
    if (input.lightLevel() < darkThreshold) {
        pause(1000)
    } else {
        pause(250)
    }
}
