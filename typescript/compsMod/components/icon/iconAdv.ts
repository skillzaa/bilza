// import {Pack,Style } from "../../Bilza.js";

// export default class IconAdv extends BaseComp {
//     x:number;
//     y:number;
//     code:number;
//     backgroundColor:string;
//     iconColor:string;
//     caption:string;
//     // backgroundShap:Shapes;
// constructor (code:number = 9876,x:number= 0,y:number=0,incomTempl:Style = new Style()){
//     super();
//     this.x = x;
//     this.y = y;
//     this.caption = "Here..";
//     this.backgroundColor = "black";
//     this.iconColor = "green";
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
// this.style.fillStyle = this.backgroundColor;    

// p.drawFillRect(p.xPerc(this.x,p),p.yPerc(this.y,p) - (this.width(p)/100* 5),this.width(p),this.height(p),this.style);
// //---------------------------------
// this.style.fillStyle = this.iconColor;

// p.drawIcon(this.code,p.xPerc(this.x,p),p.yPerc(this.y,p),this.style);
// return true;
// }

// }