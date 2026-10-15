let img;
let x;
let y;
let transparency = 0;
let ms = 0;
let lastTime = 0;

function preload() {
    img = loadImage("images/BewareMyPower.jpg");
}


function setup() {
    createCanvas(800, 800);
    x = 200;
    y = 0;
}

function draw() {
    background(220,255,255);
    image(img, x, y, 400, 400);
    textSize(32);
    ms = millis();
    textFont("Times New Roman");
    textAlign(CENTER);
    fill(0,255,0, transparency);
    if (ms - lastTime > 3000){
      transparency += 0.5;
      stroke(0,0,0, transparency);
      strokeWeight(3.5);
      text("In Brightest Day", 400, 200);
      text("In Blackest Night", 400, 250);
      text("No Evil Shall Escape My Sight", 400, 300);
      text("Let Those Who Worship Evil's Might", 400, 350);
      text("Beware My Power", 400, 400);
      text("Green Lantern's Light!", 400, 450);


    }
    
    
    y++;
    
}
function mousePressed() {
    x = 200;
    y = 0;
    transparency = 0;
    
    lastTime = ms;
    
   
    
}
