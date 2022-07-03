import {Pack,BaseComponent,DrawLayer,FontFamily,AniNumber} from "../bilza.js";
import AniString from "../animations/aniString/aniString.js";
/**
 * A totally Non-Openionated Text Swiss kinfe
 */
export default class RawText extends BaseComponent {
public content :AniString;
public fontFamily :FontFamily;
public fontSize :AniNumber;
//--- The only abstraction -- if is a problem even remove this
public maxDisplayChars :AniNumber; 
//--colors
public color :string;
/////////////////////////////////////////
constructor (content :string="",colorHax :string="#000000"){
super();  

this.content = new AniString(content); 

this.fontSize = new AniNumber(50);
this.maxDisplayChars = new AniNumber(200);
this.fontFamily = FontFamily.Calibri;
this.color = colorHax ; 
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
 
heightInPix():number {
if (this.charsWidth == null){throw new Error("init error");}    
//--Abstraction
if (this.maxDisplayChars.value() < 1) {return 0;}
return this.charsWidth("W",this.style.fontSize,this.style.fontFamily)
}

widthInPix():number {
if (this.charsWidth == null){throw new Error("init error");}        
return this.charsWidth(this.content.value().substring(0,this.maxDisplayChars.value()),this.fontSize.value(),this.fontFamily)
}
  
draw(p:Pack):boolean{
this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color;
this.style.fontSize = this.fontSize.value();
this.style.fontFamily = this.fontFamily;
this.drawContent(p);
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
