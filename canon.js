class Canon{
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a 
        this.canonImg = loadImage("assets/canon.png")
        this.canonBase = loadImage("assets/cannonBase.png")
    }

    show(){
       //for the top part
       push();
       imageMode(CENTER)
       image(this.canonImg,this.x,this.y,this.w,this.h) 
       pop();

       // for the bottom part
       image(this.canonBase,70,20,200,200)
       noFill()


    }
}