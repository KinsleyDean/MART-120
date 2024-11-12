// Character position
var characterX = 30;
var characterY = 75;
var diameter = 25;

// Key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// "Bad guy" positions and speeds
var bad1X = 600, bad1Y = 550;
var bad2X = 600, bad2Y = 150;
var bad1XSpeed, bad1YSpeed;
var bad2XSpeed, bad2YSpeed;

// Create a shape when the mouse is clicked
var mousex;
var mousey;

function setup() {
    createCanvas(600, 700);
    
    // Set random speeds for "bad guys"
    bad1XSpeed = Math.floor(Math.random() * 5) + 1;
    bad1YSpeed = Math.floor(Math.random() * 5) + 1;
    bad2XSpeed = Math.floor(Math.random() * 5) + 1;
    bad2YSpeed = Math.floor(Math.random() * 5) + 1;

    
}

function draw() {
    // The base look to things (background and walls)
    background(50, 0, 0);
    fill(250, 250, 250);
    rect(0, 0, 600, 50);
    rect(0, 100, 500, 50);
    rect(50, 200, 600, 50);
    rect(0, 300, 500, 50);
    rect(50, 400, 600, 50);
    rect(0, 500, 500, 50);
    rect(50, 600, 600, 50);

    // Exit bar
    fill(100, 200, 100);
    rect(590, 650, 20, 50);
    if (characterX >520 && characterY >650 && characterY<700)
    {textSize(20)
    text('You Win!',500, 675);
    }

    // Exit text
    textSize(20);
    fill(0, 0, 0);
    text('Exit', 560, 645);

    // Character
    fill(124, 130, 229);
    circle(characterX, characterY, diameter);

    // "Bad guy" 1
    fill(200, 150, 255); 
    triangle(bad1X, bad1Y, bad1X + 20, bad1Y - 50, bad1X - 50, bad1Y - 25);
    
    // "Bad guy" 2
    fill(0, 120, 120);
    triangle(bad2X, bad2Y, bad2X, bad2Y - 40, bad2X - 30, bad2Y - 20);

    // Move "bad guys"
    bad1X += bad1XSpeed;
    bad1Y += bad1YSpeed;
    bad2X += bad2XSpeed;
    bad2Y += bad2YSpeed;

    // Check bounds for "bad guy" 1
    if (bad1X > width || bad1X < 0) {
        bad1XSpeed *= -1;
    }
    if (bad1Y > height || bad1Y < 0) {
        bad1YSpeed *= -1;
    }

    // Check bounds for "bad guy" 2
    if (bad2X > width || bad2X < 0) {
        bad2XSpeed *= -1;
    }
    if (bad2Y > height || bad2Y < 0) {
        bad2YSpeed *= -1;
    }

    // Move the character
    characterMovement();

    circle(mousex, mousey, 30);
}

// Function to handle character movement
function characterMovement() {
    if (keyIsDown(w)) {
        characterY -= 5;
    }
    if (keyIsDown(s)) {
        characterY += 5;
    }
    if (keyIsDown(a)) {
        characterX -= 5;
    }
    if (keyIsDown(d)) {
        characterX += 5;
    }
}
function mousePressed()
    {
        mousex = mouseX;
        mousey = mouseY;
        
    }