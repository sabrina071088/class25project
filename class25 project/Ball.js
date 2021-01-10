class Ball {
    constructor(x,y,radius){

        var options={
            restitution:1.0
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.width=radius*2
        this.height=radius*2
        this.image=loadImage("pink_ball.png")
        World.add(myWorld,this.body)
        
    }
    display(){
        var pos=this.body.position;
       // push ()
        image (this.image,pos.x,pos.y,this.width,this.height)
       // pop ()
    }
    
}