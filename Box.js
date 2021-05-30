class Box{
  constructor(x,y){
  this.body = Bodies.rectangle(x,y,20,20);
  World.add(world,this.body);
  }
  display(){
      
  var pos=this.body.position;
    var color1=random(0,255);
    var color2=random(0,255);
    var color3=random(0,255);
    push()
    fill(color1,color2,color3);
    rectMode(CENTER);
    rect(pos.x,pos.y,20,20);
    pop()


  }
}