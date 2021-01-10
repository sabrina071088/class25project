class BaseClass{
    constructor(x,y,width,height,radius){
        var options={
            restitution: 0.6,
            density:1.0,
            friction:0.5
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
       
        this.width=width
        this.height=height
        this.image=loadImage("base.png")
        World.add(myWorld,this.body);

    }
    display(){
        var pos=this.body.position;
        push ();
        image (this.image,pos.x,pos.y,this.width,this.height)
        pop ();
    }
}