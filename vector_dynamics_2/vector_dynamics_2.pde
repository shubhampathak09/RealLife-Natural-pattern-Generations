void setup()
{
  size(400,400);
}

void draw()
{
  background(255);
  strokeWeight(2);
  stroke(0);
  
  noFill();
   // translations learn 
  translate(width/2,height/2);
  ellipse(0,0,48,48);
  
  PVector mouse=new PVector(mouseX,mouseY);
  PVector center=new PVector(width/2,height/2);
  
  mouse.sub(center);
  mouse.mult(5);
  
  float m=mouse.mag();
  
  rect(0,0,m,20); 
  
 // line(0,0,mouse.x,mouse.y);
}
