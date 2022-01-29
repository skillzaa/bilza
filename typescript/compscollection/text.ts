import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import CtxData from "../design/ctxData.js";

export default class Text extends Component {
content:string;
ctxData:CtxData;
x:number;
y:number;
constructor (content:string,x :number=0,y :number=0){
    super();
this.content = content;    
this.x = x;    
this.y = y;    
this.ctxData = new CtxData();    
}
width(p:Pack):number {
return p.ctx().chars_width(this.content);
// return 200;    
}
height(p:Pack):number {
return p.ctx().chars_width("Xi");    
}

draw(p:Pack,startingX :number,startingY :number):boolean{
p.ctx().setFontSize(this.ctxData.fontSize);    
p.ctx().setFontName(this.ctxData.fontName);    
p.ctx().setFillStyle(this.ctxData.fillStyle);    
p.ctx().setStrokeStyle(this.ctxData.strokeStyle);    

p.ctx().drawText(this.content,startingX + this.x, startingY + this.y);    
return true;
}

}