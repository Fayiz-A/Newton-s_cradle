//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;

var bob1, bob2, bob3, bob4, bob5;
var bobArray = [bob1, bob2, bob3, bob4, bob5];
var bobX = 500;

var ropeArray = [];

var offsetX = -80;

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof(580, 285, 200, 30);

	for(var i = 0; i < bobArray.length; i++) {
		bobArray[i] = new Bob(bobX, 500, 20);
		bobX += 40;
	}

	for(i = 0; i < bobArray.length; i++) {
		ropeArray[i] = new Rope(bobArray[i].body, roof.body, offsetX, 0);
		offsetX += 40;
	}
}


function draw() {
	Engine.update(engine);//updates the engine continuously

  	rectMode(CENTER);//tells the computer to make the rectangle relative to its center
  	background(230);//clears the background
  
	roof.display();

	drawSprites();
	  
	for(i = 0; i < ropeArray.length; i++){
		ropeArray[i].display();
	}
	
	for(i = 0; i < bobArray.length; i++){
		bobArray[i].display();
	}

	if(keyWentDown(UP_ARROW)){
		Body.applyForce(bobArray[0].body, bobArray[0].body.position, {x: -6, y: 0});
	}
}



