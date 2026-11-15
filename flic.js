forever(function () {
    for (let index = 0; index <= 1000; index++) {
        if (index % 2 == 1) {
            pins.A3.digitalWrite(false)
            pins.A6.digitalWrite(false)
            pins.A0.digitalWrite(true)
        } else {
            pins.A5.digitalWrite(true)
            pins.A2.digitalWrite(true)
            pins.A7.digitalWrite(true)
        }
        pause(1000)
        pins.A0.digitalWrite(false)
        pins.A2.digitalWrite(false)
        pins.A3.digitalWrite(false)
        pins.A5.digitalWrite(false)
        pins.A6.digitalWrite(false)
        pins.A7.digitalWrite(false)
        pause(1000)
    }
})
