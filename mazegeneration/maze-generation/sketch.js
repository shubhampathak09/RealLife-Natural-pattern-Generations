// global variables

var cols,rows;
var w=40;

var grid=[];

var current;

function setup() {
  // put setup code here
  createCanvas(400,400);
  cols=floor(width/w);
  rows=floor(height/w);


  

  for(var j=0;j<rows;j++)
  {
    for(var i=0;i<cols;i++)
    {
      var cell=new Cell(i,j);
      grid.push(cell);
    }
  }

 current=grid[0];
}

function draw() {
  // put drawing code here
  background(51);

 
  for(var i=0;i<grid.length;i++)
  {
   grid[i].show();
  }
 current.visited=true;
 var next=current.checkNeighbours();

if(next)
{
next.visited=true;

removeWalls(current,next);



current=next;

}

}


function index(i,j)
{

  if(i<0||j<0||i>cols-1||j>rows-1)
  {
    return -1;
  }
  return i+j*cols;  // this is how we get a loaction in single d array af it were 2d array
}

function Cell(i,j)
{
  this.i=i;  // i row
  this.j=j;  // j col
  this.visited=false;
  this.walls=[true,true,true,true];
// top right bottom left


this.checkNeighbours=function()
{

var neighbors=[];

//var index=i+j*cols; // algorithm

var top=grid[index(i,j-1)];
var right=grid[index(i+1,j)];
var left=grid[index(i-1,j)];
var bottom=grid[index(i,j+1)];


if(top && !top.visited)
{
  neighbors.push(top);  //cell object
}

if(right &&!right.visited)
{
  neighbors.push(right);
}

if(!bottom && !bottom.visited)
{
  neighbors.push(bottom);
}

if(left && !left.visited)
{
  neighbors.push(left);
}


if(neighbors.length>0)
{
  var r=floor(random(0,neighbors.length))
  return neighbors[r];  //

}
else{
  return undefined;
}


}

this.visited=false;

  this.show=function(){
    var x=this.i*w;
    var y=this.j*w;
    stroke(255);
    // noFill(); 
    // rect(x,y,w,w);
    if(this.walls[0])
    {
    line(x,y,x+w,y);
    }
    if(this.walls[1])
    {
    line(x+w,y,x+w,y+w);
    }
    if(this.walls[2])
    {
    line(x+w,y+w,x,y+w);
    }
    if(this.walls[3])
    {
    line(x,y+w,x,y);
    }

    if(this.visited)
    {
      fill(255,0,255,100);
      rect(x,y,w,w);
    }
   }




  }


  
  function removeWalls(a,b)
  {

    //[top,right,bot,left]
    var x=a.i-b.i;
   
  if(x===1)
  {
    // left cell
    a.walls[3]=false;   
    b.wall[1]=false;
  }
  else if(x===-1)
  {
    b.walls[3]=false;
    a.walls[1]=false;
  }
  var y=a.j-b.j;
  if(y===1)
  {
    a.walls[0]=false;
    b.wall[2]=false
  }
  else if(y===-1)
  {
    a.walls[2]=false;
    b.walls[0]=false;
  }

  }



// need revisit something happening strange:-P