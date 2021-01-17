const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground0, ground1, ground2;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12, block13, block14, block15, block16;
var polygon;
var slingShot;

function preload(){
    polygonImg = loadImage("polygon.png");
}

function setup(){
    var canvas = createCanvas(1400,400);
    engine = Engine.create();
    world = engine.world;

    ground0 = new Ground(600,height,1200,20);
    ground1 = new Ground(210,30,520,20);
    ground2 = new Ground(780,70,520,20);

    //level one
    block1 = new Box(230,275,30,40);
    block2 = new Box(260,275,30,40);
    block3 = new Box(290,275,30,40);
    block4 = new Box(320,275,30,40);
    block5 = new Box(350,275,30,40);
    block6 = new Box(380,275,30,40);
    block7 = new Box(410,275,30,40);

    //level two
    block8 = new Box(260,235,30,40);
    block9 = new Box(290,235,30,40);
    block10 = new Box(320,235,30,40);
    block11 = new Box(350,235,30,40);
    block12 = new Box(380,235,30,40);

    //level three
    block13 = new Box(290,195,30,40);
    block14 = new Box(320,195,30,40);
    block15 = new Box(350,195,30,40);

    //top
    block16 = new Box(320,155,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);

    slingShot = new SlingShot(this.polygon, {x:100, y:50});

    imageMode(CENTER)
    image(polygonImg, polygon.position.x, polygon.position.y,40,40);
}

function draw(){
    Engine.update(engine);

    ground0.display();
    ground1.display();
    ground2.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();
    slingshot.display();    
    polygon.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode === 32){
        slingshot.attach(polygon.body);
    }
}