class Box
{
  PVector pos;   //location of box
  float r;       // size of box
  
  Box(float x,float y, float z,float r_)
  {
    pos=new PVector(x,y,z);
    r=r_;
  }
  
  
  ArrayList<Box> generate()  // recursively divide the boxes 3 for loops: x y and z
  {
    ArrayList<Box> boxes=new ArrayList<Box>();
    for(int x=-1;x<2;x++)
    {
      for(int y=-1;y<2;y++)
      {
        for(int z=-1;z<2;z++)
        {
          int sum=abs(x) + abs(y) +abs(z);
          float newR=r/3;
          if(sum>1)  // to generate a snowflake sum<=1
          {
          Box b =new Box(pos.x+x*newR,pos.y+y*newR,pos.z+z*newR,newR);
          boxes.add(b);
          }
        }
      }
    }
    return boxes;
  }
  
  void show()
  {
   pushMatrix();   // find what is the use of push matrix
     translate(pos.x,pos.y,pos.z);      // translate to location
    noStroke();
    fill(255);
    box(r);            
   popMatrix();       // find what is the use of pop matrix
  }
}
