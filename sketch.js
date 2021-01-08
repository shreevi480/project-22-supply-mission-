var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:3, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 
 


  if(isTouching(packageBody,ground)){

	bounceOff(packageBody,ground);

  }
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	

	Matter.Body.setStatic(packageBody,false)
    
  }
}

function bounceOff(object1,object2){

	if (object1.x - object2.x < object2.width/2 + object1.width/2
	  && object2.x - object1.x < object2.width/2 + object1.width/2) {
	object1.velocityX = object1.velocityX * (-1);
	object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
	&& object2.y - object1.y < object2.height/2 + object1.height/2){
	  object1.velocityY = object1.velocityY * (-1);
	  object2.velocityY = object2.velocityY * (-1);
  
  }
  }

  function isTouching(object1,object2){

	if((object1.x-object2.x<object1.width/2+object2.width/2) && 
	(object2.x-mobject1.x<object1.width/2+object2.width/2) && 
	(object1.y-object2.y<object1.height/2+object2.height/2)&& 
	(object2.y-object1.y<object1.height/2+object2.height/2)){
	
	return true;
	}
	else{
	  
	  return false;
	}
}