class Ground {
    constructor(x,y,width,height) {
      this.image = loadImage("sprites/ground.png");
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      imageMode(CENTER);
      fill(255);
      image(this.image,pos.x, pos.y, this.width, this.height);
    }
  };