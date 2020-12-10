var speed, weight;
var bullet;
var wall, thickness;


function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 25, 50);

  wall = createSprite(1500,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  speed = random(223,321);
  weight = random(30,52);
  thickness=random(22,83);

  bullet.velocityX = speed;

  wall.depth = bullet.depth;
  bullet.depth = bullet.depth+1;

  
}

function draw() {
  background(0,0,0);  
  drawSprites();

  if(wall.x-bullet.x<bullet.width/2+wall.width/2){
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    bullet.velocityX = 0;
    if(damage<10){
      wall.shapeColor = color(0,255,0);
    }  if(damage>10){ 
      wall.shapeColor = color(255,0,0);
  }
}
}