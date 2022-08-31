import {Pack,BaseComponent,DrawLayer,FontFamily } from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js"; 
import TextTempl from "../templates/textTempl.js";
import TextTheme from "../templates/textTheme.js";
import EntryAni from "../templates/entryAni.js";
import ExitAni from "../templates/exitAni.js";

export default class Text extends BaseComponent {
public content :AniString;
public fontFamily :FontFamily;
public fontSize :AniNumber;
public maxDisplayChars :AniNumber; 
public templ :TextTempl; 
public theme :TextTheme; 
public entryAni :EntryAni; 
public exitAni :ExitAni; 
public fitToWidth :AniBoolean; 
// public fitToHeight :AniBoolean; 
public shrinkToHeight :AniBoolean; 
public respFontSize :AniBoolean; 
/////////////////////////////////////////
constructor (content :string="",colorHax :string="#000000"){
super();  
this.content = new AniString(content);
this.fontSize = new AniNumber(20);
this.maxDisplayChars = new AniNumber(200);
this.fontFamily = FontFamily.Calibri;
this.fitToWidth = new AniBoolean(false); 
this.shrinkToHeight = new AniBoolean(false); 
this.respFontSize = new AniBoolean(true); 
//-----------------------------
this.drawLayer = DrawLayer.MiddleGround;//its default but for safety
//-----------------------------
this.templ = new TextTempl(this);
this.theme = new TextTheme(this);
this.entryAni = new EntryAni(this);
this.exitAni = new ExitAni(this);
//-----------------------------
this.color.set(colorHax); 
}

update(msDelta: number, p: Pack): boolean {
    if (this.fitToWidth.value() == true){
        this.fitToWidthFn(p);
        this.fitToWidth.set(false); // run once
    }    
    if (this.shrinkToHeight.value() == true){
        this.shrinkToHeightFn(p);
        this.shrinkToHeight.set(false); // run once
    }    
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
 } 
//---------------------------------- 
//---------------------------------- 
protected fitToWidthFn(p :Pack):number | null{
//----required with should exclude padding     
 const reqWdInPix = (this.width.value());;
 
 //if not already in sync
 this.style.fontSize = this.fontSize.value(); 
 this.style.fontFamily = this.fontFamily; 
 //-------------check if ok the no need to process
//  const alreadyWidth = p.charsWidth(this.content.value(),this.fontSize.value(),this.style.fontFamily);
//  if (alreadyWidth >= (reqWdInPix) ){
// return null;
//  }
 //--------------------The Process
     for (let i = 1; i < 900; i++) {
     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize

     const newWidthInPix = p.charsWidth(this.content.value(),this.adjestFontSize(i),this.style.fontFamily);
 //----------------------------
     if (newWidthInPix >= (reqWdInPix) ){
         this.fontSize.set(i); 
         this.style.fontSize = i; //important
         return this.fontSize.value();
     } 
 }//for end  
 return null; 
}//dynamic font size
//---------------------------------- 
protected adjestFontSize(n :number):number{
    if (this.canvasWidth == null){
        throw new Error("init error");}    
    if (this.respFontSize.value()== true){
        return (n/1000) * this.canvasWidth;
    } else {
        return n;
    }   
} 
protected shrinkToHeightFn(p :Pack){
if (this.charsWidth==null){throw new Error("init error");
}    
const reqHtInPix =  (this.height.value());
const contentHeight = this.charsWidth("W",this.fontSize.value(),this.style.fontFamily);
if ( contentHeight < reqHtInPix){return true;}
//-----------------------------------------
    for (let i = 300; i > 0; i--) {
    // this.style.fontSize = i; 
    const newHeightInPix = p.charsWidth("W",i,this.style.fontFamily);
//----------------------------
// if (i < 100){debugger;}
    if (newHeightInPix <= reqHtInPix ){
        this.fontSize.set(i); 
        this.style.fontSize = i;//may not be required
        return true;
    }
}
return true;
}
}//class

///////////////////////////////////////////

