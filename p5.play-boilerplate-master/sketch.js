//Car, Speed, Weight, Wall
var Car, Wall;
var Speed, Weight;
var Deformation;


function setup() {
  createCanvas(1600,400);

  //Making Car, Wall
  Car = createSprite(50, 200, 50, 50);
  Car.velocityX = Speed;
  Wall =createSprite(1500,200,60,height/2);

  //Speed, Weight
  Speed = random(55,90) ;
  Weight = random(400, 1500) ;
}

function draw() {
  //Background
  background(255,255,255);  
if (Wall.X = Car.X < (Car.width+Wall.width)/2){
  Car.velocityX = 0;
  var Deformation = 0.5*Weight*Speed*Speed/22500;
}

if (Deformation>180){
  Car.shapeColor = color(225,0,0);
}
if (Deformation<180 && Deformation>100){
  Car.shapeColor = color(230,230,0);
}
if (Deformation<100){
  Car.shapeColor = color(0,225,0);
}
  drawSprites();
}

