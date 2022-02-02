import Pack from "../pack/pack.js";
import BaseComp from "../component/baseComp.js";
import Style from "../style/style.js"
import IFrameStart from "../component/IFrameStart.js";
import CompData from "../component/compData.js";

    class TextData extends CompData  {
        content:string;
    constructor(frameStart=0,content="",x=0,y=0){
        super(frameStart);
        this.content = content;
        this.x = x;
        this.y = y;
    }    
    }

export default class Text extends BaseComp {
    compData:TextData;
constructor (frameStart :number,content="",x=0,y=0){
super(x,y);
this.compData = new TextData(0,content);
}

width(p:Pack):number {
return p.ctx.chars_width(this.compData.content);
// return 200;    
}
height(p:Pack):number {
return p.ctx.chars_width("Xi");    
}


draw(p:Pack):boolean{
let x = this.xy.X(this.x,this.width(p),p.ctx.canvasWidth())
let y = this.xy.Y(this.y,this.height(p),p.ctx.canvasHeight())
p.ctx.drawText(this.compData.content,x,y,this.style);    
return true;
}

}