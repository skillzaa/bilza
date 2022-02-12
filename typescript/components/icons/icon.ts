// import {BaseComp,Pack,Style } from "../../bilzaa2d/index.js";

// export default class Icon extends BaseComp {
//     x:number;
//     y:number;
//     code:number;
// constructor (code:number = 9876,x:number= 0,y:number=0,incomTempl:Style = new Style()){
//     super();
//     this.x = x;
//     this.y = y;
//     this.code = code;
//     this.style.merge(incomTempl);
// }
// width(p:Pack):number {
//     return p.text_width(String.fromCharCode(this.code),this.style);
// }
// height(p:Pack):number {
//     return p.text_width( "X.",this.style);
// }

// draw(p:Pack):boolean{
// p.drawIcon(this.code,this.x,this.y,this.style);
// return true;
// }

// }