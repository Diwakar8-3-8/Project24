class Paper{
    constructor(x,y,radius){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
    }    

    display(){
        var pos = this.body.position;
        var radius = this.body.radius;

        circle(0,0,radius,options);
    }
}