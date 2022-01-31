import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import Xy from "../design/xy.js";
import {Cornor} from "../design/cornor.js";

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
let loc = new Xy(this.templ.x,this.templ.y,this.width(p),this.height(p),Cornor.leftTop);    
p.ctx.drawText(this.content,loc,this.templ);    
return true;
}

}