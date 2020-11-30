var bullet;
var thickness;
var wall;
var speed;
var weight;
function setup() {
  createCanvas(1600,400);
  thickness = random(22,83);
  wall = createSprite(1500,200,thickness,height/2);
  bullet = createSprite(50, 200, 50, 50);
  bullet.shapeColor = "white";
  weight = random(30,52);
  speed = random(223,321);
  bullet.velocityX = speed;
}

function draw() {
  background("black");
  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0;
    var damage = 0.5 * speed * weight * speed/(thickness * thickness * thickness);
    if(damage < 10){
      wall.shapeColor = ("green");
    }else if(damage > 10){
      wall.shapeColor = ("red");
    }
  }
  drawSprites();
}