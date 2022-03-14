import {Component,Pack,Style,Transition} from "../../index.js";
import DataFn , {ObjectData,CalcData} from "./DataFn.js";

export default class BoxSys extends Component {
private compData:Transition<ObjectData>;
style:Style;
d :ObjectData;
data :ObjectData;
calcData :CalcData;
constructor (){
    super();
    this.calcData = new CalcData();
    this.style = new Style();
    this.compData = new Transition(DataFn);
    this.d = this.compData.data;
    this.data = this.compData.data;
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

this.calcData.borderX = this.d.x + this.d.marginWidth; 
this.calcData.borderY = this.d.y + this.d.marginWidth;

this.calcData.paddingX = this.d.x + this.d.marginWidth + this.d.borderWidth; 
this.calcData.paddingY = this.d.y + this.d.marginWidth + this.d.borderWidth;

this.calcData.contentAreaX = this.d.x + this.d.marginWidth + this.d.borderWidth + this.d.paddingWidth; 
this.calcData.contentAreaY = this.d.y + this.d.marginWidth + this.d.borderWidth + this.d.paddingWidth;
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
  console.log("Box system...!!!!!");
return true;    
}
drawContentArea(p :Pack){
this.style.fillStyle = this.d.contentBgColor;
this.style.fontName = this.d.fontFamily;
this.style.fontSize = this.d.fontSize;

p.drawFillRect(
    this.calcData.contentAreaX,
    this.calcData.contentAreaY,
    this.contentWidth(p),
    this.contentHeight(p),
    this.style);
//--these are like 2 fn
this.style.fillStyle = this.d.fontColor;
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
//  return 0;
}
contentWidth( p: Pack ): number {
// it is this.d.fontFamily and not this.styleg.fontFamily    
let r = p.charsWidth(this.d.content,this.d.fontSize, this.d.fontFamily);
// console.log("content width",r);
return r;
// return 50;
}
drawPadding(p :Pack){
this.style.fillStyle = this.d.paddingColor;    
p.drawFillRect(
    this.calcData.paddingX,
    this.calcData.paddingY,
    (this.d.paddingWidth * 2) + this.calcData.contentWidth,
    (this.d.paddingWidth * 2) + this.calcData.contentHeight,
    this.style);
}
// paddingRectangleWidth(paddingX:number,p :Pack):number{
// let ans =  paddingX + (this.d.paddingWidth * 2 ) + this.contentWidth(p);
// return Math.abs(Math.ceil(ans - paddingX));
// }
drawBorder(p :Pack){
this.style.fillStyle = this.d.borderColor;    
p.drawFillRect(
    this.calcData.borderX,
    this.calcData.borderY,
    ((this.d.borderWidth*2)+(this.d.paddingWidth*2)+ this.calcData.contentWidth),
    //this.calcData.contentWidth should be contentHeight
    ((this.d.borderWidth*2)+(this.d.paddingWidth*2)+ this.calcData.contentHeight),
    this.style);
}
drawMargin(p :Pack){
this.style.fillStyle = this.d.marginColor; 
p.drawFillRect(
    this.calcData.marginX,
    this.calcData.marginY,
    ((this.d.marginWidth*2)+(this.d.borderWidth*2)+(this.d.paddingWidth*2)+ this.calcData.contentWidth),
    ((this.d.marginWidth*2)+(this.d.borderWidth*2)+(this.d.paddingWidth*2)+ this.calcData.contentHeight),
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