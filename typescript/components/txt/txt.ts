import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";

export default class Txt extends Component<ObjectData> {
    
constructor (content :string=""){
    super(DataFn);
    this.d.content = content;
    this.drawLayer = DrawLayer.MiddleGround;
}
width(p:Pack):number {
return  0;
    // return this.d.width;
}
height(p:Pack):number {
    return  0;
}

draw(p:Pack):boolean{
this.style.fillStyle = this.d.color;    
this.style.strokeStyle = this.d.color; 
p.drawText(this.d.content,this.d.x,this.d.y,this.style)
return true;
}

}//class