const canvas=document.querySelector("#canvas");
canvas.width=window.innerWidth;
canvas.height=window.innerHeight;
canvas.style.background="#ff8";

const context=canvas.getContext("2d");
/*
//let x=0;
class Circle{
    //x=0; //object,properties
    setCircle(x,y,radius)//local variable, functions
    {
        //local variable
        this.x=x;
        this.y=y;
        this.radius=radius;
        
        //console.log(x);
        this.x=x;
        this.y=y;
        this.radius=radius;
       //x=a;
        //class variable=local variable

    }
    print()
    {
        console.log(this.x,this.y,this.radius);

    }

}
//Class object
//const x=new Array();

const c=new Circle();
c.setCircle(100,40,50);
c.print();

const c1=new Circle();
c1.setCircle(200,200,20);
c1.print();
*/


class Circle
{
    constructor(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }
    
   /* setCircle(x,y,radius,color)
    {
        this.x=x;
        this.y=y;
        this.radius=radius;
        this.color=color;
    }*/

    draw()
    {
        context.beginPath();
        context.fillStyle=this.color;
        context.arc(this.x,this.y,this.radius,0,2*Math.PI);
        context.stroke();
        context.fill();
        context.closePath();

    }
}
/*
let c=new Circle(100,200,50,"red");
c.draw();

let c1=new Circle(200,200,50,"blue");

c1.draw();
//c1.setCircle(200,200,50,"blue");
*/
let circles=[]
for(i=1;i<=10;i++)
{
    let c=new Circle(100+i*10,100,15,"red");
    circles.push(c);
    //c.draw();

}


for(i=0;i<10;i++)
circles[i].draw();





