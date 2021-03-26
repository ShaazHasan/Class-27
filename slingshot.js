class slingshot{
    constructor(bodyA,bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.SngShot=Constraint.create(options)
        World.add(world,this.SngShot)
    }
    display(){
        var pointA = this.SngShot.bodyA.position;
        var pointB = this.SngShot.bodyB.position; 
        strokeWeight(4); 

        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }

}