import Pack from "../../pack/pack.js";
import CompEngine from "../../compEngine/compEngine.js";
import TextDb from "./textDb.js";
import {FontFamily}  from "../../pack/fontFamily.js";
import {AniNumber,AniString,AniBoolean,AniColor,} from "../../animations/animations.js";
import toPerc from "../../functions/toPerc.js";
 
// import TextTempl from "./textTempl.js";
// import TextTheme from "./textTheme.js";
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
export default class Text extends CompEngine {
private _oldWidth :null|number;
private _oldHeight :null|number;
public heightFineTune :number;
//-----------------------------
public content :AniString;
public fontFamily :FontFamily;
public maxDisplayChars :AniNumber; 
public fitToWidth :AniBoolean; 

/////////////////////////////////////////
// public templ :TextTempl;  
// public theme :TextTheme; 
// public static compClassName:string = "Text";

/////////////////////////////////////////
constructor (propsDb :TextDb ,pack :Pack){ 
    super(propsDb,pack);
//--------------------------------------------------------
this.content = new AniString(propsDb.content);
this.maxDisplayChars = new AniNumber(propsDb.maxDisplayChars);
this.fontFamily = propsDb.fontFamily; //waoooooooo
this.fitToWidth = new AniBoolean(propsDb.fitToWidth); 
//-----------------------------
this.drawLayer = 2;//its default but for safety
//-----------------------------
// this.templ = new TextTempl(this);
// this.theme = new TextTheme(this);
//-----------------------------
this._oldWidth = null;
this._oldHeight = null;
this.heightFineTune = 5;
//-----------------------------
this.color.set( propsDb.color.value() ); 
// this.width.set(20); --BIG MISTAKE THIS WILL OVER WRITE THE DB VALUES
// this.height.set(10);
}

update(msDelta: number, p: Pack): boolean {
 
super.update(msDelta,p);
this.content.update(msDelta); 
this.maxDisplayChars.update(msDelta);
this.fitToWidth.update(msDelta);
return true;
}
 
contentHeight():number {
let heightInPic =  this.charsWidth(
            "W",
            this.getFontSize(),
            this.fontFamily);
return toPerc(heightInPic, this.canvasHeight() );    
}
//--contentWidth has to return the actual width of the content area. If we use fitTextToWidth in text this method does not need to change it stil is correct just the fontSize change.
contentWidth():number {
let widthInPix = this.charsWidth(
    this.content.value().substring(0,this.maxDisplayChars.value()),
    this.getFontSize(),
    this.fontFamily);
return toPerc(widthInPix,this.canvasWidth());        
}
   
//-ideal draw function
draw(p:Pack):boolean{
    this.preDraw(p);
    this.drawContent(p);
    this.postDraw(p);
    // console.log(p.measureText(this.content.value(), this.style));
return true;
} 

drawContent(p :Pack){
this.style.fillStyle = this.color.value();    
this.style.strokeStyle = this.color.value();     

this.style.fontSize = this.getFontSize();
// this.style.fontSize = this.height.value();
this.style.fontFamily = this.fontFamily;
    
 p.drawText(
     this.content.value().substring(0,this.maxDisplayChars.value()),
     this.contentX(),
     this.contentY(),
     this.style);   
 } 

//---------------------------------- 
private getFontSize():number{
    if (this.fitToWidth.value() == true){
        if (this.hasWidthChanged() == true){
            //--dont run it on every step
            return this.widthFontSize();
        }
    }     
return this.heightFontSize();
}
//--check again --666 error
protected widthFontSize( ):number{
//----required width should exclude padding     
//valuePer() is percentage and value = pix
 const reqWdInPix = (this.width.value()); 
 
 //if not already in sync
 this.style.fontSize = this.getFontSize(); 
 this.style.fontFamily = this.fontFamily; 
 //--------------------The Process
     for (let i = 1; i < 900; i++) {
     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize
     const newWidthInPix = this.charsWidth(this.content.value(), i ,this.style.fontFamily);
 //----------------------------
     if (newWidthInPix >= (reqWdInPix) ){
        //  this._fontSize = i; 
        //  this.style.fontSize = i; //important
         return i; ///is this so simple----
     } 
    }//for end  
return 666;     
}//dynamic font size

private heightFontSize():number{
return this.height.value() + 
( (this.height.value()/100) * this.heightFineTune);
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
}//class
///////////////////////////////////////////

