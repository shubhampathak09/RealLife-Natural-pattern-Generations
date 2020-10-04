class Planet
{
 // PVector pos;
  
  float radius;
  float angle;
  float distance;
  Planet[] planets=new Planet[3];
  
  float orbitspeed;
  Planet(float r,float d,float o)
  {
    radius=r;
    angle=random(TWO_PI);
    distance=d;
    orbitspeed=o;
  }
  
  void orbit()
  {
    angle=angle+orbitspeed;
    for(int i=0;i<planets.length;i++)
    {
      if(planets[i]!=null)
      {
        planets[i].orbit();
      }
    }
  }
  
  void spawnMoons(int total,int level)
  {
    
    planets=new Planet[total];
    for(int i=0;i<planets.length;i++)
    {
      float r=radius/(level*2);
      float d=random(75,300);
      float o=random(-0.1,0.1);
      planets[i]=new Planet(r,d/level,o);
      if(level<2)
      {
        int num=int(random(0,4));
      planets[i].spawnMoons(num,level+1);
      }
     // println(planets[i]);
    }
  }
  
  void show()
  {
    pushMatrix();
    fill(255,100);
    rotate(angle);
    translate(distance,0);
   // rotate(angle);
   // fill(255);
    ellipse(0,0,2*radius,2*radius);
   // printArray(planets.length);
     
      println(planets.length);
    for(int i=0;i<planets.length;i++)
    {
      if(planets[i]!=null)
      planets[i].show();
    }
     popMatrix();    
    }
  
  
}
