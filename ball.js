class Ball {
    constructor(x,y,r)
      {
          var options = { 
              density: 1, 
              frictionAir: 0.4,
              isStatic: false
          };
          this.x=x;
          this.y=y;
          this.r=r;
          
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var ballPos=this.body.position;
              var angle=this.body.angle;		
              push();
              translate(ballPos.x, ballPos.y);
              rotate(angle);
              ellipseMode(CENTER)
              fill("black")
              //imageMode(CENTER);
  
              // image(image, 0,0,this.r, this.r)
              ellipse(0,0,this.r, this.r);
              // image(0,0,this.r, this.r)
              // Image(this.image, 0,0,this.r, this.r)
  
              pop();
              
      }
  }
  