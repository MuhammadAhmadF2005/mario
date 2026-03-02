var onetwo = Mario.onetwo = function () {
    level = new Mario.Level({
        playerPos: [56, 192],
        loader: Mario.onetwo,
        background: "#000000",
        scrolling: true,
        backgroundImg: {
            img: function () {
                var bg = new Image();
                // Example fallback retro pattern. We can swap this for a real image later!
                // For now we use the tiles image as a placeholder to prove the looping works.
                bg.src = 'sprites/tiles.png';
                return bg;
            }(),
            width: 512
        },
        invincibility: [144, 192, 240],
        exit: 204,
        floorSprite: new Mario.Sprite('sprites/tiles.png', [0, 0], [16, 16], 0),
        cloudSprite: new Mario.Sprite('sprites/tiles.png', [0, 320], [48, 32], 0),
        wallSprite: new Mario.Sprite('sprites/tiles.png', [0, 16], [16, 16], 0),
        brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16, 16], 0),
        brickBounceSprite: new Mario.Sprite('sprites/tiles.png', [32, 0], [16, 16], 0),
        rubbleSprite: function () {
            return new Mario.Sprite('sprites/items.png', [64, 0], [8, 8], 3, [0, 1])
        },
        ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16, 16], 0),
        superShroomSprite: new Mario.Sprite('sprites/items.png', [0, 0], [16, 16], 0),
        fireFlowerSprite: new Mario.Sprite('sprites/items.png', [0, 32], [16, 16], 20, [0, 1, 2, 3]),
        starSprite: new Mario.Sprite('sprites/items.png', [0, 48], [16, 16], 20, [0, 1, 2, 3]),
        pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16, 16], 0),
        pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16, 16], 0),
        pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16, 16], 0),
        pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16, 16], 0),

        pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32, 16], 0),
        pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16, 32], 0),
        pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16, 32], 0),
        pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32, 16], 0),
        qblockSprite: new Mario.Sprite('sprites/tiles.png', [384, 0], [16, 16], 8, [0, 0, 0, 0, 1, 2, 1]),
        bcoinSprite: function () {
            return new Mario.Sprite('sprites/items.png', [0, 112], [16, 16], 20, [0, 1, 2, 3]);
        },
        cloudSprites: [
            new Mario.Sprite('sprites/tiles.png', [0, 320], [16, 32], 0),
            new Mario.Sprite('sprites/tiles.png', [16, 320], [16, 32], 0),
            new Mario.Sprite('sprites/tiles.png', [32, 320], [16, 32], 0)
        ],
        hillSprites: [
            new Mario.Sprite('sprites/tiles.png', [128, 128], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [144, 128], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [160, 128], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [128, 144], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [144, 144], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [160, 144], [16, 16], 0)
        ],
        bushSprite: new Mario.Sprite('sprites/tiles.png', [176, 144], [48, 16], 0),
        bushSprites: [
            new Mario.Sprite('sprites/tiles.png', [176, 144], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [192, 144], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [208, 144], [16, 16], 0)],
        goombaSprite: function () {
            return new Mario.Sprite('sprites/enemy.png', [0, 16], [16, 16], 3, [0, 1]);
        },
        koopaSprite: function () {
            return new Mario.Sprite('sprites/enemy.png', [96, 0], [16, 32], 2, [0, 1]);
        },
        flagPoleSprites: [
            new Mario.Sprite('sprites/tiles.png', [256, 128], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [256, 144], [16, 16], 0),
            new Mario.Sprite('sprites/items.png', [128, 32], [16, 16], 0)
        ]
    });

    ground = [[0, 212]]; // Continuous ground for this underground level
    player.pos[0] = level.playerPos[0];
    player.pos[1] = level.playerPos[1];
    vX = 0;

    //build THE GROUND
    ground.forEach(function (loc) {
        level.putFloor(loc[0], loc[1]);
    });

    // Custom 1-2 Underground Layout

    level.putBrick(10, 9, null);
    level.putQBlock(11, 9, new Mario.Mushroom([11 * 16, 80]));
    level.putBrick(12, 9, null);
    level.putQBlock(13, 9, new Mario.Bcoin([13 * 16, 144]));
    level.putBrick(14, 9, null);

    level.putPipe(28, 13, 3);
    level.putPipe(38, 13, 4);

    // Entrance to Level 1-2 Tunnel!
    level.putRealPipe(48, 13, 3, "DOWN", Mario.onetwotunnel);

    level.putWall(60, 13, 3);
    level.putWall(61, 13, 4);
    level.putWall(62, 13, 5);
    level.putWall(63, 13, 4);
    level.putWall(64, 13, 3);

    level.putBrick(77, 9, null);
    level.putQBlock(78, 9, new Mario.Star([78 * 16, 144]));
    level.putBrick(79, 9, null);

    level.putWall(100, 13, 2);
    level.putWall(101, 13, 2);
    level.putWall(102, 13, 2);
    level.putWall(103, 13, 2);
    level.putWall(104, 13, 2);

    level.putPipe(120, 13, 2);
    level.putPipe(130, 13, 3);
    level.putPipe(140, 13, 4);

    level.putWall(160, 13, 1);
    level.putWall(161, 13, 2);
    level.putWall(162, 13, 3);
    level.putWall(163, 13, 4);
    level.putWall(164, 13, 5);
    level.putWall(165, 13, 6);
    level.putWall(166, 13, 7);
    level.putWall(167, 13, 8);
    level.putWall(168, 13, 8);
    level.putFlagpole(180);

    //and enemies
    level.putGoomba(22, 12);
    level.putGoomba(33, 12);
    level.putGoomba(43, 12);
    level.putGoomba(55, 12);
    level.putGoomba(70, 12);
    level.putGoomba(82, 12);
    level.putKoopa(90, 11);
    level.putGoomba(110, 12);
    level.putGoomba(125, 12);
    level.putGoomba(135, 12);
    level.putKoopa(150, 11);

    music.overworld.pause();
    music.underground.play();
};
