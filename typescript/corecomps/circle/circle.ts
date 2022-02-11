// import {BaseComp,Pack,Style } from "../../bilzaa2d/index.js";

// export default class Circle extends BaseComp {
//     x:number;
//     y:number;
//     startAngle:number;
//     endAngle:number;
//     radius:number;
//     fill:boolean;
// constructor (x:number,y:number,radius:number,incomTempl:Style){
//     super();
//     this.x = x;
//     this.y = y;
//     this.startAngle = 0;
//     this.endAngle = 2 * Math.PI;
//     this.radius = radius;
//     this.fill = true;
//     this.style.merge(incomTempl);
// }
// width(p:Pack):number {
//     return this.radius * 2;
// }
// height(p:Pack):number {
//     return this.radius * 2;
// }


// draw(p:Pack):boolean{
// if (this.startAngle >= 7){this.startAngle = 0; }
// else {this.startAngle++;}    
// let x = this.xy.X(this.x,this.width(p),p.canvasWidth())
// let y = this.xy.Y(this.y,this.height(p),p.canvasHeight())
// p.drawCircle(x,y,this.radius,this.fill,this.style,this.startAngle);

// this.style.fontSize = 200;
// this.style.fillStyle = "blue";
// return true;
// }

// }