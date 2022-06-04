
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import {Pack,FontFamily,Style} from "../../Bilza.js";

export default class TextBase  {
public content :string;
public fontFamily :string;
public paddingLeft :number;
public paddingRight :number;
public paddingTop :number;
public paddingBottom :number;
public border :number;
public maxDisplayChars :number; //implement it


public x :number;
public y :number;
public fontSize :number;
public color :string;
public colorBorder :string;
public colorBg :string;
     
 //--- No abstractions But flags are ok
public showContent :boolean;
public showBg :boolean;
public showTextShadow :boolean;
public showBorderShadow :boolean; 
public showBgShadow :boolean; 
//---hidden mechnics
private widthForInternalUse :number;
private heightForInternalUse :number;     
     
constructor (content :string="",colorHax :string="#000000",fontSize :number=30,x :number=0,y :number=0){
this.x = x;
this.y = y;
this.content = content ; 
this.fontSize = fontSize;
this.fontFamily = FontFamily.Calibri;
this.paddingLeft = 0;
this.paddingRight = 0;
this.paddingTop = 0;
this.paddingBottom = 0;
this.border = 0;
//---------------------------     
this.colorBorder = colorHax;
this.colorBg = lightenDarkenColor(colorHax,225);
this.color = colorHax ; 
//-----------------------------
this.showContent = true;
this.showBg = false;
this.showTextShadow = false;
this.showBgShadow = false;
this.showBorderShadow = false;
this.maxDisplayChars = 200;
//---communication item
this.widthForInternalUse = 0;
this.heightForInternalUse = 0;
}

width(p :Pack):number {
const textWdith = p.charsWidth(this.content,this.fontSize,this.fontFamily)
this.widthForInternalUse = textWdith + (this.paddingLeft + this.paddingRight); 
return this.widthForInternalUse
}
 
height(p :Pack):number {
const textHeight = p.charsWidth("W",this.fontSize,this.fontFamily)
this.heightForInternalUse =  textHeight + (this.paddingTop + this.paddingBottom);
return this.heightForInternalUse;
}
 // =- AM USING drawRect (Empty rect) for border and not line
 private drawBorder(p :Pack,style :Style) :boolean{
if (this.border <= 0 ){return false;}
 p.drawRect(
     this.x - (this.border),
     this.y - (this.border),
     this.widthForInternalUse,
     this.heightForInternalUse,
     style);
 return true;
 }
 public drawBg(p :Pack,style :Style) :boolean{
 p.drawFillRect(
     this.x,
     this.y,
     this.widthForInternalUse,
     this.heightForInternalUse,
     style);
 return true;
 } 
 public drawContent(p :Pack,style :Style){
if (this.showContent == false){return false;}
 p.drawText(
     this.content.substring(0,this.maxDisplayChars),
     this.x + (this.paddingLeft),
     this.y + (this.paddingTop),
     style);   
 }
 
 }//class