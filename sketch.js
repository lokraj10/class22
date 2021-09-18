const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,ground;
var backgroundImg
var tower, towerImg
var a
var canon,canonImg,canonBase




function preload() {
  backgroundImg = loadImage("assets/background.gif")
  towerImg = loadImage("assets/tower.png")


}
function setup() {
  
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  a = 20
  var options={
    isStatic: true

  }
  canon = new Canon(180,110,130,100,a)
  ground = Bodies.rectangle(0,height-1,width*2,1,options)
  push();
  tower = Bodies.rectangle(160,350,160,310,options);
  rectMode(CENTER)
  pop();
  World.add(world,ground)                                                                                
  World.add(world,tower)

}

function draw() {
  background(189);

  Engine.update(engine);

  image(backgroundImg,0,0,1200,600);

  push();
  imageMode(CENTER)
  image(towerImg,tower.position.x,tower.position.y,160,310)
 
  pop();
  canon.show()
  rect(ground.position.x,ground.position.y,width*2,1)
  
 

   
}
