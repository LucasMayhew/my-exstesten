let myEnemy: Sprite = null
function creat_a_ennmy (mySprite: Sprite) {
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . f f f f . . . . . . . . . .
        . . . . . . . . f f 1 1 1 1 f f . . . . . . . .
        . . . . . . . f b 1 1 1 1 1 1 b f . . . . . . .
        . . . . . . . f 1 1 1 1 1 1 1 1 f . . . . . . .
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d 1 1 1 1 1 1 1 1 d f . . . . . .
        . . . . . . f d d d 1 1 1 1 d d d f . . . . . .
        . . . . . . f b d b f d d f b d b f . . . . . .
        . . . . . . f c d c f 1 1 f c d c f . . . . . .
        . . . . . . . f b 1 1 1 1 1 1 f f f f . . . . .
        . . . . . . f f f c d b 1 b c 1 1 1 c f . . . .
        . . . . f c 1 1 1 c b f b f 1 b 1 b 1 f . . . .
        . . . . f 1 b 1 b 1 f f f f b f b f b f . . . .
        . . . . f b f b f f f f f f f . . . . . . . . .
        . . . . . . . . . f f f f f . . . . . . . . . .
        . . . . . . . . . . f f f . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . . . . . . . . . .
    `, SpriteKind.Enemy)
    myEnemy.follow(mySprite, 50)
}
function doSomething (mySprite: Sprite) {
    if (controller.up.isPressed()) {
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . .
            . . . . f f e e e e f f . . . .
            . . . f e e e f f e e e f . . .
            . . f f f f f 2 2 f f f f f . .
            . . f f e 2 e 2 2 e 2 e f f . .
            . . f e 2 f 2 f f 2 f 2 e f . .
            . . f f f 2 2 e e 2 2 f f f . .
            . f f e f 2 f e e f 2 f e f f .
            . f e e f f e e e e f e e e f .
            . . f e e e e e e e e e e f . .
            . . . f e e e e e e e e f . . .
            . . e 4 f f f f f f f f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `)
        pause(100)
        if (controller.up.isPressed()) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . . . f f f f . . . . . .
                . . . . f f e e e e f f . . . .
                . . . f e e e f f e e e f . . .
                . . . f f f f 2 2 f f f f . . .
                . . f f e 2 e 2 2 e 2 e f f . .
                . . f e 2 f 2 f f f 2 f e f . .
                . . f f f 2 f e e 2 2 f f f . .
                . . f e 2 f f e e 2 f e e f . .
                . f f e f f e e e f e e e f f .
                . f f e e e e e e e e e e f f .
                . . . f e e e e e e e e f . . .
                . . . e f f f f f f f f 4 e . .
                . . . 4 f 2 2 2 2 2 e d d 4 . .
                . . . e f f f f f f e e 4 . . .
                . . . . f f f . . . . . . . . .
            `)
            pause(100)
            if (controller.up.isPressed()) {
                mySprite.setImage(img`
                    . . . . . . f f f f . . . . . .
                    . . . . f f e e e e f f . . . .
                    . . . f e e e f f e e e f . . .
                    . . f f f f f 2 2 f f f f f . .
                    . . f f e 2 e 2 2 e 2 e f f . .
                    . . f e 2 f 2 f f 2 f 2 e f . .
                    . . f f f 2 2 e e 2 2 f f f . .
                    . f f e f 2 f e e f 2 f e f f .
                    . f e e f f e e e e f e e e f .
                    . . f e e e e e e e e e e f . .
                    . . . f e e e e e e e e f . . .
                    . . e 4 f f f f f f f f 4 e . .
                    . . 4 d f 2 2 2 2 2 2 f d 4 . .
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
                    . . . . . f f f f f f . . . . .
                    . . . . . f f . . f f . . . . .
                `)
                pause(100)
                if (controller.up.isPressed()) {
                    mySprite.setImage(img`
                        . . . . . . . . . . . . . . . .
                        . . . . . . f f f f . . . . . .
                        . . . . f f e e e e f f . . . .
                        . . . f e e e f f e e e f . . .
                        . . . f f f f 2 2 f f f f . . .
                        . . f f e 2 e 2 2 e 2 e f f . .
                        . . f e f 2 f f f 2 f 2 e f . .
                        . . f f f 2 2 e e f 2 f f f . .
                        . . f e e f 2 e e f f 2 e f . .
                        . f f e e e f e e e f f e f f .
                        . f f e e e e e e e e e e f f .
                        . . . f e e e e e e e e f . . .
                        . . e 4 f f f f f f f f e . . .
                        . . 4 d d e 2 2 2 2 2 f 4 . . .
                        . . . 4 e e f f f f f f e . . .
                        . . . . . . . . . f f f . . . .
                    `)
                    pause(100)
                }
            }
        }
    }
    if (controller.down.isPressed()) {
        mySprite.setImage(img`
            . . . . . . f f f f . . . . . .
            . . . . f f f 2 2 f f f . . . .
            . . . f f f 2 2 2 2 f f f . . .
            . . f f f e e e e e e f f f . .
            . . f f e 2 2 2 2 2 2 e e f . .
            . . f e 2 f f f f f f 2 e f . .
            . . f f f f e e e e f f f f . .
            . f f e f b f 4 4 f b f e f f .
            . f e e 4 1 f d d f 1 4 e e f .
            . . f e e d d d d d d e e f . .
            . . . f e e 4 4 4 4 e e f . . .
            . . e 4 f 2 2 2 2 2 2 f 4 e . .
            . . 4 d f 2 2 2 2 2 2 f d 4 . .
            . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
            . . . . . f f f f f f . . . . .
            . . . . . f f . . f f . . . . .
        `)
        pause(100)
        if (controller.down.isPressed()) {
            mySprite.setImage(img`
                . . . . . . . . . . . . . . . .
                . . . . . . f f f f . . . . . .
                . . . . f f e e e e f f . . . .
                . . . f e e e f f e e e f . . .
                . . . f f f f 2 2 f f f f . . .
                . . f f e 2 e 2 2 e 2 e f f . .
                . . f e 2 f 2 f f f 2 f e f . .
                . . f f f 2 f e e 2 2 f f f . .
                . . f e 2 f f e e 2 f e e f . .
                . f f e f f e e e f e e e f f .
                . f f e e e e e e e e e e f f .
                . . . f e e e e e e e e f . . .
                . . . e f f f f f f f f 4 e . .
                . . . 4 f 2 2 2 2 2 e d d 4 . .
                . . . e f f f f f f e e 4 . . .
                . . . . f f f . . . . . . . . .
            `)
            pause(100)
            if (controller.down.isPressed()) {
                mySprite.setImage(img`
                    . . . . . . f f f f . . . . . .
                    . . . . f f e e e e f f . . . .
                    . . . f e e e f f e e e f . . .
                    . . f f f f f 2 2 f f f f f . .
                    . . f f e 2 e 2 2 e 2 e f f . .
                    . . f e 2 f 2 f f 2 f 2 e f . .
                    . . f f f 2 2 e e 2 2 f f f . .
                    . f f e f 2 f e e f 2 f e f f .
                    . f e e f f e e e e f e e e f .
                    . . f e e e e e e e e e e f . .
                    . . . f e e e e e e e e f . . .
                    . . e 4 f f f f f f f f 4 e . .
                    . . 4 d f 2 2 2 2 2 2 f d 4 . .
                    . . 4 4 f 4 4 4 4 4 4 f 4 4 . .
                    . . . . . f f f f f f . . . . .
                    . . . . . f f . . f f . . . . .
                `)
                pause(100)
                if (controller.down.isPressed()) {
                    mySprite.setImage(img`
                        . . . . . . . . . . . . . . . .
                        . . . . . . f f f f . . . . . .
                        . . . . f f e e e e f f . . . .
                        . . . f e e e f f e e e f . . .
                        . . . f f f f 2 2 f f f f . . .
                        . . f f e 2 e 2 2 e 2 e f f . .
                        . . f e f 2 f f f 2 f 2 e f . .
                        . . f f f 2 2 e e f 2 f f f . .
                        . . f e e f 2 e e f f 2 e f . .
                        . f f e e e f e e e f f e f f .
                        . f f e e e e e e e e e e f f .
                        . . . f e e e e e e e e f . . .
                        . . e 4 f f f f f f f f e . . .
                        . . 4 d d e 2 2 2 2 2 f 4 . . .
                        . . . 4 e e f f f f f f e . . .
                        . . . . . . . . . f f f . . . .
                    `)
                    pause(100)
                }
            }
        }
    }
}
forever(function () {
	
})
