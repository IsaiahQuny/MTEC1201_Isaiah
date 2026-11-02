/* I would've loved to do something cool like 
make a guessing game where the player has to guess 
the name of Ben 10 Aliens that would appear but I chose
The Green Lantern so I'm sticking with Green Lantern
*/
let x = 100;
let y = 100;
let transparency = 255;
let ms = 0;
let lastTime = 0;
let scene = 1;
let font1;
let font2;
let font3;
let font4;


function preload() {
  font1 = loadFont('assets/Bangers-Regular.ttf');
  font2 = loadFont('assets/Orbitron-VariableFont_wght.ttf');
  font3 = loadFont('assets/RubikMonoOne-Regular.ttf');
  font4 = loadFont('assets/Saira-Italic-VariableFont_wdth,wght.ttf');
}

function setup() {
    createCanvas(1000, 1000);
    
  

    }


    function draw() {
        ms = millis();
    if (scene === 1) {

        background(0);
        fill(175, 255, 210,transparency);
        stroke(105,255,105,transparency);
        strokeWeight(45);
        circle(x, y, 200);
        x = x + 0.5;
        y = y + 0.5;
        
        if (ms - lastTime > 5000) {
            transparency = transparency - 25;
            lastTime = ms;
        }
    }

    if (scene === 2) {
        background(0);

        fill(218,255,200);
        stroke(180,255,205);
        strokeWeight(25);
        textAlign(CENTER);
        textSize(60);
        textFont(font2);
        
        text("HALT", 500, 500);
}
else if (scene === 3) {
    
    
    
        background(0);
        
        fill(255,255,255);
        strokeWeight(25);
        textAlign(CENTER);
        textSize(35);
        textFont(font2);
        text("Resident of sector 2814", 500, 500);
}

}
function keyPressed() {
        if (keyCode === 82) {
            scene = 1;
            x = 100;
            y = 100;
            transparency = 255;

            ms = millis();
            lastTime = 0;
        }
    }
     function mousePressed() {
        if (scene === 2) {
            scene = 3;
        }
      
   

       
    
     }