import {Component,Pack,Style,Transition,XAlignment,YAlignment } from "../../index.js";

import DataFn , {ObjectData} from "./DataFn.js";

export default class Text extends Component {
    
    private compData:Transition<ObjectData>;
    style:Style;
    d :ObjectData;
    data :ObjectData;
constructor (){
    super();
    this.style = new Style();
    this.compData = new Transition(DataFn);
    this.d = this.compData.data;
    this.data = this.compData.data;
}
width( p: Pack ): number {
return p.charsWidth(this.data.content,this.style.fontSize, this.style.fontName);
}
height(p: Pack): number {
return p.charsWidth("W",this.style.fontSize, this.style.fontName);
}


draw(p: Pack): boolean {
    if (this.d.highlight == true){
        this.drawHighlight(p);
    }
    this.drawContent(p);
    
    if (this.d.underline == true){
        this.drawUnderline(p);
    }
    if (this.d.overline == true){
        this.drawOverline(p);
    }
    return true;
}
private drawHighlight(p :Pack){
        this.style.fillStyle = this.d.highlightColor;
        p.drawFillRect(
            this.finalX(p),
            this.finalY(p),
            this.width(p),this.height(p),this.style);
}
// private drawUnderline(p :Pack){
//     if (this.d.underline == true){
//         this.style.fillStyle = this.d.underlineColor;
//         this.style.strokeStyle = this.d.underlineColor;
//         this.style.lineWidth = this.d.underlineWidth;
//         p.drawLine(
//             this.finalX(p),
//             this.finalY(p) + this.height(p),
//             this.finalX(p) + this.width(p),
//             this.finalY(p) + this.height(p),
//         this.style);
        
//     }
// }
// private drawOverline(p :Pack){
//     if (this.underline == true){
// let yperc = p.yPerc(this.y);        
//         this.style.fillStyle = this.overlineColor;
//         this.style.strokeStyle = this.overlineColor;
//         this.style.lineWidth = this.overlineWidth;
//         p.drawLine(
//             this.finalX(p),
//             this.finalY(p) ,
//             this.finalX(p) + this.width(p),
//             this.finalY(p),
//         this.style);
        
//     }
// }
private drawContent(p :Pack){
    this.style.fillStyle = this.d.fontColor;
    this.style.strokeStyle = this.d.fontColor;
    this.style.fontSize = this.d.fontSize;

    if (this.d.shadow == true){
        this.style.shadowBlur = this.d.shadowBlur;
        this.style.shadowColor = this.d.shadowColor;
        this.style.shadowOffsetX = this.d.shadowOffsetX;
        this.style.shadowOffsetY = this.d.shadowOffsetY;
    }
    p.drawText(this.d.content,
        this.finalX(p),
        this.finalY(p),
        this.style);
}


update(frame: number, p: Pack): boolean {
this.compData.apply(frame); //--important!!
return true;    
}

private drawBorder(p :Pack){
    if (this.d.showBorder == true){
        this.style.fillStyle = this.d.borderColor;
        this.style.lineWidth = this.d.borderWidth;
        p.drawRect(
            p.xPerc(this.d.x),
            p.yPerc(this.d.y),
            this.width(p),this.height(p),this.style);
    }
}
private drawUnderline(p :Pack){
    if (this.d.underline == true){
        this.style.fillStyle = this.d.underlineColor;
        this.style.strokeStyle = this.d.underlineColor;
        this.style.lineWidth = this.d.underlineWidth;
        p.drawLine(
            p.xPerc(this.d.x),
        p.yPerc(this.d.y) + this.height(p),
        p.xPerc(this.d.x) + this.width(p),p.yPerc(this.d.y)+ this.height(p),
        this.style);
        
    }
}
private drawOverline(p :Pack){
    if (this.d.overline == true){
        this.style.fillStyle = this.d.underlineColor;
        this.style.strokeStyle = this.d.underlineColor;
        this.style.lineWidth = this.d.underlineWidth;
        p.drawLine(
            p.xPerc(this.d.x),
        p.yPerc(this.d.y),
        p.xPerc(this.d.x) + this.width(p),p.yPerc(this.d.y),
        this.style);
        
    }
}

private finalX(p :Pack):number{
let ret = this.d.x;    
ret = p.xPerc(this.d.x);
    switch (this.d.xAlignment) {
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
let ret = this.d.y;    
ret = p.yPerc(this.d.y);
    switch (this.d.yAlignment) {
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
}