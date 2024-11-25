// Character position
var characterX = 30;
var characterY = 75;
var diameter = 25;

// Key codes
var w = 87;
var s = 83;
var a = 65;
var d = 68;

// Arrays for random circles
var myXs = []; // create an array for the x coordinate
var myYs = []; // create an array for the y coordinate
var myDiameters = []; // create array for the diameter of circles
var myXspeeds = [];
var myYspeeds = [];

// Arrays for random colors
var circleR = [];
var circleG = [];
var circleB = [];

// Variables to store mouse click position
var mousex;
var mousey;

function setup() {
    createCanvas(600, 700);

    // Initialize random circles?Cassens AI helped here, it seems complicaed but I could figure it out myself.
    for (var i = 0; i < 5; i++) {
        myXs.push(getRandomNumber(600)); // Random x within canvas
        myYs.push(getRandomNumber(700)); // Random y within canvas
        myDiameters.push(getRandomNumber(70) + 20); // Diameter (20-50)
        myXspeeds.push(getRandomSpeed()); // Random x speed
        myYspeeds.push(getRandomSpeed()); // Random y speed

        // Random colors
        circleR.push(getRandomNumber(256)); // Red (0-255)
        circleG.push(getRandomNumber(256)); // Green (0-255)
        circleB.push(getRandomNumber(256)); // Blue (0-255)
    }
}

function draw() {
    // Background
    background(50, 0, 0);

    // Draw walls
    walls();

    // Exit bar
    exit();

    // Check for win condition
    win();

    // Exit text
    exitText();

    // Character
    character();

    // Move the character
    characterMovement();

    // Draw a circle where the mouse was clicked
    if (mousex && mousey) {
        fill(50, 200, 100);
        circle(mousex, mousey, 30);
    }

      // Draw random circles and update their movement
      for (var i = 0; i < myXs.length; i++) {
        fill(circleR[i], circleG[i], circleB[i]); // Use the random color for each circle
        circle(myXs[i], myYs[i], myDiameters[i]);

        // Move the circle
        myXs[i] += myXspeeds[i];
        myYs[i] += myYspeeds[i];

        // Check for boundary collisions
        if (myXs[i] > width || myXs[i] < 0) {
            myXspeeds[i] *= -1;
        }
        if (myYs[i] > height || myYs[i] < 0) {
            myYspeeds[i] *= -1;
        }
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

function exit() {
    fill(100, 200, 100);
    rect(590, 650, 20, 50);
}

function win() {
    if (characterX > 520 && characterY > 650 && characterY < 700) {
        textSize(20);
        fill(255); // Set fill for visibility
        text('You Win!', 500, 675);
    }
}

function exitText() {
    textSize(20);
    fill(0, 0, 0);
    text('Exit', 560, 645);   
}

function character() {
    fill(124, 130, 229);
    circle(characterX, characterY, diameter);
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

// Draw a shape when the mouse is clicked
function mousePressed() {
    mousex = mouseX;
    mousey = mouseY;
}

// Helper function to get random numbers
function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Helper function to get random speeds (positive or negative)
function getRandomSpeed() {
    return Math.random() * 4 + 1 * (Math.random() > 0.5 ? 1 : -1); // Speed between -5 and 5
}
