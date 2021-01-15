class pig extends parent {
    constructor (x,y){
        super(x,y,70,70)
        this.img=loadImage("Angry Birds/enemy.png")
        
    }
    display(){
        console.log(this.body.speed)
        if(this.body.speed<10){
        super.display()}
        else{
            Matter.World.remove(world,this.body)
        }
    }
    }