let current_tempeture = 0
basic.forever(function () {
    current_tempeture = input.temperature()
    basic.showNumber(current_tempeture)
    basic.pause(1000)
    basic.clearScreen()
})
