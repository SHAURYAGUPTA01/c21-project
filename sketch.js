const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
let ball;
let ground;
let right;
let left;
let up;
let r2;
let l2;

function setup() {
createCanvas(800, 600);
engine = Engine.create();
world = engine.world;

stroke("yellow")
strokeWeight(5)


//Create the Bodies Here.
ground = new Ground(400,585,800,30);
right = new Ground(550,520,10,100);
left = new Ground(700,520,10,100);
r2 = new Ground(5,530,30,1500);
l2 = new Ground(800,530,40,1500);
up = new Ground(400,10,800,50);
fill("white")
ball=Bodies.circle(200,100,20)
World.add(world,ground);
World.add(world,ball)
Engine.run(engine);
rectMode(CENTER);
ellipseMode(RADIUS);
}


function draw() {

background("green");

Engine.update(engine)

ground.show();
right.show();
left.show();
up.show();
l2.show();
r2.show();

ellipse(ball.position.x,ball.position.y,20,20)

drawSprites(); 
textSize(50)
fill("red")
text("CLEAN CITY, GREEN CITY!" ,100,200);
textSize(20)
fill("white")
strokeWeight(0)
text("Instructions: use UP arrow to throw trash in trashbin.",60,60)

}
function keyPressed(){
	if(keyCode===UP_ARROW){
	Matter.Body.applyForce(ball,{x : 0 ,y : 0},{x : 0.01 , y :-0.01})}
		
  }


