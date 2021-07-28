var car,wall;

var speed,weight;

var wall, thickness;
var bullet,speed,weight;



function setup() {
  createCanvas(1600,400);

 speed=random(223,321);
 weight=random(30,52);

 thickness=random(22,83);

 bullet= createSprite(50,200,80,20);
  bullet.velocityX=speed;

 wall= createSprite(1200,200,thickness,height/2);

console.log(speed)

bullet.shapeColor="blue"

  
}

function draw() {
  background(255,255,255);
  
  if(wall.x-bullet.x<(bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed * speed/22509;
    if(deformation>180)
    {
      wall.shapeColor=color(255,0,0);
    }

    if(deformation<180 && deformation>100)
    {
      wall.shapeColor= color(230,230,0);
    }
     if(deformation<100)
    {
      wall.shapeColor=color(0,255,0);
    }
  }







  drawSprites();
}