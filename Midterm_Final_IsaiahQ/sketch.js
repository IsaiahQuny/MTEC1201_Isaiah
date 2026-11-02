/*Sworn and Ringed by Isaiah Quick


I would've loved to do something cool like 
make a guessing game where the player has to guess 
the name of Ben 10 Aliens that would appear but I chose
The Green Lantern so I'm sticking with Green Lantern
*/
let x = 100;
let y = 100;
let transparency = 255;
let ms = 0;
let lastTime = 0;
let scene = 1
let font1;
let font2;
let font3;
let font4;

/*My project is going to be a little scene of the ring choosing YOU,
yes, YOU, as the next Green Lantern. I think it'd be fun.
I'll try and make it as interactive as I can but I'm very behind on
basic stuff so I'm kinda very limited with what I got.*/


function preload() {
  font1 = loadFont('assets/Bangers-Regular.ttf');
  font2 = loadFont('assets/Orbitron-VariableFont_wght.ttf');
  font3 = loadFont('assets/RubikMonoOne-Regular.ttf');
  font4 = loadFont('assets/Saira-Italic-VariableFont_wdth,wght.ttf');
  image1 = loadImage('assets/Green-Lantern.png');
  image2 = loadImage('assets/Silohoutte.png');
  image3 = loadImage('assets/Ring.png')
  image4 = loadImage('assets/Earth.png')
}
/*I want a multitude of fonts. I'm fancy like that. Comics use a
whole plethora of fonts to convey different emotions, different
speech patterns etc etc*/

function setup() {
    createCanvas(1000, 1000);
    /*I'm gonna make my canvas huge as hockey sticks*/

  

    }


    function draw() {
        ms = millis();
    if (scene == 1) {

        background(0);
        fill(175, 255, 189,transparency);
        stroke(105,255,105,transparency);
        strokeWeight(24);
        circle(x, y, 125);
        x = x + 0.5;
        y = y + 0.5;
        
        if (ms - lastTime > 5000) {
            transparency = transparency - 5;
            lastTime = ms;
        }
    }
/* I'm taking most of what I learned from Short Study #4, since
I don't even have 3 short studies to my name so I'm basing this project
off of 4, since I'm really proud of it and it's like all I got.*/

    if (scene == 2) {
        background(0);

        fill(218,255,200);
        stroke(180,255,205);
        strokeWeight(25);
        textAlign(CENTER);
        textSize(200);
        textFont(font2);
        
        text("HALT", 500, 500);
}
    if (scene == 3) {
    
    /*Alright, I figured it out */

    
        background(0);
        
        fill(255,255,255);
        stroke(0);
        strokeWeight(12);
        textAlign(CENTER);
        textSize(45);
        textFont(font2);
        text("Resident of sector 2814", 500, 500);
}
    if (scene == 4) {
        background(0);

        fill(255,255,255);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(25);
        textFont(font2);
        text("The Stationed Green Lantern of the sector has passed.", 500, 500);
    }
    if (scene == 5) {
        background(0);

        fill(255,255,255);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(25);
        textFont(font2);
        text("The ring has chosen", 350, 500);

        fill(175, 255, 189);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(60);
        textFont(font3);
        text("YOU", 560, 500);

        fill(255,255,255);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(25);
        textFont(font2);
        text("as the next Green Lantern of the planet you call 'earth'.", 500, 550);
        image(image3, 20, 10, 500, 500)

    }
    if (scene == 6) {
        background(0);

        fill(255,255,255);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(25);
        textFont(font2);
        text("There is only one question left to ask.", 500, 500);
    }
    if (scene == 7) {
        background(5,65,34);

        fill(100,255,125);
        stroke(200,255,200);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(56);
        textFont(font3);
        text("ARE YOU AFRAID?", 395, 125);
        image(image1, 150, 250,500,500);
          /* You know, if I was actually good at coding I would've
    made it that you have to choose yes or no, and if you choose no
    it'll keep bugging you until you say "yes", but we don't have time
    for that. */
    }
    if (scene == 8) {
        background(0);

        fill(255,255,255);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(60);
        textFont(font2);
        text("Very well then.", 475, 500);
    }
    if (scene == 9) {
        background(0);

        fill(255,255,255);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(35);
        textFont(font2);
        text("Recite the oath to receive the power of.", 415, 500);
        fill(100,255,125);
        stroke(200,255,200);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(40);
        textFont(font4);
        text("THE GREEN LANTERN", 395, 600);
    }

    if (scene == 10) {
        background(0);

        fill(255,255,255);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(35);
        textFont(font2);
        text("Repeat the following:", 415, 500);
    }
    if (scene == 11) {
        background(0,10,0);
        textSize(32);
    ms = millis();
    textFont(font3);
    textAlign(CENTER);
    fill(0,255,0, );
      strokeWeight(3.5);
      text("In Brightest Day", 400, 200);
      text("In Blackest Night", 400, 250);
      text("No Evil Shall Escape My Sight", 400, 300);
      text("Let Those Who Worship Evil's Might", 400, 350);
      text("BEWARE My Power", 400, 400);
      text("Green Lantern's Light!", 400, 450);

    }
/*I wanted to make this fade in, and I wanted to make each sentence
fade in one by one, but I don't know how to do that without
messing up my work, and I'm behind so I'm not doing that 
for this project. I took this oath from my short study 4*/

    if (scene == 12) {
        background(0);
        fill(255,255,255);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(60);
        textFont(font2);
        text("Congratulations", 475, 500);
    }
    if (scene == 13) {
        background(0,0,10);
    
        


        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(60);
        textFont(font2);
        text("You are now the", 475, 500);

        fill(100,255,125);
        stroke(200,255,200);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(60);
        textFont(font4);
        text("GREEN LANTERN", 475, 600);    
        
        fill(255,255,255);
        stroke(0);
        strokeWeight(6);
        textAlign(CENTER);
        textSize(60);
        textFont(font2);
        text("of sector 2814",570, 700)
        image(image4, 600,50, 100,100)
       

    
        image(image2, 5,500, 400, 400);
    }

    /*There was supposed to be another image here but I don't know
    what I did wrong. Maybe it's too small or I put it in the wrong place?
    I have no clue and I feel like an idiot for it. 
    */
       
    }


    function keyPressed() {
        if (key === 'r') {
            scene = 1;
            x = 100;
            y = 100;
            transparency = 255;
            x = x + 0.5;
            y = y + 0.5;


            ms = millis();
            lastTime = 0;
        }
    }/*a reset button to replay the whole thing*/
     function mousePressed() {
       if (scene < 13) {
        scene++;
       }
       /*And mouse pressed is what allows you to jump from scene to scene 
       
       
       
       I made too many scenes.*/
}


   

       
    
     /*Honestly I wish I had more time on this project but I also wish I knew more. There's so much I wanted to do. I wanted to have some imaages
     fade in, the Oath fade in, maybe in each scene you have to wait for all the text to finish for the player to continue. I wanted to add stars on the last scene
     But i don't know how to do that. I'm thinking I go and add each individual circle but that just can't be right or worth it or ethical. That's just bloating the program.
     Honestly I just wish I tried harder, because I feel like any of my classmates can easily do my project but I can't do any of theirs.*/