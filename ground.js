class ground{
    constructor(x,y,w,h){
        this.img=loadImage("Angry Birds/base.png")
        this.width=w   
        this.height=h 
        var properties= {isStatic:true}
        this.body=Matter.Bodies.rectangle(x, y, this.width, this.height, properties)
        Matter.World.add(world,this.body)
    }
    display(){
        push()
        imageMode(CENTER)
        var star=this.body.position
        image(this.img,star.x,star.y,this.width,this.height)
        pop()   
    }
}