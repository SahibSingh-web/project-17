
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
monkey=createSprite(80,320,20,20);  
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1;
ground=createSprite(400,350,900,10);
ground.velocityX=-4;
ground.x=ground.width/2;
FoodGroup=new Group();
obstacleGroup= new Group();
  
}


function draw() {
background("white");
 
if(ground.x<0) {
ground.x= ground.width/2;
  
}
if(keyDown("space")) {
monkey.velocityY=-10;  
}
monkey.velocityY=monkey.velocityY+0.5;
monkey.collide(ground);
food();
obstacles();
if(obstacleGroup.isTouching(monkey)) {
monkey.velocityY=0;
ground.velocityY=0;
obstacleGroup.setVelocityXEach(0);
FoodGroup.setVelocityXEach(0);
obstacleGroup.setLifetimeEach(-1);
FoodGroup.setLifetimeEach(-1);
  
}
  
  
drawSprites ();
score=Math.ceil(frameCount/frameRate());
text("survival time"+score,100,50);  
}
function food(){
if(frameCount%80===0) {
banana=createSprite(600,250,40,10);
banana.velocityX=-5;
banana.lifetime=300;
banana.addImage(bananaImage);
banana.scale=0.05;
FoodGroup.add(banana);  
} 
}
function obstacles ()  {
if(frameCount%300===0) {
obstacle=createSprite(800,320,40,10);
obstacle.velocityX=-5;
obstacle.lifetime=300;
obstacle.addImage(obstaceImage);
obstacle.scale=0.15;
obstacleGroup.add(obstacle);  
}   
}              





