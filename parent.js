class parent {
    constructor (x,y,w,h,a){
    this.img=loadImage("Angry Birds/base.png")
    this.width=w;
    this.height=h;
    var properties={
    restitution :0.8,
    friction:0.3,
    density:1}
    this.body=Matter.Bodies.rectangle(x,y,this.width,this.height,properties)
    Matter.World.add(world,this.body)
    }
    display(){
        var star=this.body.position
        push()
    imageMode(CENTER)
      translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle)
image(this.img,0,0,this.width,this.height)
pop()
}
}