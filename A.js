var a = 0

function setup(){
createCanvas(800,800)
}
function draw(){
background("#c8a2c8")
angleMode(DEGREES)
translate(400,400)
rotate (a)
line (0,0,200,200)
rectMode(CENTER)
rect(0,0,50,60)
a=a+1
}