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
public fitTextToWidth :boolean;    
 public shrinkTextToHeight :boolean;    

/////////////////////////////////////////
constructor (content :string="",colorHax :string="#000000"){
super();  
this.content = new AniString(content); 
this.fontSize = new AniNumber(50);
this.maxDisplayChars = new AniNumber(200);
this.fontFamily = FontFamily.Calibri;
this.color.set(colorHax); 
//-----------------------------
this.fitTextToWidth = true;
this.shrinkTextToHeight = true;
//-----------------------------
this.drawLayer = DrawLayer.MiddleGround;//its default but for safety
//-----------------------------
}
 
update(msDelta: number, p: Pack): boolean {
if (this.fitTextToWidth == true){
    this.dynamicFontSize(p);    
}     
if (this.shrinkTextToHeight == true){
    this.shrinkToFitMaxHeight(p);    
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
return this.charsWidth("W",this.fontSize.value(),this.fontFamily);
}
//--contentWidth has to return the actual width of the content area. If we use fitTextToWidth in text this method does not need to change it stil is correct just the fontSize change.
contentWidth():number {
if (this.charsWidth == null){throw new Error("init error");}        
return this.charsWidth(this.content.value().substring(0,this.maxDisplayChars.value()),this.fontSize.value(),this.fontFamily)
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

this.style.fontSize = this.fontSize.value();
this.style.fontFamily = this.fontFamily;
    
 p.drawText(
     this.content.value().substring(0,this.maxDisplayChars.value()),
     this.contentX(),
     this.contentY(),
     this.style);   
 } 
//---------------------------------- 
///////////////////////////////////////////
///////////////////////////////////////////
private dynamicFontSize(p :Pack):number | null{
//----required with should exclude padding     
 const reqWdInPix = (p.canvasWidth() /100 * this.width.value());;
 
 //if not already in sync
 this.style.fontSize = this.fontSize.value(); 
 //------------------------------------
     for (let i = 1; i < 900; i++) {
     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize

     const newWidthInPix = p.charsWidth(this.content.value(),i,this.style.fontFamily);
 //----------------------------
     if (newWidthInPix >= (reqWdInPix) ){
         this.fontSize.set(i); 
         this.style.fontSize = i;
         return this.fontSize.value();
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
        this.fontSize.set(i); 
        this.style.fontSize = i;//may not be required
        return true;
    }
}
return true;
}  
}//class
