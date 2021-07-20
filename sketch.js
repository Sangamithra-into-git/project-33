const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies


var snow, snowImg;
var engine;
var boy;

function preload(){
  bgImg = loadImage("snow2.jpg");
  boyImg = loadImage("boy.png");






}
function setup() {
  createCanvas(3000,700);
 // createSprite(400, 200, 50, 50);
  engine = Engine.create();
  world = engine.world
  boy = createSprite(700, 600)
  boy.addImage(boyImg)
  boy.scale = 0.3;
}



function draw() {

  background(bgImg);  
  Engine.update(engine);
  if(keyDown("left")){
    boy.x = boy.x-3
  }
  if(keyDown("right")){
    boy.x = boy.x+3
  }
  drawSprites();
}



