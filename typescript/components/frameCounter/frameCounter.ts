import {Component,Pack,Style } from "../../index.js";
import DataFn,{ObjectData} from "./DataFn.js";
export default class FrameCounter extends Component<ObjectData> {

    
constructor (){
    super(DataFn);
    
}
width( p: Pack ): number {
this.style.fontSize = this.d.fontSize;    
return p.textWidth(this.d.content + "0000",this.style);
}
height(p: Pack): number {
this.style.fontSize = this.d.fontSize;    
return p.textWidth("Xi",this.style);    
}
update(msDelat :number, p: Pack): boolean {
    this.d.frame = msDelat/1000; //to seconds
    return true;
    // return super.update(frame, p);
}
draw(p: Pack): boolean {
// it is upto the component author to use xPerc    
// let x = p.xPerc(this.x);    
// let y = p.yPerc(this.y);    
    let s = "Frame:" + this.d.frame
    this.style.fillStyle = this.d.colorRectangle;
    p.drawFillRect(this.d.x,this.d.y,this.width(p)+ this.d.padding,this.height(p)+this.d.padding, this.style); 
    
    this.style.fillStyle = this.d.colorNumbers;
p.drawText(s,this.d.x + (this.d.padding/2),this.d.y + (this.d.padding/2),this.style);
    return true;
}

}