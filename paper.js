class Paper {
    constructor(x, y,radius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 1.0,
            density: 1.2
        }
        this.radius = radius
       this.body= Bodies.circle(x, y,(this.radius-20)/2, options)
       World.add(world, this.body);
       this.image= loadImage("sprites/paper.png")
    }
    display(){
        var pos =this.body.position;
        push();
        translate(pos.x,pos.y);

        imageMode(CENTER);

        
        image(this.image,0, 0, this.radius,this.radius);

        pop();
      }
    };

