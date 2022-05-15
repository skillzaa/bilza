import {Pack } from "../../../Bilza.js";
import Component from "../../BaseComponent/Basecomponent.js";
// import Style from "../../../design/style.js";
import DataFn,{ObjectData} from "./DataFn.js";

export default class Circle extends Component<ObjectData> {
 
constructor (duration:number=300,
    x :number=0,y :number=0,radiusPercent :number = 10,color:string="grey",
    fill :boolean=true, startAngle :number=0,endAngle :number=2 * Math.PI){

    super(DataFn);
    
    this.d.x = x;
    this.d.y = y;
    this.d.color = color;
    this.d.radiusPercent = radiusPercent;
    this.d.startAngle = startAngle;
    this.d.endAngle = endAngle;
    this.d.fill = fill;

}
width(p:Pack):number {
    return (p.canvasWidth()/100 *  (this.d.radiusPercent));
}
height(p:Pack):number {
    return (p.canvasWidth()/100 *  (this.d.radiusPercent));
}

draw(p:Pack):boolean{
    this.style.fillStyle = this.d.color;
    this.style.strokeStyle = this.d.color;
p.drawCircle(
    p.xPerc(this.d.x), 
    p.yPerc(this.d.y),
    Math.floor(this.width(p)/2), //radius is half of width
    this.d.fill,
    this.d.startAngle,
    this.d.endAngle,
    this.style,);

return true;
}


}