mc = sprites.create(assets.image("""plyr"""), SpriteKind.player)

number = randint(1, 10)

guess = game.ask_for_number("Guess a number between 1 and 10")

if guess == number:
    mc.say("Your guess was correct!")
else:
    mc.say("Wrong! The correct number was " + number)