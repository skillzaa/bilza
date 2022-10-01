import Component from "../../component/component.js";
import Pack from "../../pack/pack.js";
import {FontFamily}  from "../../pack/fontFamily.js";
import {AniNumber,AniString,AniBoolean,AniColor,} from "../../animations/animations.js"; 



import TextTempl from "./textTempl.js";
import TextTheme from "./textTheme.js";
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export default class Text extends Component {
private _oldWidth :null|number;
private _oldHeight :null|number;

public content :AniString;
public fontFamily :FontFamily;
public fontSize :AniNumber;
public maxDisplayChars :AniNumber; 
public fitToWidth :AniBoolean; 
public fitToHeight :AniBoolean; 
public respFontSize :AniBoolean; 
/////////////////////////////////////////
public templ :TextTempl; 
public theme :TextTheme;
// public static compClassName:string = "Text";
/////////////////////////////////////////
constructor (startTime :number,endTime :number,canvasWidth :number,canvasHeight :number,content :string="",colorHax :string="#000000"){

    super(startTime,endTime,canvasWidth,canvasHeight);  

this.content = new AniString(content);
this.fontSize = new AniNumber(20);
this.maxDisplayChars = new AniNumber(1000);
this.fontFamily = FontFamily.Calibri;
this.fitToWidth = new AniBoolean(false); 
this.fitToHeight = new AniBoolean(false); 
this.respFontSize = new AniBoolean(true); 
//-----------------------------
this.drawLayer = 2;//its default but for safety
//-----------------------------
this.templ = new TextTempl(this);
this.theme = new TextTheme(this);
//-----------------------------
this._oldWidth = null;
this._oldHeight = null;
//-----------------------------
this.color.set(colorHax); 
this.width.set(300);
this.height.set(300);
}

update(msDelta: number, p: Pack): boolean {
    /////////////////////////////////////////
    if (this.fitToHeight.value() == true){
        if (this.hasHeightChanged()==true){
            this.fitToHeightFn(p);
        }
    } else {
        this.shrinkToHeightFn(p);
    }
    /////////////////////////////////////////
    if (this.fitToWidth.value() == true){
        if (this.hasWidthChanged() == true){
            //--dont run it on every step
            this.fitToWidthFn(p);
        }
    }else {
        this.shrinkToWidthFn(p);
    }   
    ////////-------------------------
    
super.update(msDelta,p);
//--Disable fontSize --update it internally
if (this.fitToWidth.value() == false && this.fitToHeight.value()==false){
    this.fontSize.update(msDelta); 
}
this.content.update(msDelta); 
this.maxDisplayChars.update(msDelta);
this.respFontSize.update(msDelta);
this.fitToWidth.update(msDelta);
this.fitToHeight.update(msDelta);
return true;
}
 
contentHeight():number {
if (this.charsWidth == null){throw new Error("init error");}    
//--Abstraction
if (this.maxDisplayChars.value() < 1) {return 0;}
// return this.charsWidth("W",this.adjestFontSize(this.fontSize.value()),this.fontFamily);
return this.charsWidth("W",this.fontSize.value(),this.fontFamily);
}
//--contentWidth has to return the actual width of the content area. If we use fitTextToWidth in text this method does not need to change it stil is correct just the fontSize change.
contentWidth():number {
if (this.charsWidth == null){throw new Error("init error");}        
// return this.charsWidth(this.content.value().substring(0,this.maxDisplayChars.value()),this.adjestFontSize(this.fontSize.value()),this.fontFamily)
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

// this.style.fontSize = this.adjestFontSize(this.fontSize.value());
this.style.fontSize = this.fontSize.value();
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
 const reqWdInPix = (this.width.value());
 
 //if not already in sync
 this.style.fontSize = this.fontSize.value(); 
 this.style.fontFamily = this.fontFamily; 

 //--------------------The Process
     for (let i = 1; i < 900; i++) {
     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize
     const newWidthInPix = p.charsWidth(this.content.value(), i ,this.style.fontFamily);
 //----------------------------
     if (newWidthInPix >= (reqWdInPix) ){
         this.fontSize.set(i); 
         this.style.fontSize = i; //important
         return this.fontSize.value();
     } 
 }//for end  
 return null; 
}//dynamic font size

protected fitToHeightFn(p :Pack):number | null{
//----required with should exclude padding     
 const reqHtInPix = (this.height.value())* 1.12;
 
 this.fontSize.set(reqHtInPix); 
 this.style.fontSize = this.fontSize.value(); 
 return reqHtInPix;
//  if not already in sync
//  this.style.fontSize = this.fontSize.value(); 
//  this.style.fontFamily = this.fontFamily; 

//  //--------------------The Process
//      for (let i = 1; i < 900; i++) {
//      //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize
//      const newHeightInPix = p.charsWidth( "Xi", i , this.style.fontFamily);
//  //----------------------------
//      if (newHeightInPix >= (reqHtInPix) ){
//          this.fontSize.set(i); 
//          this.style.fontSize = i; //important
//          return this.fontSize.value();
//      } 
//  }//for end  
//  return null; 
}//fitToHeight
//---------------------------------- 
// protected adjestFontSize(n :number):number{
//     if (this.canvasWidth == null){
//         throw new Error("init error");}    
//     if (this.respFontSize.value()== true){
//         return (n/1000) * this.canvasWidth();
//     } else {
//         return n;
//     }   
// } 
protected shrinkToHeightFn(p :Pack){
if (this.charsWidth==null){throw new Error("init error");
} 
//--must sync Both
this.style.fontFamily = this.fontFamily;

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
protected shrinkToWidthFn(p :Pack){
if (this.charsWidth==null){throw new Error("init error");
}    
//--must sync Both
this.style.fontFamily = this.fontFamily;
this.style.fontSize = this.fontSize.value();
const reqWdInPix =  (this.width.value());
//--why not
const contentWidth = this.charsWidth(this.content.value() , this.fontSize.value(),this.style.fontFamily);

if ( contentWidth < reqWdInPix){return true;}
//-----------------------------------------
    for (let i = 400; i > 0; i--) {
    // this.style.fontSize = i; 
    const newWidthInPix = p.charsWidth(this.content.value(),i,this.style.fontFamily);
//----------------------------
// if (i < 75){debugger;}
    if (newWidthInPix <= reqWdInPix ){
        this.fontSize.set(i); 
        this.style.fontSize = i;//may not be required
        return true;
    }
}
return true;
}

private hasWidthChanged():boolean{
//--first time    
        if(this._oldWidth == null){
            this._oldWidth = this.width.value();
            return true;
        }else {
            if (this._oldWidth == this.width.value()){
                return false;
            }else {
                this._oldWidth = this.width.value();
                return true;
            }
        }
}
private hasHeightChanged():boolean{
//--first time    
        if(this._oldHeight == null){
            this._oldHeight = this.height.value();
            return true;
        }else {
            if (this._oldHeight == this.height.value()){
                return false;
            }else {
                this._oldHeight = this.height.value();
                return true;
            }
        }
}

}//class

///////////////////////////////////////////

