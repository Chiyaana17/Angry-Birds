class log extends parent {
    constructor (x,y,h,a){
        super(x,y,10,h,a)
        this.img=loadImage("Angry Birds/wood2.png")
        
        Matter.Body.setAngle(this.body,a)
        
    }}