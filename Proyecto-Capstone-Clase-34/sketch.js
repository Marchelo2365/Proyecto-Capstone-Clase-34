const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball;
var ground;
var box1, box2,box3,box4;
var machine;
var constraint;

function setup(){
createCanvas(2000, 500);

engine = Engine.create();
world = engine.world;

ground = new Ground(1000, 480, 40,2000);

box1 = new Box(1200,50,80,80);
box2 = new Box(1200,40,80,80);
box3 = new Box(1200,30,80,80);
box4 = new Box(1200,20,80,80);

ball = new Ball(500,200,100,100);

//constraint = new Constraint(ball.body,{x:500, y:50});

}

function draw(){
background("lightblue")
    Engine.update(engine);
    ground.display();

    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ball.display();
    //constraint.display();
    




}