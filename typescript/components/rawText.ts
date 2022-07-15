import {Pack,BaseComponent,DrawLayer,FontFamily,AniNumber,AniColor,AniString } from "../bilza.js";
 
/**
 * A totally Non-Openionated Text Class for others to inheret from.
 *  
 */
export default class RawText extends BaseComponent {
public content :AniString;
public fontFamily :FontFamily;
//--15-july-2022 : no need for this use width as fontSize
public fontSize :AniNumber;
//--- The only abstraction -- if is a problem even remove this
public maxDisplayChars :AniNumber; 
/////////////////////////////////////////
constructor (content :string="",colorHax :string="#000000"){
super();  
this.content = new AniString(content); 
this.fontSize = new AniNumber(50);
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
return this.charsWidth("W",this.fontSize.value(),this.fontFamily);
}

contentWidth():number {
if (this.charsWidth == null){throw new Error("init error");}        
return this.charsWidth(this.content.value().substring(0,this.maxDisplayChars.value()),this.fontSize.value(),this.fontFamily)
}
   

draw(p:Pack):boolean{
this.preDraw(p);
//--------------
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value();     

this.style.fontSize = this.fontSize.value();
this.style.fontFamily = this.fontFamily;

this.drawContent(p);

this.postDraw(p);

return true;
} 

drawContent(p :Pack){
 p.drawText(
     this.content.value().substring(0,this.maxDisplayChars.value()),
     this.xAligned(),
     this.yAligned(),
     this.style);   
 } 
//---------------------------------- 
}//class
