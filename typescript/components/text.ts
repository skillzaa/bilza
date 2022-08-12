import { Pack,DrawLayer,BaseComponent,FontFamily} from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";

/**
 * 19-july-2022 : There is a lot fo confusion between "rawText" and "text". Here is a clear position:
 * RawText will set text size as per fontSize and will not care for width and height (they are not implemented- however contentWidth and contentHeight both work as same).
 * In "Text" the size of the text will be decided by width and height (the height in this case is more like a maXheight).
 * --------
 * Further:
 * -- To aviod confusion let there be no fontSize in Text component.
 * -- In Text remove fitTextToWidth and shrinkTextToHeight since if that is the main task of "Text" component then why to keep it optional.
 * -- To remove fontSize use rawText as "Adaptor" OR create a NEW CLASS.
 */ 

export default class Text extends BaseComponent {
public content :AniString;
public maxDisplayChars :AniNumber;   
public fontFamily :FontFamily;  
//Private and a simple number
private fontSize:number;
///////////////////////////////////////// 
constructor (content :string="",colorHax :string="#000000"){
super();
this.content = new AniString(content); 
this.maxDisplayChars = new AniNumber(200);
this.fontFamily = FontFamily.Calibri;
this.color.set(colorHax); 
//-----------------------------
this.drawLayer = DrawLayer.MiddleGround;//its default but for safety
//-----------------------------
this.fontSize = 50;
this.height.set(500);

} 

update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
// this.fontSize.update(msDelta); 
this.content.update(msDelta); 
this.maxDisplayChars.update(msDelta);
///////////////
this.dynamicFontSize(p);    
this.shrinkToFitMaxHeight(p);    
super.update(msDelta,p);//--keep it down here so that Loc is updated late;
return true;
}
contentHeight():number {
if (this.charsWidth == null){throw new Error("init error");}    
//--Abstraction
if (this.maxDisplayChars.value() < 1) {return 0;}
return this.charsWidth("W",this.fontSize,this.fontFamily);
}
//--contentWidth has to return the actual width of the content area. If we use fitTextToWidth in text this method does not need to change it stil is correct just the fontSize change.
contentWidth():number {
if (this.charsWidth == null){throw new Error("init error");}        
return this.charsWidth(this.content.value().substring(0,this.maxDisplayChars.value()),this.fontSize,this.fontFamily)
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

this.style.fontSize = this.fontSize;
this.style.fontFamily = this.fontFamily;
    
 p.drawText(
     this.content.value().substring(0,this.maxDisplayChars.value()),
     this.contentX(),
     this.contentY(),
     this.style);   
 } 
///////////////////////////////////////////
///////////////////////////////////////////
private dynamicFontSize(p :Pack):number | null{
//----required with should exclude padding     
 const reqWdInPix = (p.canvasWidth() /100 * this.width.value());;
 
 //if not already in sync
 this.style.fontSize = this.fontSize; 
 //------------------------------------
     for (let i = 1; i < 900; i++) {
     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize

     const newWidthInPix = p.charsWidth(this.content.value(),i,this.style.fontFamily);
 //----------------------------
     if (newWidthInPix >= (reqWdInPix) ){
         this.fontSize = i; 
         this.style.fontSize = i;
         return this.fontSize;
     } 
 }//for end  
 return null; 
}//dynamic font size

private shrinkToFitMaxHeight(p :Pack):boolean{
if (this.charsWidth==null){throw new Error("init error");
}    
const reqHtInPix =  (p.canvasHeight() /100 * this.height.value());
// const reqHtInPixwoPad = reqHtInPix - (this.paddingTop.value() + this.paddingBottom.value()); 
const contentHeight = this.charsWidth("W",this.style.fontSize,this.style.fontFamily);
if ( contentHeight < reqHtInPix){return true;}
//-----------------------------------------
    for (let i = 300; i > 0; i--) {
    // this.style.fontSize = i; 
    const newHeightInPix = p.charsWidth("W",i,this.style.fontFamily);
//----------------------------
// if (i < 100){debugger;}
    if (newHeightInPix <= reqHtInPix ){
        this.fontSize = i; 
        this.style.fontSize = i;//may not be required
        return true;
    }
}
return true;
}  
}//class

 