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

// Variables to store mouse click position
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
    
    walls();

    // Exit bar
    exit();

    // Check for win condition
    win();

    // Exit text
    exitText();

    // Character
    character();

    // "Bad guy" 1 and "Bad guy" 2
    badGuys();

    // Move "bad guys"
    bad1Move();
    bad2Move();

    // Check bounds for "bad guy" 1 and "bad guy" 2
    borders();

    // Move the character
    characterMovement();

    // Draw circle at mouse click
    if (mousex && mousey) {
        fill(50, 200, 100);
        circle(mousex, mousey, 30);
    }
}

function walls() {
    fill(250, 250, 250);
    rect(0, 0, 600, 50);
    rect(0, 100, 500, 50);
    rect(50, 200, 600, 50);
    rect(0, 300, 500, 50);
    rect(50, 400, 600, 50);
    rect(0, 500, 500, 50);
    rect(50, 600, 600, 50);
}

function exit() 
{
    fill(100, 200, 100);
    rect(590, 650, 20, 50);
}

function win() 
{
    if (characterX > 520 && characterY > 650 && characterY < 700) {
        textSize(20);
        fill(255);  // Set fill for visibility
        text('You Win!', 500, 675);
    }
}

function exitText() 
{
    textSize(20);
    fill(0, 0, 0);
    text('Exit', 560, 645);   
}

function character() 
{
    fill(124, 130, 229);
    circle(characterX, characterY, diameter);
}

function badGuys() 
{
   // "Bad guy" 1
   fill(200, 150, 255); 
   triangle(bad1X, bad1Y, bad1X + 20, bad1Y - 50, bad1X - 50, bad1Y - 25);
   
   // "Bad guy" 2
   fill(0, 120, 120);
   triangle(bad2X, bad2Y, bad2X, bad2Y - 40, bad2X - 30, bad2Y - 20);  
}

function bad1Move() 
{
    bad1X += bad1XSpeed;
    bad1Y += bad1YSpeed; 
}

function bad2Move() 
{
    bad2X += bad2XSpeed;
    bad2Y += bad2YSpeed;
}

function borders() 
{
    if (bad1X > width || bad1X < 0) {
        bad1XSpeed *= -1;
    }
    if (bad1Y > height || bad1Y < 0) {
        bad1YSpeed *= -1;
    }
    if (bad2X > width || bad2X < 0) {
        bad2XSpeed *= -1;
    }
    if (bad2Y > height || bad2Y < 0) {
        bad2YSpeed *= -1;
    }
}

// Function to handle character movement
function characterMovement() 
{
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

// Draw a shape when the mouse is clicked
function mousePressed() 
{
    mousex = mouseX;
    mousey = mouseY;
}
