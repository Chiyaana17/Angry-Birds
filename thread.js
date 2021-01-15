class thread{
    constructor(a,b){
       this.sling1=loadImage("Angry Birds/sling1.png")
        this.sling2=loadImage("Angry Birds/sling2.png")
        this.sling3=loadImage("Angry Birds/sling3.png")
        var friend={pointA:a,bodyB:b,stiffness:0.2,length:10}
        this.sling=Matter.Constraint.create(friend)
        Matter.World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyB!=null){
    var star=this.sling.pointA
   var star1=this.sling.bodyB.position
 image(this.sling3,star1.x-28,star1.y,10,25)
   strokeWeight(4)
   stroke("#301608")
   line(star.x-20,star.y,star1.x-20,star1.y)
 line(star.x+20,star.y,star1.x+20,star1.y)} image(this.sling1,120,80,50,120)
   image(this.sling2,90,75,45,80)
    }
    release(){
        this.sling.bodyB=null
    }
}