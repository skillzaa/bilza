import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import Xy from "../design/xy.js";
import {Cornor} from "../design/cornor.js";
import Templ from "../design/templ.js";

export default class Text extends Component {
content:string;
constructor (content:string){
    super();
this.content = content;
}
width(p:Pack):number {
return p.ctx.chars_width(this.content);
// return 200;    
}
height(p:Pack):number {
return p.ctx.chars_width("Xi");    
}


draw(p:Pack):boolean{
let x = this.xy.X(this.x,this.width(p),p.ctx.canvasWidth())
let y = this.xy.Y(this.y,this.height(p),p.ctx.canvasHeight())
p.ctx.drawText(this.content,x,y,this.templ);    
return true;
}

}