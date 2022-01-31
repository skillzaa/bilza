import Pack from "../pack/pack.js";
import Component from "../component/component.js";

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
p.ctx.drawText(this.content,this.ctxData);    
return true;
}

}