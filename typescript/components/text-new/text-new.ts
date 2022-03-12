import {Component,Pack,Style,Transition,XAlignment,YAlignment } from 
"../../index.js";
import TextTemplates from "./textTemplates.js.js";
export {TextTemplates};
//this is simple text / word
export default class Text extends Component {
x :number;
y :number;
xAlignment:XAlignment;
yAlignment:YAlignment;

content:string;

fontSize:number;
fontColor:string;
fontFamily:string;

underline:boolean;
underlineExtend:boolean;
underlineColor:string;
underlineWidth:number;

overline:boolean;
overlineExtend:boolean;
overlineColor:string;
overlineWidth:number;

highlight:boolean;
highlightExtend:boolean;
highlightColor:string;

shadow :boolean;
shadowBlur:number;
shadowOffsetX:number;
shadowOffsetY:number;
shadowColor:string;
//--just one style for all components will be reset for each use.
style:Style;

constructor(content :string){
super();
this.x = 0;
this.y = 0;
this.content = content;

this.xAlignment = XAlignment.Mid; 
this.yAlignment = YAlignment.Top; 

this.fontColor = "blue";
this.fontSize = 22;
this.fontFamily = "serif";

this.underline = false;
this.underlineExtend = false ;
this.underlineColor = "black";
this.underlineWidth = 2;
this.overlineWidth = 2;

this.overline = false;
this.overlineExtend = false ;
this.overlineColor = "black";
this.highlight = false;
this.highlightExtend = false ;
this.highlightColor = "yellow";

this.shadow = true;
this.shadowBlur = 5;
this.shadowColor = "grey";
this.shadowOffsetX = 8;
this.shadowOffsetY = 8;

this.style = new Style();
}
private finalX(p :Pack):number{
let ret = this.x;    
ret = p.xPerc(this.x);
    switch (this.xAlignment) {
        case XAlignment.Left:
            // nothing req;
            break;
        case XAlignment.Mid:
            ret -= (this.width(p)/2);
            break;
        case XAlignment.Right:
            ret -= (this.width(p));
            break;
    
    }
return ret;    
}
private finalY(p :Pack):number{
let ret = this.y;    
ret = p.yPerc(this.y);
    switch (this.yAlignment) {
        case YAlignment.Top:
            // nothing req;
            break;
        case YAlignment.Mid:
            ret -= (this.height(p)/2);
            break;
        case YAlignment.Bottom:
            ret -= (this.height(p));
            break;
    
    }
return ret;    
}
width( p: Pack ): number {
return p.charsWidth(this.content,this.style.fontSize, this.style.fontName);
}
height(p: Pack): number {
return p.charsWidth("W",this.style.fontSize, this.style.fontName);
}
draw(p: Pack): boolean {
    if (this.highlight == true){
        this.drawHighlight(p);
    }
    this.drawContent(p);
    
    if (this.underline == true){
        this.drawUnderline(p);
    }
    if (this.overline == true){
        this.drawOverline(p);
    }
    return true;
}
private drawHighlight(p :Pack){
    if (this.highlight == true){
        this.style.fillStyle = this.highlightColor;
        p.drawFillRect(
            this.finalX(p),
            this.finalY(p),
            this.width(p),this.height(p),this.style);
    }
}
private drawUnderline(p :Pack){
    if (this.underline == true){
        this.style.fillStyle = this.underlineColor;
        this.style.strokeStyle = this.underlineColor;
        this.style.lineWidth = this.underlineWidth;
        p.drawLine(
            this.finalX(p),
            this.finalY(p) + this.height(p),
            this.finalX(p) + this.width(p),
            this.finalY(p) + this.height(p),
        this.style);
        
    }
}
private drawOverline(p :Pack){
    if (this.underline == true){
let yperc = p.yPerc(this.y);        
        this.style.fillStyle = this.overlineColor;
        this.style.strokeStyle = this.overlineColor;
        this.style.lineWidth = this.overlineWidth;
        p.drawLine(
            this.finalX(p),
            this.finalY(p) ,
            this.finalX(p) + this.width(p),
            this.finalY(p),
        this.style);
        
    }
}
private drawContent(p :Pack){
    this.style.fillStyle = this.fontColor;
    this.style.strokeStyle = this.fontColor;
    this.style.fontSize = this.fontSize;

    if (this.shadow == true){
        this.style.shadowBlur = this.shadowBlur;
        this.style.shadowColor = this.shadowColor;
        this.style.shadowOffsetX = this.shadowOffsetX;
        this.style.shadowOffsetY = this.shadowOffsetY;
    }
    p.drawText(this.content,
        this.finalX(p),
        this.finalY(p),
        this.style);
}

}
