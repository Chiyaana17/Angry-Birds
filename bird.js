class bird extends parent{
 constructor(x,y){
    super(x,y,60,60)
        this.img=loadImage("Angry Birds/bird.png") 
 } 
 display(){
    // this.body.position.x=mouseX
    // this.body.position.y=mouseY
     super.display()
 }  
}