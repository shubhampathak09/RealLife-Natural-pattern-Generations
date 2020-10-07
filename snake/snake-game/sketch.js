var snake;
var scl=20;
var food;

function setup() {
  // put setup code here
  createCanvas(600,600);
  snake=new Snake();
  frameRate(10);
  food=createVector(random(width),random(height));
}

function keyPressed()
{
  if(keyCode === UP_ARROW)
  {
   snake.dir(0,-1)
  }
  else if(keyCode === DOWN_ARROW)
  {
    snake.dir(0,1);
  }
  else if(keyCode===LEFT_ARROW)
  {
    snake.dir(-1,0);
  }
  else if(keyCode===RIGHT_ARROW){
    snake.dir(1,0);
  }
}

function draw() {
  // put drawing code here
  background(0);
  snake.show();
  snake.update();

  fill(255,0,100);
  rect(food.x,food.y,scl,scl);

}