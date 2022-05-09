import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
 
export default class Rect extends Component<ObjectData> {

constructor (startTimeSeconds :number=0,endTimeSeconds:number=300,x :number=0, y :number=0,widthPercent :number=10, heightPercent :number=10){
    super(DataFn,startTimeSeconds,endTimeSeconds);
    this.d.x = x;
    this.d.y = y;
    this.d.widthPercent = widthPercent;
    this.d.heightPercent = heightPercent;
    this.drawLayer = DrawLayer.MiddleGround;
}
width(p:Pack):number {
return  ((p.canvasWidth() /100) * this.d.widthPercent);    
    // return this.d.width;
}
height(p:Pack):number {
return  ((p.canvasHeight() /100) * this.d.heightPercent);    
}

draw(p:Pack):boolean{
this.style.fillStyle = this.d.color;    
this.style.strokeStyle = this.d.color; 
this.style.lineWidth = this.d.lineWidth; 
let newX = p.xPerc(this.d.x);
let newY = p.yPerc(this.d.y);
   p.drawRect(
    newX,
    newY,
    this.width(p),
    this.height(p),
    this.style
    );
return true;
}

// resize(width: number, height: number):number {
// // this.d.width = (width /100) * this.d.widthPercent;    
// //     return this.d.width;
// return 0;
// }
}