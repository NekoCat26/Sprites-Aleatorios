var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8;
var wall1, wall2, wall3, wall4;
var wallsGroup;

var player;
var score=0;

function preload(){

}

function setup(){
createCanvas(400, 400);



player = createSprite(200,50,15,15);
player.shapeColor = "white";

ball1 = createSprite(220,200, 7,7);
ball1.shapeColor = "blue";
ball1.velocity.x = 2;
ball1.velocity.y = 3;

ball2 = createSprite(220,220, 7,7);
ball2.shapeColor = "yellow";
ball2.velocity.x = 2;
ball2.velocity.y = -3;

ball3 = createSprite(120,240, 7,7);
ball3.shapeColor = "red";
ball3.velocity.x = -2;
ball3.velocity.y = 3;

ball4 = createSprite(50,20, 7,7);
ball4.shapeColor = "pink";
ball4.velocity.x = -2;
ball4.velocity.y = -3;

ball5 = createSprite(260,280, 20,20);
ball5.shapeColor = "green";
ball5.velocity.x = 2;
ball5.velocity.y = 2;

ball6 = createSprite(120,80, 20,20);
ball6.shapeColor = "purple";
ball6.velocity.x = -2;
ball6.velocity.y = -2;

ball7 = createSprite(20,20, 20,20);
ball7.shapeColor = "orange";
ball7.velocity.x = -2;
ball7.velocity.y = -3;

ball8 = createSprite(320,290,20,20);
ball8.shapeColor = "#16ece6";
ball8.velocity.x = 2;
ball8.velocity.y = 3;

wall1 = createSprite(0,200,8,400);
wall2 = createSprite(400,200,8,400);
wall3 = createSprite(200,0,400,8);
wall4 = createSprite(200,400,400,8);

wallsGroup = new Group();
wallsGroup.add(wall1);
wallsGroup.add(wall2);
wallsGroup.add(wall3);
wallsGroup.add(wall4);

}


function draw() {
  background("black");
  textSize(15);
  fill("yellow");
  text("Puntos: "+ score, 20, 25);

  createEdgeSprites();

  if(keyCode === UP_ARROW) {
    player.y = player.y -4;
  }
  if(keyCode === DOWN_ARROW) {
    player.y = player.y +4;
  }
  if(keyCode === LEFT_ARROW) {
    player.x = player.x -4;
  }
  if(keyCode === RIGHT_ARROW) {
    player.x = player.x +4;
  }
 
 player.bounceOff(wallsGroup);
 ball1.bounceOff(ball1);
 ball2.bounceOff(ball2);
 ball3.bounceOff(ball3);
 ball4.bounceOff(ball4);
 ball5.bounceOff(ball5);
 ball6.bounceOff(ball6);
 ball7.bounceOff(ball7);
 ball8.bounceOff(ball8);
    
ball1.bounceOff(wallsGroup);
ball2.bounceOff(wallsGroup);
ball3.bounceOff(wallsGroup);
ball4.bounceOff(wallsGroup);
ball5.bounceOff(wallsGroup);
ball6.bounceOff(wallsGroup);
ball7.bounceOff(wallsGroup);
ball8.bounceOff(wallsGroup);

if(ball5.bounceOff(player) || ball6.bounceOff(player) 
|| ball7.bounceOff(player) || ball8.bounceOff(player)){
  score = score - 1;
}

if(ball1.bounceOff(player) || ball2.bounceOff(player) 
|| ball3.bounceOff(player) || ball4.bounceOff(player)){
  score = score + 1;
}

  drawSprites();
}
