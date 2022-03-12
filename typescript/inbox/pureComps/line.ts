import {Component,Pack,Style,Transition,Position } from "../bilzaa2d/index.js.js";


export default class Line extends Component {
    color:string;
    lineWidth:number;
    start:Position;
    end:Position;
    private style:Style;
constructor (start:Position = new Position(0,0),end:Position = new Position(100,100),color="red"){
    super();
    this.start = start;
    this.end = end;
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

p.drawLine(this.start.x,this.start.y,this.end.x,this.end.y,this.style);
return true;
}

}