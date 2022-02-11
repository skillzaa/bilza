// import {BaseComp,Pack,Style } from "../../bilzaa2d/index.js";

// export default class FrameCounter extends BaseComp {
// frame:number;  
// rectStyle:Style;  
// constructor (){
//     super();
//     this.frame=0;
//     this.rectStyle = new Style();
//     this.style.fillStyle = "yellow";
//     this.rectStyle.fillStyle = "grey";
// }
// width( p: Pack ): number {
// return p.chars_width("Frame #:0000");
// }
// height(p: Pack): number {
// return p.chars_width("Xi");    
// }
// update(frame: number, p: Pack): boolean {
//     this.frame = frame;
//     return super.update(frame, p);
// }
// draw(p: Pack): boolean {
//     let s = "Frame : " + this.frame
// p.draw_fillRect(0,0,p.text_width("Frame #:0000",this.rectStyle),this.height(p)+10, this.rectStyle);    
// p.drawText(s,5,5,this.style);
//     return true;
// }

// }