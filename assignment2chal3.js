// Jake Kingdon - Assignment2chal3

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("blue"); // Let the background be "blue"

  // Let the outline white
  stroke("white");
  strokeWeight(4);

  // Let the 8 vertex = red octogon
  // add scale
  scale(0.2);
  fill("red");
  beginShape();
  // X: how far the sprite will appear from the left edge.
  // Y: how far the sprite will appear from the top edge.
  vertex(100, 50);
  vertex(150, 50);
  vertex(200, 100);
  vertex(200, 150);
  vertex(150, 200);
  vertex(100, 200);
  vertex(50, 150);
  vertex(50, 100);
  endShape(CLOSE);

  // Using "rect" to create Stop sign "pole"
  // I know We're not suposed to use "rect" but     I already made my custom shape above. I'm simply using rect to elavate and to add creativity to my design.

  noStroke();
  fill("gray");
  rect(120, 202, 10, 200);

  // Write out the word "STOP"
  fill("white"); // Let fill color be "white"
  textSize(40); // Let the text size be "40"
  text("STOP", 70, 140); // Let the text say "STOP"
}
