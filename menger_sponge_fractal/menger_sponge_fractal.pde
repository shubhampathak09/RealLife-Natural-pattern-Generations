
float a=0.0;


ArrayList<Box> sponge;
void setup()
{
  sponge=new ArrayList<Box>();
  Box b= new Box(0,0,0,200);
  size(400,400,P3D);
  sponge.add(b); // null pointer exception if sponge not declared
}

void mousePressed()
{
  ArrayList<Box> next=new ArrayList<Box>();
  for(Box b :sponge)
  {
    ArrayList<Box>newBoxes=b.generate();
    next.addAll(newBoxes);
  }
  
   sponge=next; 
}

void draw()
{
  background(50);
 stroke(255);
 noFill();
 lights();
 
 translate(width/2,height/2);
 rotateX(a);
 rotateY(a*0.4);
 rotateZ(a*0.2);
 //rotateY(a);
// rotateZ(a);

// box(200);
for(Box b:sponge)
b.show();

 a+=0.01;
}
