const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;

var myEngine,myWorld;
var ground,ball;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10;
function preload(){
    backgroundimg=loadImage("bg.png");
}
function setup(){
    createCanvas(400,400);
    myEngine=Engine.create();
    //myWorld is myEngine's world
    myWorld=myEngine.world;
    
    ground=new Ground(0,380,800,50)
    ball=new Ball(50,200,25);
    
    box1=new Box(100,100,50,50)
   
    box2=new Box(100,150,50,50)
    
    box3=new Box(100,200,50,50)
   
    box4=new Box(150,100,50,50)
   
    box5=new Box(150,150,50,50)
    
    box6=new Box(150,200,50,50)
    
    box7=new Box(200,100,50,50)
    
    box8=new Box(200,150,50,50)
    
    box9=new Box(200,200,50,50)
    
    box10=new Box(200,250,50,50)
    
    
}
function draw(){
    background(backgroundimg);
    Engine.update(myEngine);
    
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    ground.display();
    
    ball.display();

}