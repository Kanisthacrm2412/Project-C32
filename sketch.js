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
var ball, blower,blowermouth;
var btn;

function setup() {
  createCanvas(800,400);
  
  btn = createButton("click to blow");
  btn.position(width/2,height -100);
  btn.class("blowButton");
  btn.mousePressed(blow);

  ball = new ball(100,300,10);
  blower = new Blower(200,300,30,40);
  blowermouth = new Blowermouth(300,300,50,50);

}

function draw() {
  background(255,255,255);  

  ball.display();
  blower.display();
  blowermouth.display();
  
}

function blow(){

  Matter.Body.applyForce(ball.body, {x:0,y:0},{x:0,y:0.05});

}
