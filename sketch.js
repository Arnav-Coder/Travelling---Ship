var Ship,ShipAnim;
var sea , seaImg;


function preload(){
  seaImg = loadImage("sea.png");
  ShipAnim = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea = createSprite(400,200);
  sea.addImage(seaImg);

  Ship = createSprite(130,200,30,30);
  Ship.addAnimation("movingShip",ShipAnim);
  Ship.scale = 0.3;
  
  sea.scale = 0.3;
}

function draw() {
  

  sea.velocityX = -5;
  if(sea.x<0){
    sea.x = sea.width/8;
  }
 
  drawSprites();
}