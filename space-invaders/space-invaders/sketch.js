var ship;
var flowers=[];
var drops=[];

function setup() {
  // put setup code here
  createCanvas(600,400);
  ship=new Ship();
  for(var i=0;i<6;i++)
  {
  flowers[i]=new Flower(i*80+80,60);
  }
  //drop=new Drop(width/2,height/2);
}

function draw() {
  // put drawing code here
  background(51);  //51-?dark bg
 ship.show();
 ship.move();


 for(var i=0;i<drops.length;i++)
 {
  drops[i].show();
  drops[i].move();

  for(var j=0;j<flowers.length;j++)
  {
    if(drops[i].hits(flowers[j]))
    {
      //console.log("Watering");
        flowers[j].grow();
        drops[i].evaporate();
    }
  }
 }

 var edge=false;

 for(var i=0;i<flowers.length;i++)
 {
 flowers[i].show();
 flowers[i].move(); // defined in flowers.js

 if(flowers[i].x>width||flowers[i].x<0)
 {
   edge=true;
 }
}

if(edge)
{
  for(var i=0;i<flowers.length;i++)
{
  flowers[i].shiftDown()
}
}

 for(var i=drops.length-1;i>=0;i--)    // walking through array backwards is gnerally a good practice and to keeps things safe
 {
   if(drops[i].toDelete)
   {
     drops.splice(i,1);
   }
 }
 
}

function keyReleased()
{
  if(key!=' ')
  {
  ship.setDir(0);
  }
}

function keyPressed()
{
 if(key === ' ')
 {
   var drop=new Drop(ship.x,height);
   drops.push(drop);
 }

  if(keyCode===RIGHT_ARROW)
  {
   // ship.move(1);
   ship.setDir(1);
  }
  else if(keyCode===LEFT_ARROW)
  {
    //ship.move(-1);
ship.setDir(-1);
  }
}