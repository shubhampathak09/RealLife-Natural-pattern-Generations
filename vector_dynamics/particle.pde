class particle
{
 // float x;
 // float y;
  
  PVector location;
  PVector velocity;
  
  //float xspeed,yspeed;
  
  particle()
  {
    //x=width/2;
   // y=height/2;
   location=new PVector(width/2,height/2);
   
   // xspeed=2.5;
   // yspeed=-2;
   
   velocity=new PVector(2.5,-2);
   
  }
  
  void move()
  {
   // x=x+xspeed;
   // y=y+yspeed;
    
    location.add(velocity);
  }
  
  void bounce()
  {
    if(location.x>width||location.x<0)
    {
      velocity.x*=-1;
    }
    if(location.y>height||location.y<0)
    {
      velocity.y*=-1;
    }
  }
  
  void display()
  {
     stroke(0);
     strokeWeight(2);
     fill(127);
     ellipse(location.x,location.y,48,48);
  }
}
