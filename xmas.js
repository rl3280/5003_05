/**
 * pin A0 --> green 
 * 
 * pin A1 --> yellow 
 * 
 * pin A2 --> white 
 * 
 * pin A5 --> blue 
 * 
 * pin A6 --> red 
 * 
 * pin A7 --> orange
 */
forever(function () {
    for (let index = 0; index <= 1000; index++) {
        if (index % 2 == 1) {
            pins.A1.digitalWrite(true)
            pins.A5.digitalWrite(true)
            pins.A7.digitalWrite(true)
        } else {
            pins.A0.digitalWrite(true)
            pins.A2.digitalWrite(true)
            pins.A6.digitalWrite(true)
        }
        pause(1000)
        pins.A0.digitalWrite(false)
        pins.A1.digitalWrite(false)
        pins.A2.digitalWrite(false)
        pins.A5.digitalWrite(false)
        pins.A6.digitalWrite(false)
        pins.A7.digitalWrite(false)
        pause(1000)
    }
})
