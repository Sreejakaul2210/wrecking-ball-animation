const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14;
var ball,rope,ground;

function setup() {
  createCanvas(1400, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700, 780, 1400, 20);

  ball = new Ball(470,680,40);
  rope = new Rope(ball.body, { x: 470, y: 150 });

  box1 = new Box(600, 720, 70, 70);
  box2 = new Box(600, 640, 70, 70);
  box3 = new Box(600, 570, 70, 70);
  box4 = new Box(600, 500, 70, 70);
  box5 = new Box(600, 430, 70, 70);
  box6 = new Box(600, 360, 70, 70);
  box7 = new Box(680, 720, 70, 70);
  box8 = new Box(680, 640, 70, 70);
  box9 = new Box(680, 570, 70, 70);
  box10 = new Box(680, 500, 70, 70);
  box11 = new Box(680, 430, 70, 70);
  box12 = new Box(680, 360, 70, 70);
  
  

}

function draw() {
  background("white");
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  box10.display()
  box11.display()
  box12.display()
  

  ball.display();
  rope.display();

}

function mouseDragged() {
  Matter.Body.setPosition(ball.body, { x:mouseX, y: mouseY});
}

