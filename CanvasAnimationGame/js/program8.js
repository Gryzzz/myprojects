//
// Get context
//
var canvas = document.querySelector("canvas");
var ctx = canvas.getContext("2d");
var score = 0;
var spriteSpeed = 1;
var gameTime = 0;
var scorePlus = false;
var spriteJump = 0;
// Setup game timer -- independent of animation timer
var gameTimer = Object.create(objTimer);
///sprite object--------------------------------------------------------------
var sprite = {
    source: 0, // empty sprite position in the spritessheet is default
    SIZE: 64, // width and height of sprites
    SHOWLOC: 0, // normal sprite positon in the spritesheet
    HITLOC: 198, // hit position in the spritesheet
    x: undefined, // origin of sprite in canvas
    y: undefined,
    HIDING: 0, // sprite states
    MOVING: 1,
    HIT: 2,
    state: 0, // default state is HIDING
    speed: 3, // speed is 3 pixels
    waitTime: undefined, // stores the random time to wait before displaying

    // Method to find random animation time
    setWaitTime: function() {
        // 
        this.waitTime = Math.ceil(Math.random() * 30) * 5;
    },
    updateAnimation: function() {

        // Change the behavior of animation based on the state
        if (this.state === this.HIT) {
            if (this.waitTime > 60) {
                this.state = this.HIDING;
                this.source = undefined;
                this.waitTime = 300;
            } else {
                this.source = this.HITLOC;
                this.waitTime++;
            }



        } else if (this.waitTime > 0 && this.state === this.HIDING) {
            // sprite is hiding
            this.waitTime--;
            if (this.waitTime <= 0)
                this.state = this.MOVING;
        } else {
            this.waitTime++;
            if (this.waitTime >= 121) {

                this.state = this.HIDING;
                this.source = undefined;
                if (this.SHOWLOC == 0) {
                    this.x = Math.ceil(Math.random() * 150) * 5;
                    this.y = Math.ceil(Math.random() * 50) * 5;
                } else if (this.SHOWLOC == 64) {
                    spriteJump = Math.ceil(Math.random() * (2)) * 1;
                    this.x = Math.ceil(Math.random() * 100) * 1;
                    this.y = Math.ceil(Math.random() * 100) * 1;
                } else {
                    this.x = Math.ceil(Math.random() * 50) * 3;
                    this.y = Math.ceil(Math.random() * 150) * 3;
                }


            } else {
                // sprite is visible
                this.source = this.SHOWLOC;

                // check if sprite has moved out of bounds
                if (this.x > canvas.width - this.SIZE || this.x < 0) {
                    this.speed = -this.speed;
                }
                //sprite's direction

                if (this.SHOWLOC == 0) {
                    if (spriteJump > 1) {
                        this.x += this.speed;
                    } else {
                        this.x -= this.speed;
                    }
                } else if (this.SHOWLOC == 64) {
                    if (spriteJump > 1) {
                        this.x += this.speed;
                    } else {
                        this.x -= this.speed;
                    }
                } else {
                    if (spriteJump > 1) {
                        this.x += this.speed;
                    } else {
                        this.x -= this.speed;
                    }
                }

                //this.x += this.speed;
            }
        }
    }
};
//---------------------------end of sprite object---------------
// Initialize game stats
//


var displayScore = document.querySelector("#score");
var displayTimeLeft = document.querySelector("#timeLeft");

var sprites = [];
//creating new 3 sprites
//Bird
var sprite1 = Object.create(sprite);
sprite1.x = 200;
sprite1.source = undefined;
sprite1.y = 10;
sprite1.SHOWLOC = 64;
sprite1.speed = 2 * spriteSpeed;
sprites.push(sprite1);
//Bee
var sprite2 = Object.create(sprite);
sprite2.x = 10;
sprite2.y = 410;
sprite2.source = undefined;
sprite2.SHOWLOC = 128;
sprite2.speed = 5 * spriteSpeed;
sprites.push(sprite2);
//Butterfly
var sprite3 = Object.create(sprite);
sprite3.x = 400;
sprite3.source = undefined;
sprite3.y = 270;
sprite3.SHOWLOC = 0;
sprite3.speed = 3 * spriteSpeed;
sprites.push(sprite3);

// Listen for mouse down events
//
canvas.addEventListener("mousedown", mouseDownHandler, false);
var image = new Image();
// Load image
//
image.src = "images/rowSet.png";


image.addEventListener("load", loadHandler, false);


function loadHandler() {
    for (var i = 0; i < sprites.length; i++) {
        sprites[i].setWaitTime();

        // Start the animation loop (runs indefinitely)
    }
    // Start the game timer
    gameTimer.time = 30;
    gameTimer.start();

    // Start the animation loop (runs indefinitely)
    animationLoop();

}


function mouseDownHandler(event) {
        // Check if mouse was clicked on the sprite
        for (var i = 0; i < sprites.length; i++) {

            // Calculate mouse (x,y) relative to canvas origin
            var canvas_x = event.pageX - canvas.offsetLeft;
            var canvas_y = event.pageY - canvas.offsetTop;


            if (canvas_x > sprites[i].x && canvas_x < sprites[i].x + sprites[i].SIZE &&
                canvas_y > sprites[i].y && canvas_y < sprites[i].y + sprite.SIZE) {

                if (sprites[i].state != sprites[i].HIT && sprites[i].SHOWLOC != 0) {
                    score += 1;
                    sprites[i].state = sprites[i].HIT;
                    sprites[i].waitTime = 0;

                } else
                if (sprites[i].state != sprites[i].HIT) {
                    score += 3;
                    sprites[i].state = sprites[i].HIT;
                }
                sprites[i].waitTime = 0;



            }
        }
    }
    //}


//**************************************************************************
// Game animation loop: fires every frame (60 times/sec)

//
function animationLoop() {



        // As long as game timer is positive, run the game animation loop
        if (gameTimer.time > 0) {
            // Animation loop runs about 60 frames/sec
            requestAnimationFrame(animationLoop, canvas);
        }
        for (var i = 0; i < sprites.length; i++) {
            // Update the sprite's animation -- even once after game time reaches 0
            sprites[i].updateAnimation();

            // Check for end of game
            if (gameTimer.time === 0) {
                endGame();
            }

            // Display the game
            render();
        }
    }
    //
    //**************************************************************************

function endGame() {
    displayTimeLeft.innerHTML = "0";
    gameTimer.stop();
    sprites = 0;
    document.getElementById("canvas").style.backgroundImage = "url('images/clouds.jpg')";
}

// Draw game 
//
function render() {

    // Clear context
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < sprites.length; i++) {


        // Draw new game state
        var curSprite = sprites[i];
        ctx.drawImage(image,
            curSprite.source, 0, 64, 64,
            Math.floor(curSprite.x), Math.floor(curSprite.y), 64, 64);

    }
    // Display game stats
    displayScore.innerHTML = score;
    displayTimeLeft.innerHTML = gameTimer.time;


}

function newGame() {
    score = 0;
    gameTimer.time = 30;
    gameTimer.start();
}