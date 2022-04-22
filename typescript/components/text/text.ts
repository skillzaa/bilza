import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import {XAlignment} from "./xAlignment.js";
import {YAlignment} from "./yAlignment.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";

export default class Text extends Component<ObjectData> {
    xAlignmentOptions:typeof XAlignment;   
    yAlignmentOptions:typeof YAlignment;  
 
//Args==> content-color-x-y-widthPerc-heightPerc
constructor (startTimeSeconds :number=0,endTimeSeconds:number=Number.MAX_SAFE_INTEGER,content :string="",color :string="black",x:number=0,y:number =0, widthPercent:number=10,heightPercent:number=10){
    super(DataFn);
    this.xAlignmentOptions = XAlignment;
    this.yAlignmentOptions = YAlignment;
    
    this.setStartTime(startTimeSeconds * 1000); //into mili sec
    this.setEndTime(endTimeSeconds * 1000);

    this.d.content = content;
    this.d.x = x;
    this.d.y = y;
    //---colors
    this.d.color = color;
    this.d.colorBorder = color;
    this.d.colorBg = lightenDarkenColor(color,10);

    this.d.widthPercent = widthPercent;
    this.d.heightPercent = heightPercent;
    //move to base comp class 
    this.drawLayer = DrawLayer.MiddleGround;
}
width(p:Pack):number {
return (p.textWidth(this.d.content.substring(0,this.d.maxDisplayChars),this.style) + (this.d.padding * 2)+(this.d.margin * 2)+(this.d.border * 2) );
}
height(p:Pack):number {
return (p.textWidth("W",this.style)+ (this.d.padding * 2)+(this.d.margin * 2)+(this.d.border * 2) );
}

update(msDelta: number, p: Pack): boolean {
//--on every update setFontSize is must since the user can change width and hight Perc any time. Bilza lib is responsive.
//--Also to use text comp update one has to use super.update() when overwride.
if (this.d.autoScaleFontSize == true){
    this.setFontSize(p);
}
    return true;
}

draw(p:Pack):boolean{
if (this.d.flagDrawBg == true){
    this.drawBg(p);
}
if (this.d.flagDrawBorder == true){
this.drawBorder(p);
}

this.drawContent(p);
return true;
} 
public setFontSize(p :Pack):number{
let reqWd = (p.canvasWidth() /100 * this.d.widthPercent);
let reqHt = (p.canvasWidth() /100 * this.d.heightPercent);
for (let i = 1; i < 300; i++) {
    this.style.fontSize = i; 
    let newWidth = this.width(p);
    let newHeight = this.height(p);
//---which Ever is reached first
    if (newWidth >= reqWd || newHeight >= reqHt){
        return this.style.fontSize;
    }   
}

//--for testing

return this.style.fontSize;
}
// =- AM USING drawRect (Empty rect) for border and not line
private drawBorder(p :Pack) :boolean{
this.shadowsOff();
if (this.d.flagDim == true){
    this.style.strokeStyle = this.d.colorDimBorder;
} else {
    this.style.fillStyle = this.d.colorBorder;
    this.style.strokeStyle = this.d.colorBorder;
}          
this.style.lineWidth = this.d.border;    

p.drawRect(
    this.getX(p) + this.d.margin,
    this.getY(p) + this.d.margin,
    this.width(p),
    this.height(p),
    this.style);
return true;
}
private drawBg(p :Pack) :boolean{
    if (this.d.flagBgShadow == true){
        this.shadowsOn();
    } else {
        this.shadowsOff();
    }   
if (this.d.flagDim == true){
    this.style.fillStyle = this.d.colorDimBg;
} else {
    this.style.fillStyle = this.d.colorBg;
    this.style.strokeStyle = this.d.colorBg;
}       
p.drawFillRect(
    this.getX(p) + this.d.margin,
    this.getY(p) + this.d.margin,
    this.width(p),
    this.height(p),
    this.style);
return true;
} 
private drawContent(p :Pack){
if (this.d.flagTextShadow == true){
    this.style.shadowBlur = this.d.shadowBlur;
    this.style.shadowOffsetX = this.d.shadowOffsetX;
    this.style.shadowOffsetY = this.d.shadowOffsetY;
    this.style.shadowColor = this.d.colorShadow;
} else {
    this.shadowsOff();
}       
if (this.d.flagDim == true){
    this.style.fillStyle = this.d.colorDim;    
    this.style.strokeStyle = this.d.colorDim;      
} else {
    this.style.fillStyle = this.d.color;    
    this.style.strokeStyle = this.d.color;      
}   
p.drawText(this.d.content.substring(0,this.d.maxDisplayChars),
    this.getX(p) + (this.d.margin + this.d.border + this.d.padding),
    this.getY(p) + (this.d.margin + this.d.border + this.d.padding),
    this.style);
    
}
private getX(p :Pack):number{
let x =   p.xPerc(this.d.x);  
switch (this.d.xAlignment) {
    case this.xAlignmentOptions.Left:
        break;
    case this.xAlignmentOptions.Mid:
         x = x - (this.width(p)/2);
        break;
    
    case this.xAlignmentOptions.Right:
        x = x - this.width(p);
        break;
}
return x ;
}
private getY(p :Pack):number{
let y =   p.yPerc(this.d.y);  
switch (this.d.yAlignment) {
    case this.yAlignmentOptions.Top:
        break;
    case this.yAlignmentOptions.Mid:
         y = y - (this.height(p)/2);
        break;
    
    case this.yAlignmentOptions.Bot:
        y = y - this.height(p);
        break;
}
return y ;
}

}//class