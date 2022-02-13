import {Component,Pack,Style,Transition,Position } from "../bilzaa2d/index.js";


export default class Dot extends Component {
    colorStroke:string;
    colorFill:string;
    radius:number;
    pos:Position;
    private style:Style;
constructor (color="red",radius =10,pos:Position = new Position(100,100)){
    super();
    this.pos = pos;
// colorStroke and colorFill are same but can be diff
    this.colorStroke = color;
    this.colorFill = color;
    this.radius = radius; 
    this.style = new Style();
}
width( p: Pack ): number {
return this.radius * 2;
}
height(p: Pack): number {
return this.radius * 2;

}
draw(p: Pack): boolean {
this.style.fillStyle = this.colorFill;    
this.style.strokeStyle = this.colorStroke; 

p.drawCircle(this.pos.x,this.pos.y,this.radius,true,this.style);    
    return true;
}

}