const World = Matter.World;
const Bodies= Matter.Bodies;
const Engine = Matter.Engine;


var engine, world;
var object;
var ball;
var box1;
var box2;
var ground;

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400,350,800,15);

  box1 = new Box(400,200,50,100);
  box2 = new Box(430,70,50,60);
}

function draw() {
  background(0); 
  
  Engine.update(engine);
  
  
  box1.display();
  box2.display();
  ground.display();
 }














