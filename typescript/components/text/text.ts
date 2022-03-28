import {Component,Pack,FontNames} from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import CalcData from "./calcData.js";

export default class Text extends Component<ObjectData> {

protected calcData :CalcData;
//--This is how to expose another object from inside
public fontFamilyNames :typeof FontNames;

constructor (content :string="",fontColor :string="black",fontSize=40,
msStart=0,msEnd :number = Number.MAX_SAFE_INTEGER,x=50,y=50){

    super(DataFn,msStart,msEnd);
    this.calcData = new CalcData();
    //--Exposes an Enum
    this.fontFamilyNames = FontNames;
    //----get values
    this.d.content = content;
    this.d.x = x;
    this.d.y = y;
    this.d.fontColor = fontColor;
    this.d.fontSize = fontSize;
}
/////////////////////////////////////////
/////////////////////////////////////////
width( p: Pack ): number {
 return  ( (this.d.widthMargin *2) +(this.d.widthPadding *2) + this.calcData.contentWidth);
}
height(p: Pack,perc=0): number {
return  ( (this.d.widthMargin *2) +(this.d.widthPadding *2) + this.calcData.contentHeight);
}

update(ms :number, p: Pack): boolean {
this.compData.apply(ms); //--important!!
//-----update all variables req for draw-and then just draw
this.calcData.marginX = this.d.x;
this.calcData.marginY = this.d.y;
 
this.calcData.borderX = this.d.x + this.d.widthMargin; 
this.calcData.borderY = this.d.y + this.d.widthMargin;
 
this.calcData.paddingX = this.d.x + this.d.widthMargin + this.d.widthBorder; 
this.calcData.paddingY = this.d.y + this.d.widthMargin + this.d.widthBorder;

this.calcData.contentAreaX = this.d.x + this.d.widthMargin + this.d.widthBorder + this.d.widthPadding; 
this.calcData.contentAreaY = this.d.y + this.d.widthMargin + this.d.widthBorder + this.d.widthPadding;
//...
this.calcData.contentWidth = this.contentWidth(p);
this.calcData.contentHeight = this.contentHeight(p);
return true;    
}

draw(p: Pack):boolean {
   this.drawMargin(p); 
   this.drawBorder(p); 
   this.drawPadding(p); 
   this.drawContentArea(p); 
   this.drawText(p); 
   this.drawBoundingRectangle(p);
return true;    
}

drawContentArea(p :Pack){
    if (this.d.flagDrawContentArea == false) {return;}
this.style.fillStyle = this.d.colorContentBg;

p.drawFillRect(
    this.calcData.contentAreaX,
    this.calcData.contentAreaY,
    this.contentWidth(p),
    this.contentHeight(p),
    this.style);

}
drawText(p :Pack){
if (this.d.flagDrawText == false) {return;}
if (this.d.flagTextShadow == true){
    this.style.shadowColor = this.d.textShadowColor;
    this.style.shadowOffsetX = this.d.textShadowOffsetX; 
    this.style.shadowOffsetY = this.d.textShadowOffsetY; 
    this.style.shadowBlur = this.d.textShadowBlur; 
}else {
    // this.style.shadowColor = 0;
    this.style.shadowOffsetX = 0; 
    this.style.shadowOffsetY = 0; 
    this.style.shadowBlur = 0; 
}
    this.style.fillStyle = this.d.fontColor;
    this.style.fontSize = this.d.fontSize;
    this.style.fontName = this.d.fontFamily;
    p.drawText(this.d.content,
        this.calcData.contentAreaX,
        this.calcData.contentAreaY,
        this.style);    
}
contentHeight(p: Pack,perc= 40): number {
 let charHt = p.charsWidth("X",this.d.fontSize, this.d.fontFamily);
//   console.log("contentHeight",charHt);
charHt += (charHt/100 * perc);
return charHt;
}
contentWidth( p: Pack ): number {
// it is this.d.fontFamily and not this.styleg.fontFamily    
let r = p.charsWidth(this.d.content,this.d.fontSize, this.d.fontFamily);
// console.log("content width",r);
return r;
// return 50;
}
drawPadding(p :Pack){
    if (this.d.flagDrawPadding == false) {return;}    
this.style.fillStyle = this.d.colorPadding;    
p.drawFillRect(
    this.calcData.paddingX,
    this.calcData.paddingY,
    (this.d.widthPadding * 2) + this.calcData.contentWidth,
    (this.d.widthPadding * 2) + this.calcData.contentHeight,
    this.style);
}

drawBorder(p :Pack){
    if (this.d.flagDrawBorder == false) {return;}    
this.style.fillStyle = this.d.colorBorder;    
p.drawFillRect(
    this.calcData.borderX,
    this.calcData.borderY,
    ((this.d.widthBorder*2)+(this.d.widthPadding*2)+ this.calcData.contentWidth),
    //this.calcData.contentWidth should be contentHeight
    ((this.d.widthBorder*2)+(this.d.widthPadding*2)+ this.calcData.contentHeight),
    this.style);
}
drawMargin(p :Pack){
    //it does not get drawn but is still counted in the calculations
    if (this.d.flagDrawMargin == false) {return;}    
this.style.fillStyle = this.d.colorMargin; 
this.style.strokeStyle = this.d.colorMargin; 
this.style.lineWidth = this.d.widthMargin; 
p.drawFillRect(
    this.calcData.marginX,
    this.calcData.marginY,
    ((this.d.widthMargin*2)+(this.d.widthBorder*2)+(this.d.widthPadding*2)+ this.calcData.contentWidth),
    ((this.d.widthMargin*2)+(this.d.widthBorder*2)+(this.d.widthPadding*2)+ this.calcData.contentHeight),
    this.style);
}

drawBoundingRectangle(p :Pack,color="red",lineWidth=4){
if(this.d.flagDrawBoundingRectangle == false){return;}

if (this.d.flagBoundingRectShadow == true){
    this.style.fillStyle = this.d.colorBoundingRect; //not a mistake
    this.style.strokeStyle = this.d.colorBoundingRect;//not a mistake
    this.style.shadowColor = this.d.boundingRectShadowColor;
    this.style.shadowOffsetX = this.d.boundingRectShadowOffsetX; 
    this.style.shadowOffsetY = this.d.boundingRectShadowOffsetY; 
    this.style.shadowBlur = this.d.boundingRectShadowBlur; 
}else {
    this.style.shadowOffsetX = 0; 
    this.style.shadowOffsetY = 0; 
    this.style.shadowBlur = 0; 
}    
    p.drawRect(
        this.d.x - (this.d.boundingRectXYExtra[0]/2) ,
        this.d.y - (this.d.boundingRectXYExtra[1]/2),
        this.width(p) + this.d.boundingRectXYExtra[0],
        this.height(p) + this.d.boundingRectXYExtra[1],
        this.style
    );
} 

checkCollision(x: number, y: number, p: Pack): boolean {
if (x > this.d.x && x < this.width(p)){
    if (y > this.d.y && y < this.height(p)){
        return true;
    }
}
return false;
}
}