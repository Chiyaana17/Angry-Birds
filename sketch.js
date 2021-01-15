var world;
var engine;
var object;
var ground1;
var box1;
var box2;
var box3;
function preload(){
  background1=loadImage("Angry Birds/bg.png")
}
function setup() {
  createCanvas(1500,400);
  engine=Matter.Engine.create()
  world=engine.world
  ground1=new ground (width/2,height-10,width,20)
  ground2=new ground (100,300,200,200)
  box1=new box (700,300)
  box2=new box (920,300)
  box3=new box (700,260)
  box4=new box (920,260)
  box5=new box (810,180)
  pig1=new pig (810,340)
  pig2=new pig (810,260)
  log1=new log (810,300,300,PI/2)
  log2=new log (810,220,300,PI/2)
  log3=new log (760,160,150,PI/4)
  log4=new log (870,160,150,-PI/4)
  bird1=new bird(270,100)
  thread1=new thread({x:135,y:100},bird1.body)
} 
  function draw() {
  background("#FFD700");
  image (background1,0,0,width,height)
  Matter.Engine.update(engine)
  ground1.display()
  ground2.display()
 box1.display()
 box2.display()
box3.display()
 box4.display()
 box5.display()
 pig1.display()
 pig2.display()
 log1.display()
 log2.display()
 log3.display()
 log4.display()
 bird1.display()
 thread1.display()
}
function mouseDragged(){
Matter.Body.setPosition(bird1.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  thread1.release()
}