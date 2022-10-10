input.onButtonEvent(Button.AB, input.buttonEventClick(), function () {
    basic.showNumber(5)
    basic.showNumber(4)
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    basic.showString("LOS!!!")
    basic.showLeds(`
        . . . . .
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.showLeds(`
        . . # . .
        . # # # .
        . # # # .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        . # # # .
        . # # # .
        # # # # #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # # # .
        # # # # #
        . # . # .
        . . # . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . # . # .
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . # . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
basic.forever(function () {
	
})
