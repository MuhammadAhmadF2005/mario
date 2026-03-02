var onetwotunnel = Mario.onetwotunnel = function () {
    level = new Mario.Level({
        playerPos: [40, 16],
        loader: Mario.onetwotunnel,
        background: "#000000",
        scrolling: false,
        coinSprite: function () {
            return new Mario.Sprite('sprites/items.png', [0, 96], [16, 16], 6, [0, 0, 0, 0, 1, 2, 1]);
        },
        floorSprite: new Mario.Sprite('sprites/tiles.png', [0, 32], [16, 16], 0),
        wallSprite: new Mario.Sprite('sprites/tiles.png', [32, 32], [16, 16], 0),
        brickSprite: new Mario.Sprite('sprites/tiles.png', [16, 0], [16, 16], 0),
        brickBounceSprite: new Mario.Sprite('sprites/tiles.png', [32, 0], [16, 16], 0),
        ublockSprite: new Mario.Sprite('sprites/tiles.png', [48, 0], [16, 16], 0),
        pipeLMidSprite: new Mario.Sprite('sprites/tiles.png', [0, 144], [16, 16], 0),
        pipeRMidSprite: new Mario.Sprite('sprites/tiles.png', [16, 144], [16, 16], 0),
        pipeLEndSprite: new Mario.Sprite('sprites/tiles.png', [0, 128], [16, 16], 0),
        pipeREndSprite: new Mario.Sprite('sprites/tiles.png', [16, 128], [16, 16], 0),
        pipeUpMid: new Mario.Sprite('sprites/tiles.png', [0, 144], [32, 16], 0),
        pipeSideMid: new Mario.Sprite('sprites/tiles.png', [48, 128], [16, 32], 0),
        pipeLeft: new Mario.Sprite('sprites/tiles.png', [32, 128], [16, 32], 0),
        pipeTop: new Mario.Sprite('sprites/tiles.png', [0, 128], [32, 16], 0),

        LPipeSprites: [
            new Mario.Sprite('sprites/tiles.png', [32, 128], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [32, 144], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [48, 128], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [48, 144], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [64, 128], [16, 16], 0),
            new Mario.Sprite('sprites/tiles.png', [64, 144], [16, 16], 0),
        ]

    });

    player.pos[0] = level.playerPos[0];
    player.pos[1] = level.playerPos[1];
    vX = 0;
    level.putFloor(0, 16);
    level.putWall(0, 13, 11);

    // Custom Tunnel Layout for 1-2
    var walls = [3, 4, 5, 6, 10, 11, 12, 13];
    walls.forEach(function (loc) {
        level.putWall(loc, 13, 3);
        level.putWall(loc, 2, 1); // Ceiling
    });

    // A pattern of coins
    var coins = [
        [4, 7], [5, 7],
        [11, 7], [12, 7],
        [5, 5], [11, 5]
    ];
    coins.forEach(function (pos) {
        level.putCoin(pos[0], pos[1]);
    });

    // Return to 1-2 (Vertical Pipe)
    level.putWall(13, 13, 2);
    level.putWall(14, 13, 2);
    level.putRealPipe(13, 11, 2, "DOWN", function () {
        Mario.onetwo.call();
        player.pos = [120 * 16, 11 * 16]; // Warp to the pipe at x=120 in 1-2
        player.pipe("UP", function () { ; });
    });

    level.putPipe(15, 13, 13);

    music.overworld.pause();
    music.underground.currentTime = 0;
    music.underground.play();
};
