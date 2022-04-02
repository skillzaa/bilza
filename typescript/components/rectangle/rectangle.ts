import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
export default class RandomBgShapes extends Component<ObjectData> {

constructor (widthPercent :number=10, heightPercent :number=10){
    super(DataFn);
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
this.style.fillStyle = this.d.colorFill;    
this.style.strokeStyle = this.d.colorBorder; 
let newX = p.xPerc(this.d.x);
let newY = p.yPerc(this.d.y);
   p.drawFillRect(
    newX,
    newY,
    this.width(p),
    this.height(p),
    this.style
    );
return true;
}

resize(width: number, height: number):number {
// this.d.width = (width /100) * this.d.widthPercent;    
//     return this.d.width;
return 0;
}
}