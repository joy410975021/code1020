basic.forever(function () {
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x, y)
            basic.pause(100)
            break;
        }
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x + 1, 4 - y)
            basic.pause(100)
            break;
        }
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x + 2, y)
            basic.pause(100)
            break;
        }
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x + 3, 4 - y)
            basic.pause(100)
            break;
        }
    }
    for (let y = 0; y <= 4; y++) {
        for (let x = 0; x <= 4; x++) {
            led.plot(x + 4, y)
            basic.pause(100)
            break;
        }
    }
})
