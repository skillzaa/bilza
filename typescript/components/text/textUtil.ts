import {Pack,Style,FontFamily} from "../../Bilza.js";

export default class TextUtil  {     
constructor (){}

static contentWidth(p :Pack,content :string,maxDisplayChars :number,fontSize :number,fontFamily :FontFamily):number {
return p.charsWidth(content.substring(0,maxDisplayChars),fontSize,fontFamily);
} 
// static contentHeight(p :Pack,fontSize :number,fontFamily :FontFamily,char="W"):number {
// return p.charsWidth(char,fontSize,fontFamily);
// } 
// static realWidth(p :Pack,content :string,maxDisplayChars :number,fontSize :number,fontFamily :FontFamily,paddingLeft:number,paddingRight :number):number {
// const textWdith = p.charsWidth(content.substring(0,maxDisplayChars),fontSize,fontFamily)
// return textWdith + (paddingLeft + paddingRight); 
// }
 
// static realHeight(p :Pack,fontSize :number,fontFamily :FontFamily,paddingTop:number,paddingBottom :number):number {
// const textHeight = p.charsWidth("W",fontSize,fontFamily)
// return  textHeight + (paddingTop + paddingBottom);
// }
 // =- AM USING drawRect (Empty rect) for border and not line
 static drawBorder(p :Pack,style :Style,x:number,y:number,borderWidth :number,width:number,height:number) :boolean{
if ( borderWidth <= 0 ){return false;}

style.lineWidth = borderWidth;

p.drawRect(
     x - Math.ceil(borderWidth/2),
     y - Math.ceil(borderWidth/2),
     width + (borderWidth),
     height + (borderWidth),
     style);
 return true;
 }
 static drawBg(p :Pack,style :Style,x:number,y:number,width:number,height:number) :boolean{
 p.drawFillRect(
     x,
     y,
     width,
     height,
     style);
 return true;
 } 
 static drawContent(p :Pack,style :Style,content :string,x:number,y:number,maxDisplayChars:number,paddingLeft :number,paddingTop :number,showContent :boolean){
if ( showContent == false){return false;}
 p.drawText(
     content.substring(0,maxDisplayChars),
     x + paddingLeft,
     y + paddingTop,
     style);   
 }
 
 }//class