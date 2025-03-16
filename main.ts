let mc = sprites.create(assets.image`plyr`, SpriteKind.Player)
let number = randint(1, 10)
let guess = game.askForNumber("Guess a number between 1 and 10")
if (guess == number) {
    mc.say("Your guess was correct!")
} else {
    mc.say("Wrong! The correct number was " + number)
}

