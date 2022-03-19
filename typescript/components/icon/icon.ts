// import {Component,Pack,Style } from "../../bilzaa2d/index.js";

// export default class Icon extends Component {
//     x:number;
//     y:number;
//     code:number;
//     style :Style;
// constructor (code:number = 9876,x:number= 0,y:number=0){
//     super();
//     this.style = new Style();
//     this.x = x;
//     this.y = y;
//     this.code = code;
// }
// width(p:Pack):number {
//     return p.textWidth(String.fromCharCode(this.code),this.style);
// }
// height(p:Pack):number {
//     return p.textWidth( "X.",this.style);
// }

// draw(p:Pack):boolean{
// let x = p.xPerc(this.x);    
// let y = p.yPerc(this.y);    
// p.drawIcon(this.code,x,y,this.style);
// return true;
// }

// }