var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var red1, red2, red3, red4;
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

    groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(400, 200 , 5, {restitution :0, isStatic :true  });
	World.add(world, packageBody);

	packageSprite=createSprite(400, 200, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(400, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6;

	var options = {
		restitution : 0,
		isStatic: true
	}

	ground = Bodies.rectangle(400, 660, width, 10 , options);
	World.add(world, ground);
	 
	red1 = new redthingies(400,450,200,20);
	red2 = new redthingies(300,410,20,100);
	red3 = new redthingies(500,410,20,100);
	red4 = new redthingies(500,560,20,200);
	red5 = new redthingies(300,560,20,200);

    Engine.run(engine);
  
}

function draw() {
  
  background(0);
  Engine.update(engine);
  packageSprite.x= packageBody.position.x ;
  packageSprite.y= packageBody.position.y ;

  packageSprite.position.x= helicopterSprite.x;

  red1.display();
  red2.display();
  red3.display();
  red4.display();
  red5.display();

  keyPressed();
  drawSprites();

  if(keyCode === LEFT_ARROW){
     helicopterSprite.x = helicopterSprite.x - 5;
   }

  if(keyCode === RIGHT_ARROW){
	helicopterSprite.x = helicopterSprite.x + 5;
  }

  if(helicopterSprite.x < 300){
	  helicopterSprite.x = 400;
	  helicopterSprite.velocityX = 0;
  }

  if(helicopterSprite.x > 500){
	helicopterSprite.x = 400;
	helicopterSprite.velocityX = 0;
}
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
  }
}



