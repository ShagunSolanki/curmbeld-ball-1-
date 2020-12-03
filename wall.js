class wall{
    constructor(x,y,width,height){
    var options = {
        
        isStatic: true,
        friction:0.8,
        density:1.5
    
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
    
    }
    display(){
    
    rectMode(CENTER)
    fill("green");
    rect(this.body.position.x,this.body.position.y,this.width,this.height)
    
    
    }
    
    
    
    
    
    
    
    
    
    }