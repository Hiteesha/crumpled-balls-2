
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
  
var binImg

function preload()
{
	binImg = loadImage("sprites/dustbingreen.png");	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	paper1 = new Paper (200,620,50)
	ground = new Ground(800,690,1600,30)

	bin = createSprite(1000,600,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;

	bin1 = new Dustbin(938,600,10,120);
    bin2 = new Dustbin(998,650,130,10);
    bin3 = new Dustbin(1066,600,10,120);
	
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background("pink")
  paper1.display();
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  

  
  
  drawSprites();
 
}
function keyPressed(){
	if ( keyCode === 32){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x : 25 ,y : -25 })
	}


}


