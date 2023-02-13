function setup() {
createCanvas(400, 400);
}

function draw() {
background(20);
drawJ();
}

function drawJ() {
stroke('white');
strokeWeight(2)
fill(40, 60, 250 );

// let row 2 = purple background
drawRow(40, 120, 80, 3);
drawRow(280, 120, 80, 4);
drawRow(360, 120, 80, 4);

stroke(50);
fill(0, 0, 450);

// let 'red' ellipses = "J"
stroke('white')
strokeWeight(2)
fill('blue'); 
drawRow(40, 40, 80, 100);
drawRow(40, 200, 80, 100);
drawRow(40, 280, 80, 100);
drawRow(200, 280, 80, 4);
drawRow(120, 200, 80, 20);
drawRow(40, 360, 80, 100);

// let 3 rects in the second row be 'red'
fill('red');
ellipse(120, 120, 80, 80);
ellipse(200, 120, 80, 80);
ellipse(280, 120, 80, 80);
  
// let 1 rects in the third row be 'red'
fill('red');
ellipse(200, 200, 80, 80);
  
// let 2 rects in the fourth row be 'red'
fill('red');
ellipse(40, 280, 80, 80);
ellipse(200, 280, 80, 80);
  
// let 1 rects in the third row be 'red'
fill('red');
ellipse(120, 360, 80, 80);
}


function drawRow(x, y, size, amount) {
for (let i = 0; i < amount; i++) {
ellipse(x, y, size);
x += 80;
}
}


