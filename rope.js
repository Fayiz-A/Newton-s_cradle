class Rope{
    constructor(bodyA, bodyB, offsetX, offsetY){
        //these are the offsets of the bodyB where the constraint will connect it to bodyA
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            pointB: {x: this.offsetX, y: this.offsetY},
        }

        this.rope = Constraint.create(options);//creates a constraint between bodyA and bodyB
        World.add(world, this.rope);//adds this constraint to the world
    }

    display(){
        //some name spacing
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;

        //this is a line over the constraint to show the rope
        line(pointA.x, pointA.y, pointB.x + this.offsetX, pointB.y  + this.offsetY);
    }
}