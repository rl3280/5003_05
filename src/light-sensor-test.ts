let darkThreshold = 1

forever(function () {
    let lightLevel = input.lightLevel()
    console.logValue("light", lightLevel)

    if (lightLevel < darkThreshold) {
        pins.A0.digitalWrite(false)
    } else {
        pins.A0.digitalWrite(true)
    }

    pause(200)
})
