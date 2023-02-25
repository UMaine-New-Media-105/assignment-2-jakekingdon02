// Jake Kingdon
// Assignment 2 Challange 4
// Custom flag - Japan and Kuwait "JK Initials"

function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(255);

  // Set the colors for the Kuwait flag
  fill("green");
  rect(0, 0, width, height / 3);
  fill("white");
  rect(0, height / 3, width, height / 3);
  fill("red"); // green
  rect(0, (height / 3) * 2, width, height / 3);

  // Draw the black triangle in Kuwait flag
  translate(-20, -5, 40);
  fill("black");
  triangle(20, 300, 150, 155, 20, 10);

  // Draw red circle in the Japanese flag
  fill("red");
  stroke("white");
  strokeWeight(5);
  ellipse(225, 150, 140);
}
