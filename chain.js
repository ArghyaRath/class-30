class Chain {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA.body,
            pointB: pointB,
            length: 100,
            stiffness: 0.05
        }
        this.pointB = pointB
        this.chain = Matter.Constraint.create(options);
        World.add(world, this.chain)
        this.sling1 = loadImage("sprites/sling1.png");
        this.sling2 = loadImage("sprites/sling2.png");
        this.sling3 = loadImage("sprites/sling3.png");
    }
    display() {
        image(this.sling1, 200, 120);
        image(this.sling2, 175, 75);
        if (this.chain.bodyA != null) {
            var pointA = this.chain.bodyA.position
            var pointB = this.pointB
            push()
            strokeWeight(10);
            stroke(48,22,8)
           line(pointA.x , pointA.y, pointB.x+10, pointB.y-50);
           line(pointA.x, pointA.y, pointB.x-30, pointB.y-50)
            pop()
        }
    }

    fly() {
        this.chain.bodyA = null;
    }
}