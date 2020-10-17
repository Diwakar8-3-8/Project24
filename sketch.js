var box1,box2,box3;
var ground,paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	box1 = createSprite(790,450,200,10);
	box1.shapeColor = "white";

	box2 = createSprite(695,400,10,100);
	box2.shapeColor = "white";

	box3 = createSprite(885,400,10,100);
	box3.shapeColor = "white";

	paper = new Paper(290,450,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

