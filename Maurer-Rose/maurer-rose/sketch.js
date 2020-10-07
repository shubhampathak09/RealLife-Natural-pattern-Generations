// need some paramreter n and d for maurere rose check wikipedia for deatils
// set n=2 d=29
// future addons check with perlin noise for n and d and see how it changes
let n=6;
let d=71;
let dSlider;
function setup() {
  // put setup code here
  createCanvas(400,400);
  angleMode(DEGREES)
 dSlider=createSlider(1,180,1);


  // CHECK WHY USING ANGLE MODE RADIANS WE GET A PENTAGON (7/10/20 )
}

function draw() {
  // put drawing code here
  background(0);   //0 ->BLACK  220->white grey
  // transalte to middle
  
    translate(width/2,height/2);

    // scale function to increase the size
    //scale(100);

  stroke(255);

  d=dSlider.value();
   
  // by default most graphic systems treat angle by default in radians

  noFill();  // dont fill up the path with anythin

  beginShape()  // creates a closed path -->basically we are asking it to draw a circle
  strokeWeight(1);
  for(let i=0;i<361;i++)
  {
    let k=i*d
    let r=150*sin(n*k);   // k is angle and r is radius function for maurer rose curve
    let x=r*cos(k);  // rcosthea,rsintheta a circle with radius r from origin->0,0
    let y=r*sin(k);

    // vertex function ?
    vertex(x,y);
  }
  endShape(CLOSE)   
  
  // just to visualise the sinosoidal pattern
  // we can add just the sine loop for i
  noFill();
 stroke(255,0,255,255);
  beginShape()  // creates a closed path -->basically we are asking it to draw a circle
  strokeWeight(4);
  for(let i=0;i<361;i++)
  {
    let k=i;
    let r=150*sin(n*k);   // k is angle and r is radius function for maurer rose curve
    let x=r*cos(k);  // rcosthea,rsintheta a circle with radius r from origin->0,0
    let y=r*sin(k);

    // vertex function ?
    vertex(x,y);
  }
  endShape(CLOSE)   

 // n+=0.01;
 // d+=0.01;
}