// import {Component,Pack,Style } from "../../bilzaa2d/index.js";

// export default class Circle extends Component {
//     x:number;
//     y:number;
//     startAngle:number;
//     endAngle:number;
//     radius:number;
//     fill:boolean;
//     style :Style;
// constructor (x:number,y:number,radius:number,incomTempl:Style){
//     super();
//     this.style = new Style();
//     this.x = x;
//     this.y = y;
//     this.startAngle = 0;
//     this.endAngle = 2 * Math.PI;
//     this.radius = radius;
//     this.fill = true;
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
// let x = p.xPerc(this.x);
// let y = p.yPerc(this.y);
// p.drawCircle(x,y,this.radius,this.fill,this.style,this.startAngle);

// return true;
// }

// }