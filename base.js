class Base{
    constructor(x,y,width,height){
        var options = {
            'restitution' : 0.8,
            'friction' : 1,
            'density' : 1
        }
        this.w = width;
        this.h = height;
        this.x = x;
        this.y = y;
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.image = loadImage("./sprites/base.png");
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,this.w,this.h);
        pop();
    }
}