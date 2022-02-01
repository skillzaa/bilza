import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import Xy from "../design/xy.js";
import {Cornor} from "../design/cornor.js";
import Templ from "../design/templ.js";

export default class Rectangle extends Component {
    x:number;
    y:number;
    rectWidth:number;
    rectHeight:number;
constructor (x:number,y:number,width:number,height:number,incomTempl:Templ){
    super();
    this.x = x;
    this.y = y;
    this.rectWidth = width;
    this.rectHeight = height;
    this.templ.merge(incomTempl);
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
p.ctx.draw_rect(this.x,this.y,this.rectWidth,this.rectHeight,this.templ);    
return true;
}

}