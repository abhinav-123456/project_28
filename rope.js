class Launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB
        }
    this.Launcher=Constraint.create(options);
    World.add(world,this.Launcher);
    }
    attach(body){
        this.Launcher.bodyA=body;
    }

    fly(){
        this.Launcher.bodyA=null
    }
    display(){
        stroke("white")
    var pointA=this.body.bodyA.position
    var pointB=this.body.pointB
    line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    };









  