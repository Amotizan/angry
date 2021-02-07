class SlingShot{
    constructor(bodyA,pointB){
        var options ={
            bodyA:bodyA,
            pointB:pointB,
            length:20,
            stiffness:0.04
        }
        this.pointB = pointB
        this.slingshot = Constraint.create(options)
        World.add(world, this.slingshot);
    }
    fly(){
        this.slingshot.bodyA = null
    }
    display(){
        if(this.slingshot.bodyA){
        var posA = this.slingshot.bodyA.position
        var posB = this.pointB
        strokeWeight(4)
        stroke("purple")
        line(posA.x,posA.y,posB.x,posB.y)
    }}
}