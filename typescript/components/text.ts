import {Pack,BaseComponent,DrawLayer,FontFamily } from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js"; 
/*
 * A totally Non-Openionated Text Class for other Text components to inheret from.
 */
export default class Text extends BaseComponent {
public content :AniString;
public fontFamily :FontFamily;
public fontSize :AniNumber;
//--15-july-2022 : no need for this use width as fontSize
// private fontSize :AniNumber;
//--- The only abstraction -- if is a problem even remove this
public maxDisplayChars :AniNumber; 
/////////////////////////////////////////
constructor (content :string="",colorHax :string="#000000"){
super();  
this.content = new AniString(content);
this.fontSize = new AniNumber(20);
this.maxDisplayChars = new AniNumber(200);
this.fontFamily = FontFamily.Calibri;
this.color.set(colorHax); 
//-----------------------------
this.drawLayer = DrawLayer.MiddleGround;//its default but for safety
//-----------------------------
}

update(msDelta: number, p: Pack): boolean {
super.update(msDelta,p);
this.fontSize.update(msDelta); 
this.content.update(msDelta); 
this.maxDisplayChars.update(msDelta);
return true;
}
 
contentHeight():number {
if (this.charsWidth == null){throw new Error("init error");}    
//--Abstraction
if (this.maxDisplayChars.value() < 1) {return 0;}
return this.charsWidth("W",this.adjestFontSize(this.fontSize.value()),this.fontFamily);
}
//--contentWidth has to return the actual width of the content area. If we use fitTextToWidth in text this method does not need to change it stil is correct just the fontSize change.
contentWidth():number {
if (this.charsWidth == null){throw new Error("init error");}        
return this.charsWidth(this.content.value().substring(0,this.maxDisplayChars.value()),this.adjestFontSize(this.fontSize.value()),this.fontFamily)
}
   
//-ideal draw function
draw(p:Pack):boolean{
this.preDraw(p);
this.drawContent(p);
this.postDraw(p);
return true;
} 

drawContent(p :Pack){
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value();     

this.style.fontSize = this.adjestFontSize(this.fontSize.value());
this.style.fontFamily = this.fontFamily;
    
 p.drawText(
     this.content.value().substring(0,this.maxDisplayChars.value()),
     this.contentX(),
     this.contentY(),
     this.style);   
console.log("fontSize", this.fontSize.value());     
console.log("adjested", this.adjestFontSize(this.fontSize.value()));     
 } 
//---------------------------------- 
//---------------------------------- 
}//class