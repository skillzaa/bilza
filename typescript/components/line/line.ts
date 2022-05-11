import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";

export default class Line extends Component<ObjectData> {

constructor (duration:number=300, x1 :number=0, y1 :number=0,x2:number=100,y2:number=100,color:string="black",lineWidth:number=2){
    super(DataFn,duration);
    
    this.d.x1 = x1;
    this.d.y1 = y1;
    this.d.x2 = x2;
    this.d.y2 = y2;
    this.d.color = color;
    this.d.lineWidth = lineWidth;

    this.drawLayer = DrawLayer.MiddleGround;
}
width(p:Pack):number {
return  Math.abs(this.d.x1 - this.d.x2);    
    // return this.d.width;
}
height(p:Pack):number {
    return  Math.abs(this.d.y1 - this.d.y2);    
}

draw(p:Pack):boolean{
this.style.fillStyle = this.d.color;    
this.style.strokeStyle = this.d.color; 
this.style.lineWidth = this.d.lineWidth; 
p.drawLine(
    p.xPerc(this.d.x1),
    p.yPerc(this.d.y1),
    p.xPerc(this.d.x2),
    p.yPerc(this.d.y2),
    this.style
)
return true;
}


}//class