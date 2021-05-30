const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
//var box1, box2, box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20, ground;
var ball, rope
var box;

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  box=[]
 
ground=new Ground(600,550,1200,10);
for (var a=600;a<1000;a=a+50){
  for(var b=100;b<500;b=b+20){
    box.push(new Box(a,b));
  }
}
ball=new Ball();
rope=new Rope(ball.body,{x:350,y:100});
roof=new Ground(350,100,100,10);
}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display()
  for(var i=0;i< box.length;i++){
box[i].display();

  }

ball.display()
rope.display()
roof.display()
}


function mouseDragged() {
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY});

}


