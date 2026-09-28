
let  x = 0; // x-position of circle
let y = 0;

function setup() {
  createCanvas(600, 600);
  background(220);
  


}
function draw() {
  // blue circle
  background (220);
  fill (0,100,0)
  stroke (100,300,100);
  strokeWeight( 20);
  circle(x, y, 50);
  y = y + 50;
  x = x + 30;
 //line (pmouseX, pmouseY, mouseX, mouseY);
}


function mousePressed() {
  y = 0;
  x = 0;
}

function keyPressed() {
  y = 0;
  x = 0;
}