//the roof class
class Roof{
    constructor(x, y, width, height) {
        var properties = {
            //some changes in the properties of the roof 
            isStatic: true, 
            friction:0.5, 
            density:1.2
        }
        this.body = Bodies.rectangle(x, y, width, height, properties);//creates a rectangular physics body
        this.width = width;//this is so as to use the parameter values outside the constructor 
        this.height = height;
        World.add(world, this.body);//adds the body to the world so that the physics laws can be applied to it
    }

    display() {
        var pos = this.body.position;

        var ground1 = createSprite(pos.x, pos.y, this.width, this.height);//creates a ground sprite over the body created above
        ground1.shapeColor = "Brown";
    }
}