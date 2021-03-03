
function Cell(x,y, r, c) {
    this.x=random(width);
    this.y=random(height);
  
    this.r = r || 60;
    this.c = c || color(random(100, 255), 0, random(100, 255), 100);
  
    this.clicked = function(x, y) {
      var d = dist(this.x, this.y, x, y);
      if (d < this.r) {
        return true;
      } else {
        return false;
      }
    };
  
    this.mitosis = function() {
      //this.pos.x += random(-this.r, this.r);
      var cell = new Cell(this.x,this.y, this.r * 0.8, this.c);
      return cell;
    };
  
    this.move = function() {
      var vel = p5.Vector.random2D(); // crazy funtion, not working wasted my entire day fucccck.........
      var vx=random(-50,50);
      var vy=random(-50,50);
      this.x+=vx;
      this.y+=vy;
    };
  
    this.show = function() {
      noStroke();
      fill(this.c);
      ellipse(this.x, this.y, this.r, this.r);
    };

    // fixed few things still need to fix plenty more stuff will come back in few months 3-3-2021
  }