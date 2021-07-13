class BaseClass {
    constructor() {
        var options = {
            restitution: 0.3,
             friction: 0.5,
             density: 1.2
        }
        this.body = Bodies.circle(50, 600, 70, options);
        this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        //var angle = this.body.angle;
        push();
       // translate(this.body.position.x, this.body.position.y);
       // rotate(angle);
        imageMode(CENTER);
        image(this.image, 50, 600, 70);
        pop();
      }
}