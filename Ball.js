class Blower{

    constructor(x,y,r){

        this.r = r;
        
        var options = {

            isStatic:true

        }

        this.body = Bodies.rectangle(x,y,r,options);
        World.add(world,this.body);


    }

    display(){

        var pos = this.body.position;

        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,pos.r,pos.r);

    }

}