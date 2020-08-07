//the bob class
class Bob{
    constructor(x, y, radius){
        var properties = {
            //some changes in the properties of the bob
            isStatic: false,
            friction:0.1,
            density:0.1,
            restitution: 1
        }

        this.body = Bodies.circle(x, y, radius, properties);//creates the bob according to the physics engine
        this.diameter = radius*2;
        this.x = x;
        this.y = y;

        World.add(world, this.body);//adds this bob to the world so that it acts according to the physics laws
    }

    display(){
        //function for displaying the bob
        var position = this.body.position;//name spacing
        fill(255, 0, 255);//colours it pink

        ellipse(position.x, position.y, this.diameter, this.diameter); //draws an ellipse over the body created above
    }
}