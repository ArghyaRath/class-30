class Log extends Base {
    constructor(x, y, h, a) {

        super(x, y, 20, h);
        this.image = loadImage("./sprites/wood2.png");
        Matter.Body.setAngle(this.body, a);
        this.a = a;
        this.w = 20;
        this.h = h;
    }
}