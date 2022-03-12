import {Component,Pack,Style,Transition,Position } from "../bilzaa2d/index.js.js";

import Dot from "./dot.js";

export default class ArcTo extends Component {
    color:string;
    lineWidth:number;
    
    start:Position;
    end:Position;
    mid:Position;
    showBoundingLines:boolean
    
    private style:Style;
constructor (start:Position = new Position(200,20),mid:Position = new Position(200,130), end:Position = new Position(50,20),color="red"){
    super();
    this.start = start;
    this.end = end;
    this.mid = mid;
    this.showBoundingLines = true;
    this.color = color;
    this.lineWidth = 2;
    this.style = new Style();
}
width( p: Pack ): number {
return this.start.x -  this.end.x;
}
height(p: Pack): number {
return this.start.x -  this.end.x;
}
draw(p: Pack): boolean {
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color;    
this.style.lineWidth = this.lineWidth;    

if (this.showBoundingLines == true){
    p.beginPath();
    // p.strokeStyle = 'gray';
    p.moveTo(this.start);
    p.ctx.lineTo(this.mid.x,this.mid.y);
    p.ctx.lineTo(this.end.x,this.end.y);
    p.stroke();
    
}

p.beginPath();
p.moveTo(this.start);
// p.ctx.arcTo(this.d.a.x,this.d.a.y,this.d.b.x,this.d.b.y,80);

p.arcTo(this.mid,this.end,this.style,40);
p.stroke();

return true;
}

}