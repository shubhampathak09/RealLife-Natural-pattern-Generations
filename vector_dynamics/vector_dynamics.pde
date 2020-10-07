particle p;

void setup()
{
  size(400,400);
  p=new particle();
}


void draw()
{
  background(255);
  p.move();
  p.bounce();
  p.display();
}
