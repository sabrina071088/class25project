class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        this.image=loadImage("ground.png")
        World.add(myWorld,this.body);

    }
    display(){
        var pos=this.body.position;
        push ();
        image (this.image,pos.x,pos.y,this.width,this.height)
        pop ();
    }
}