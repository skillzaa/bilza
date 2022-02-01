import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import Xy from "../design/xy.js";
import {Cornor} from "../design/cornor.js";
import Style from "../style/style.js";

export default class Circle extends Component {
    x:number;
    y:number;
    radius:number;
    fill:boolean;
constructor (x:number,y:number,radius:number,incomTempl:Style){
    super();
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.fill = true;
    this.style.merge(incomTempl);
}
width(p:Pack):number {
    return this.radius * 2;
}
height(p:Pack):number {
    return this.radius * 2;
}


draw(p:Pack):boolean{
let x = this.xy.X(this.x,this.width(p),p.ctx.canvasWidth())
let y = this.xy.Y(this.y,this.height(p),p.ctx.canvasHeight())
p.ctx.draw_circle(x,y,this.radius,this.fill,this.style);    
return true;
}

}