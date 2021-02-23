const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var myEngine,myWorld;
var ground1;

var box1,box2;

function setup()

{

    createCanvas(800,400);
    myEngine=Engine.create();
    myWorld=myEngine.world;

    box1=new Box(200,100,50,50);
    box2= new Box(230,190,50,50);

    ground1=new Ground1(400,300,600,20);

    
}
    




function draw(){
    background(0);
    Engine.update(myEngine);

   box1.display();
   box2.display();
   ground1.display();
}
