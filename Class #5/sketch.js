let img;
let x;
let y;


function preload() {
    img = loadImage("images/Nova.jpg");
}


function setup() {
    createCanvas(600, 600);
    x = 0;
    y = 0;
}

function draw() {
    background(220);
    image(img, x, y, 100, 100);
    textSize(32);
    textFont("Times New Roman");
    textAlign(CENTER);
    fill(0,255,0);
    text("Nova", 300, 300);
    x++;
    y++;
}
