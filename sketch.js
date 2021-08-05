
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paper;

function preload(){
  paperImage = loadImage("paper.png");
  dustbinImage = loadImage("trashcangreen.png");
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;


	var options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}
	paper = Bodies.circle(310,100,20,options);
	World.add(world,paper)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  image(paperImage,paper.position.x,paper.position.y,20,20);

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper,paper.position,{x:100,y:-90})
	}
}
