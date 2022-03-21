input.onButtonPressed(Button.A, function () {
    basic.showString(string)
})
input.onButtonPressed(Button.AB, function () {
    basic.showArrow(ArrowNames.North)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(number)
})
input.onGesture(Gesture.Shake, function () {
    sprite = game.createSprite(1, 4)
})
let sprite: game.LedSprite = null
let number = 0
let string = ""
basic.showIcon(IconNames.Skull)
basic.showNumber(0)
basic.showString("Hello!")
string = "Hello"
number = 4
