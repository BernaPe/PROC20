
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var block1;
var block2;
var block3;
var plane;



function preload() {

}

function setup() {
  createCanvas(500, 400);


  engine = Engine.create();
  world = engine.world;

  //Crie os Corpos Aqui.
  var block1_options = {
    restitution: 0.5,
    frictionAir: 0,
    friction: 0.02
  }
  var block2_options = {
    restitution: 0.7,
    frictionAir: 0.1,
    friction: 0.01
  }
  var block3_options = {
    restitution: 0.01,
    frictionAir: 0.3,
    friction: 1
  }

  var plane_options = {
    isStatic: true
  }


  plane = Bodies.rectangle(200, 390, 400, 20, plane_options);
  World.add(world, plane);

  block1 = Bodies.circle(220, 10, 20, block1_options);
  World.add(world, block1);

  block2 = Bodies.rectangle(110, 50, 40, 40, block2_options);
  World.add(world, block2);

  block3 = Bodies.rectangle(350, 50, 100, 40, block3_options);
  World.add(world, block3);

  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  Engine.update(engine);

  background("PURPLE");
  ellipse(block1.position.x, block1.position.y, 20);
  rect(block2.position.x, block2.position.y, 40, 40);
  rect(block3.position.x, block3.position.y, 100, 40);


}



