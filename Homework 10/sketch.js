// Left eye
var leftEyeX = 190;
var leftEyeY = 250;
var leftEyeMovement = 1;

// Right eye
var rightEyeX = 330;
var rightEyeY = 250;
var rightEyeMovement = 7;

// Lip movement
var lipX = 260;
var lipY = 410;
var lipMovementX = 3; // New variable for diagonal movement
var lipMovementY = 3; // New variable for diagonal movement

// Text
var size = 20;
var count = 0;
var sizeDirection = 1;

function setup() {
    createCanvas(500, 600);
}

function draw() {
    background(120, 45, 78);
    strokeWeight(1);
    
    // Head and face
    fill(128, 103, 4);
    rect(70, 200, 380, 350);
    ellipse(260, 270, 400, 450);
    fill(255, 250, 250);
    rect(210, 400, 100, 100);
    ellipse(260, 270, 300, 390);
    fill(128, 103, 4);
    ellipse(260, 130, 250, 150);

    // Eye bases
    fill(255);
    ellipse(190, 250, 70, 40);
    ellipse(330, 250, 70, 40);

    // Eyes and movement
    fill(0, 128, 0);
    circle(leftEyeX, leftEyeY, 40);
    fill(0);
    circle(leftEyeX, leftEyeY, 25);

    if (leftEyeX >= 500 || leftEyeX <= 0) {
        leftEyeMovement *= -1;
    }
    leftEyeX += leftEyeMovement;

    fill(0, 128, 0);
    circle(rightEyeX, rightEyeY, 40);
    fill(0);
    circle(rightEyeX, rightEyeY, 25);

    if (rightEyeY >= 500 || rightEyeY <= 0) {
        rightEyeMovement *= -1;
    }
    rightEyeY += rightEyeMovement;

    // Additional eye highlights and brows
    fill(255);
    circle(180, 245, 10);
    circle(180, 255, 5);
    circle(320, 245, 10);
    circle(320, 255, 5);
    fill(128, 103, 4);
    ellipse(330, 210, 70, 10);
    ellipse(190, 210, 70, 10);

    // Lips/Diagonal lip movement
    fill(206, 123, 142);
    ellipse(lipX, lipY, 70, 10); // Draw the lip

    // Check boundaries to reverse direction if needed
    if (lipX >= 500 || lipX <= 0) {
        lipMovementX *= -1;
    }
    if (lipY >= 500 || lipY <= 0) {
        lipMovementY *= -1;
    }

    // Update lip position for diagonal movement
    lipX += lipMovementX;
    lipY += lipMovementY;

    // Freckles
    fill(222, 180, 126);
    strokeWeight(2);
    point(240, 275);
    point(220, 295);
    point(190, 295);
    point(200, 285);
    point(290, 295);
    point(330, 280);
    point(310, 290);
    point(270, 315);
    point(280, 280);

    // Nose
    strokeWeight(1);
    fill(255, 228, 228);
    triangle(240, 320, 258, 260, 280, 320);
    circle(260, 320, 40);
    fill(0);
    ellipse(270, 330, 5, 2);
    ellipse(250, 330, 5, 2);

    // Shirt
    fill(50, 50, 70);
    circle(80, 550, 100);
    circle(430, 550, 100);
    rect(80, 500, 350, 100);
    rect(30, 550, 50, 100);
    rect(430, 550, 50, 100);

    // Shirt stripes
    strokeWeight(30);
    fill(255);
    line(180, 620, 180, 515);
    line(100, 620, 100, 515);
    line(260, 620, 260, 515);
    line(340, 620, 340, 515);
    line(410, 620, 410, 515);

    // Text
    textSize(40);
    text('"A Very Sad Portrait"', 70, 40);

    // Animated text for name
    textSize(size);
    size += sizeDirection;
    count++;
    if (count > 5) {
        sizeDirection *= -1;
        count = 0;
    }
    text('Kinsley Dean', 350, 580);
}