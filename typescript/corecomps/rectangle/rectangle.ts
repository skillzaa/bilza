// import {BaseComp,Pack,Style } from "../../bilzaa2d/index.js";


// export default class Rectangle extends BaseComp {
//     x:number;
//     y:number;
//     rectWidth:number;
//     rectHeight:number;
// constructor (x:number,y:number,width:number,height:number,incomTempl:Style){
//     super();
//     this.x = x;
//     this.y = y;
//     this.rectWidth = width;
//     this.rectHeight = height;
//     this.style.merge(incomTempl);
// }
// width(p:Pack):number {
//     return this.rectWidth;
// }
// height(p:Pack):number {
//     return this.rectHeight;
// }


// draw(p:Pack):boolean{
// let x = this.xy.X(this.x,this.width(p),p.canvasWidth())
// let y = this.xy.Y(this.y,this.height(p),p.canvasHeight())
// p.draw_rect(this.x,this.y,this.rectWidth,this.rectHeight,this.style);    
// return true;
// }

// }