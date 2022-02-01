import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import Xy from "../design/xy.js";
import {Cornor} from "../design/cornor.js";
import Style from "../style/style.js";

export default class FillRectangle extends Component {
    x:number;
    y:number;
    rectWidth:number;
    rectHeight:number;
constructor (x:number,y:number,width:number,height:number,incomTempl:Style){
    super();
    this.x = x;
    this.y = y;
    this.rectWidth = width;
    this.rectHeight = height;
    this.style.merge(incomTempl);
}
width(p:Pack):number {
    return this.rectWidth;
}
height(p:Pack):number {
    return this.rectHeight;
}


draw(p:Pack):boolean{
let x = this.xy.X(this.x,this.width(p),p.ctx.canvasWidth())
let y = this.xy.Y(this.y,this.height(p),p.ctx.canvasHeight())
p.ctx.draw_fillRect(this.x,this.y,this.rectWidth,this.rectHeight,this.style);    
return true;
}

}