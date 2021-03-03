
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gameState = 0;
var player;
var backgroundImage1;
var button;

function preload()
{
	backgroundImage1 = loadImage("StartBackground.jpg");
}

function setup() {
	createCanvas(1500, 800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//player = new Player(400, 400, 20, 20);

	player = createSprite(750, 650, 20, 20);
	player.shapeColor="black";

	//form = new Form();

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(backgroundImage1);

  if (gameState === 0) {
	  textSize(30);
	  fill("green");
	  text("PRESS SPACE TO START", 600, 300);
	  text("USE 'UP', 'DOWN', 'RIGHT', AND 'LEFT' ARROW KEYS TO MOVE", 400, 400);
	  if (keyWentDown("space")) {
		  gameState=1;
		 
	  }
  }

  if(gameState === 1){
	background("orange");
  	if (keyDown(UP_ARROW)) {
	  	player.y = player.y - 10;
  	}

  	if (keyDown(DOWN_ARROW)) {
		player.y = player.y + 10;
		}

  	if (keyDown(RIGHT_ARROW)) {
		player.x = player.x + 10;
		}	

  	if (keyDown(LEFT_ARROW)) {
		player.x = player.x - 10;
	}

  	if(player.x === 800 || player.x === 0 || player.y === 700 || player.y === 0){
	  	player.x = 750;
	  	player.y = 650;
  	}
	}
  //player.display();

  
  
  drawSprites();

  function GameState() {
	  gameState = 1;
  }
 
}



