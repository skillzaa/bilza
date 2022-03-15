import {Component,Pack,Style,Transition} from "../../index.js";
import DataFn , {ObjectData,CalcData} from "./DataFn.js";
import TextTemplates from "./textTemplates.js";

export default class Text extends Component {
private compData:Transition<ObjectData>;
style:Style;
d :ObjectData;
data :ObjectData;
// templates :TextTemplates;
protected calcData :CalcData;

constructor (content="text.."){
    super();
    this.calcData = new CalcData();
    // this.templates = new TextTemplates();
    //..............
    this.style = new Style();
    this.compData = new Transition(DataFn);
    this.d = this.compData.data;
    this.d.content = content;
    this.data = this.compData.data;
}
static templates():TextTemplates{
    let r =  new TextTemplates();
    return r;
}
width( p: Pack ): number {
 return  0;
}
height(p: Pack,perc=0): number {
 return 0;
}

addTransition(frameStart:number){
return this.compData.add(frameStart);
}
update(frame: number, p: Pack): boolean {
this.compData.apply(frame); //--important!!
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
  console.log("Box system...!!!!!");
return true;    
}
drawContentArea(p :Pack){
    if (this.d.flagDrawContentArea == false) {return;}
this.style.fillStyle = this.d.colorContentBg;
// this.style.fillStyle = "pink";
// this.style.fontName = this.d.fontFamily;
// this.style.fontSize = this.d.fontSize;

p.drawFillRect(
    this.calcData.contentAreaX,
    this.calcData.contentAreaY,
    this.contentWidth(p),
    this.contentHeight(p),
    this.style);

}
drawText(p :Pack){
if (this.d.flagDrawText == false) {return;}

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

// drawBoundingRectangle(p :Pack){
//     this.style.fillStyle = "blue"; //change later
//     this.style.strokeStyle = "blue";//change later
//     this.style.lineWidth = 1;//change later
//     p.drawRect(
//         p.xPerc(this.d.x) ,
//         p.xPerc(this.d.y) ,
//         this.width(p),
//         this.height(p),
//         this.style
//     );
// }    
   
}