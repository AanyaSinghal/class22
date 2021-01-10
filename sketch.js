var aanya_engine,aanya_world;
var ball,ground;

function setup() {
  createCanvas(400,400);
  aanya_engine = Matter.Engine.create()
  aanya_world = aanya_engine.world;
  var options = {
    isStatic: true
  }
  ground = Matter.Bodies.rectangle(200,390,400,20,options);
  Matter.World.add(aanya_world,ground);
  var ball_options = {
    restitution:1.0
  }
  ball = Matter.Bodies.circle(200,100,20,ball_options);
  Matter.World.add(aanya_world,ball);
}

function draw() {
  background(0);  
  Matter.Engine.update(aanya_engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}