const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground, bridge;
var leftWall, rightWall;
var jointPoint;
var jointLink;

var stones = [];

function setup() {
  //Canvas is created
  createCanvas(windowWidth, windowHeight);
  //Engine is created
  engine = Engine.create();
  world = engine.world;
  //The rate of frame
  frameRate(80);
//We created the ground,leftwall and rightwall using the class base
  ground = new Base(0, height - 10, width * 2, 20, "#795548", true);
  leftWall = new Base(300, height / 2 + 50, 600, 100, "#8d6e63", true);
  rightWall = new Base(width - 300, height / 2 + 50, 600, 100, "#8d6e63", true);

 // bridge = new Base(15, { x: width / 2 - 400, y: height / 2 });
 // jointPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);
//A bridge is created using bridge class
 bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
 //Using the base class a jointpoint is created
  jointPoint = new Base(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);

  //bridge = new Base(15, { x: width / 2 - 400, y: height / 2 });
  //jointPoint = new Bridge(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);

 // bridge = new Bridge(15, { x: width / 2 - 400, y: height / 2 });
 //jointPoint = new Bridge(width - 600, height / 2 + 10, 40, 20, "#8d6e63", true);

  //We add the bridge and jointpoint to a composite
  Matter.Composite.add(bridge.body, jointPoint);

  //Matter.Composite.add(jointPoint);
  
  //Matter.Composite.add(jointPoint, bridge.body);
  
  //Matter.Composite.add(bridge.body);

//New link is created called jointPoint
  jointLink = new Link(bridge, jointPoint);
//Setting the x and y for the stones
  for (var i = 0; i <= 8; i++) {
    var x = random(width / 2 - 200, width / 2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  //The background colour
  background(51);
  //WE update the engine
  Engine.update(engine);
//We make everything appear in our screen except stone
  ground.show();
  bridge.show();
  leftWall.show();
  rightWall.show();
//Stones are visible
  for (var stone of stones) {
    stone.show();
  }
}
