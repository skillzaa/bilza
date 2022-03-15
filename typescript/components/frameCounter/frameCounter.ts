// import {Component,Pack,Style } from "../../index.js";

// export default class FrameCounter extends Component {
// frame:number;  
// styleRectangle:Style;  
// styleNumbers:Style;
// padding :number;  
// x :number;  
// y :number;
// content :string;  
// constructor (){
//     super();
//     this.x=0;
//     this.y=0;
//     this.content = "sec: ";
//     this.frame=0;
//     this.padding = 4;
//     this.styleRectangle = new Style();
//     this.styleNumbers = new Style();
//     //------default ??
//     this.styleRectangle.fillStyle = "black";
//     this.styleNumbers.fillStyle = "yellow";
// }
// width( p: Pack ): number {
// return p.textWidth(this.content + "0000",this.styleNumbers);
// }
// height(p: Pack): number {
// return p.textWidth("Xi",this.styleNumbers);    
// }
// update(frame: number, p: Pack): boolean {
//     this.frame = frame;
//     return true;
//     // return super.update(frame, p);
// }
// draw(p: Pack): boolean {
// // it is upto the component author to use xPerc    
// let x = p.xPerc(this.x);    
// let y = p.yPerc(this.y);    
//     let s = "Frame:" + this.frame
// p.drawFillRect(x,y,this.width(p)+ this.padding,this.height(p)+this.padding, this.styleRectangle); 

// p.drawText(s,x + (this.padding/2),y + (this.padding/2),this.styleNumbers);
//     return true;
// }

// }