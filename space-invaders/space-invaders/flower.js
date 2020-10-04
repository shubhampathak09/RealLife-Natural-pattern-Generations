function Flower(x,y)
{
   this.x=x;
   this.y=y;
   this.r=30;
   
   this.xdir=1;
   

this.move=function()
{
    this.x=this.x+this.xdir;
     
}

this.shiftDown=function()
{
// if(this.xdir>0)
// {    
// this.xdir=-1;
// }
// else 
// {
//     this.xdir=1;
// }
this.xdir*=-1;
this.y=this.y+this.r;
}

this.grow=function()
{
    this.r=this.r+2;
}

   this.show=function ()
   {
      fill(255,0,200);
       ellipse(this.x,this.y,this.r*2,this.r*2);
   }
}