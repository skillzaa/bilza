import {Component,Pack,Style } from "../../index.js";
import DataFn,{ObjectData} from "./DataFn.js";
export default class Circle extends Component<ObjectData> {

constructor (){
    super(DataFn);
}
width(p:Pack):number {
    return this.d.radius * 2;
}
height(p:Pack):number {
    return this.d.radius * 2;
}

draw(p:Pack):boolean{
if (this.d.startAngle >= 7){this.d.startAngle = 0; }
else {this.d.startAngle++;}    

p.drawCircle(this.d.x,this.d.y,this.d.radius,this.d.fill,this.style,this.d.startAngle);

return true;
}

}