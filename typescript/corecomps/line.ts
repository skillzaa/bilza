import Pack from "../pack/pack.js";
import Component from "../component/baseComp.js";
import Xy from "../design/xy.js";
import {Cornor} from "../design/cornor.js";
import Style from "../style/style.js";

export default class Line extends Component {
    startX:number;
    startY:number;
    endX:number;
    endY:number;
constructor (startX:number,startY:number,endX:number,endY:number,incomTempl:Style){
    super();
    this.startX = startX;
    this.startY = startY;
    this.endX = endX;
    this.endY = endY;
    this.style.merge(incomTempl);
}
width(p:Pack):number {
    return this.endX - this.x;
}
height(p:Pack):number {
    return this.endY - this.y;
}


draw(p:Pack):boolean{
let x = this.xy.X(this.x,this.width(p),p.ctx.canvasWidth())
let y = this.xy.Y(this.y,this.height(p),p.ctx.canvasHeight())
p.ctx.draw_line(this.startX,this.startY,this.endX,this.endY,this.style);    
return true;
}

}