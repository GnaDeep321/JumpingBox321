var canvas;
var music;
var surface1,surface2,surface3,surface4;
var box;


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    
    surface1 = createSprite(700,580,180,20);
    surface1.shapeColor = "green";

    surface2 = createSprite(500,580,180,20);
    surface2.shapeColor = "pink";

    surface3 = createSprite(300,580,180,20);
    surface3.shapeColor = "orange";

    surface4 = createSprite(100,580,180,20);
    surface4.shapeColor = "blue";



    box = createSprite(Math.round(random(20,750)),50,50,50);
    box.velocityX = Math.round(random(-8,6));
    box.velocityY = Math.round(random(2,8));
    box.shapeColor="white";
    box.scale=0.9;
}



function draw() {
    background("rgb(169,169,169)");
    //create edgeSprite
    edges = createEdgeSprites();
    box.bounceOff(edges);



    //add condition to check if box touching surface and make it box
 if(surface1.isTouching(box) && box.bounceOff(surface1)){
     box.shapeColor="green";
     music.play();
 }

 //if(surface2.isTouching(box) && box.bounceOff(surface2)){
   // box.shapeColor="pink";
    //music.play();
//}

if(surface3.isTouching(box) && box.bounceOff(surface3)){
    box.shapeColor="orange";
    music.play();
}

if(surface4.isTouching(box) && box.bounceOff(surface4)){
    box.shapeColor="blue";
    music.play();
}

if(surface2.isTouching(box)){
    box.shapeColor="pink",
    box.velocityX=0,
    box.collide(surface2),
    music.stop();
 }


    drawSprites();
}

