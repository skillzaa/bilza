import {Component,Pack,Style,Transition } from "../../bilzaa2d/index.js";

import DataFn , {ObjectData} from "./DataFn.js";

export default class Text extends Component {
    
    private compData:Transition<ObjectData>;
    styleText:Style;
    styleBackground:Style;
    styleBorder:Style;
    styleUnderline:Style;
    styleOverline:Style;
    d :ObjectData;
constructor (){
    super();
    this.styleText = new Style();
    this.styleBackground = new Style();
    this.styleBorder = new Style();
    this.styleUnderline = new Style();
    this.styleOverline = new Style();
    this.compData = new Transition(DataFn);
    this.d = this.compData.data;
}
width( p: Pack ): number {
return p.charsWidth(this.compData.data.content,this.styleText.fontSize, this.styleText.fontName);
}
height(p: Pack): number {
return p.charsWidth("W",this.styleText.fontSize, this.styleText.fontName);

}
draw(p: Pack): boolean {
    this.drawBackground(p);
    this.drawBorder(p);
    // p.drawBackground("green");
    this.drawContent(p);
    this.drawUnderline(p);
    this.drawOverline(p);
    return true;
}
update(frame: number, p: Pack): boolean {
this.compData.apply(frame); //--important!!
return true;    
}
private drawBackground(p :Pack){
    if (this.d.showBackground == true){
        this.styleBackground.fillStyle = this.d.backgroundColor;
        p.drawFillRect(
            p.xPerc(this.d.x),
            p.yPerc(this.d.y),
            this.width(p),this.height(p),this.styleBackground);
    }
}
private drawBorder(p :Pack){
    if (this.d.showBorder == true){
        this.styleBorder.fillStyle = this.d.borderColor;
        this.styleBorder.lineWidth = this.d.borderWidth;
        p.drawRect(
            p.xPerc(this.d.x),
            p.yPerc(this.d.y),
            this.width(p),this.height(p),this.styleBorder);
    }
}
private drawUnderline(p :Pack){
    if (this.d.underline == true){
        this.styleUnderline.fillStyle = this.d.underlineColor;
        this.styleUnderline.strokeStyle = this.d.underlineColor;
        this.styleUnderline.lineWidth = this.d.underlineWidth;
        p.drawLine(
            p.xPerc(this.d.x),
        p.yPerc(this.d.y) + this.height(p),
        p.xPerc(this.d.x) + this.width(p),p.yPerc(this.d.y)+ this.height(p),
        this.styleUnderline);
        
    }
}
private drawOverline(p :Pack){
    if (this.d.overline == true){
        this.styleUnderline.fillStyle = this.d.underlineColor;
        this.styleUnderline.strokeStyle = this.d.underlineColor;
        this.styleUnderline.lineWidth = this.d.underlineWidth;
        p.drawLine(
            p.xPerc(this.d.x),
        p.yPerc(this.d.y),
        p.xPerc(this.d.x) + this.width(p),p.yPerc(this.d.y),
        this.styleUnderline);
        
    }
}
private drawContent(p :Pack){
    this.styleText.fillStyle = this.d.fontColor;
    this.styleText.strokeStyle = this.d.fontColor;
    this.styleText.fontSize = this.d.fontSize;
    this.styleText.fontName = this.d.fontName;

    p.drawText(this.d.content,
        p.xPerc(this.d.x),
        p.yPerc(this.d.y),
        this.styleText);
   
}
}