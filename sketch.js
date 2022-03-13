const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var ground;
var cLog, chain;

var engine, world;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var bgImage;

function preload(){
    bgImage = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    platform = new Ground(175, 300, 325, 175);

    ground = new Ground(600,390,1200,10);
    box1 = new Box(700,300,60,60); 
    box2 = new Box(900,300,60,60); 
    pig1 = new Pig(800,300); 
    log1 = new Log(800,240,350,PI/2); 
    box3 = new Box(700,200,60,60); 
    box4 = new Box(900,200,60,60); 
    pig2 = new Pig(800,200); 
    log2 = new Log(800,180,350,PI/2); 
    box5 = new Box(800,150,60,60); 
    log3 = new Log(765,140,150,PI/7); 
    log4 = new Log(835,140,150,-PI/7);
    bird = new Bird(200,100);
    cLog = new Log(200, 100, 80, PI/2);
    chain = new Chain(bird, {x:200, y:100})
    /*var options = {
        bodyA: bird.body,
        bodyB: cLog.body,
        length: 100,
        stiffness: 0.05
    }
    chain = Matter.Constraint.create(options);
    World.add(world,chain);*/
    
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();
    box1.display(); 
    box2.display(); 
    pig1.display(); 
    log1.display(); 
    box3.display(); 
    box4.display(); 
    pig2.display(); 
    log2.display(); 
    box5.display(); 
    log3.display(); 
    log4.display();
    bird.display();
    platform.display();
    chain.display();
    //line (bird.body.position.x,bird.body.position.y,cLog.body.position.x,cLog.body.position.y);
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    chain.fly();
}