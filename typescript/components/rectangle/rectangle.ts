import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
export default class RandomBgShapes extends Component<ObjectData> {

constructor (){
    super(DataFn);
    this.drawLayer = DrawLayer.MiddleGround;
}
width(p:Pack):number {
    return this.d.width;
}
height(p:Pack):number {
    return this.d.height;
}

draw(p:Pack):boolean{
this.style.fillStyle = this.d.colorFill;    
this.style.strokeStyle = this.d.colorBorder; 
let newX = p.xPerc(this.d.x);
let newY = p.yPerc(this.d.y);
   p.drawFillRect(
    newX,
    newY,
    this.d.width,
    this.d.height,
    this.style
    );
return true;
}

resize(canvasWidth :number,canvasHeight :number){
    

}//setWidth
}