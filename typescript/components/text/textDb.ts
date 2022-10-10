import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Text from "./text.js";
import Pack from "../../pack/pack.js";
import {AniNumberDb,AniColorDb,AniStringDb,AniBooleanDb} from "../../animations/animations.js";
import IText from "./IText.js";
import {FontFamily}  from "../../pack/fontFamily.js";
import toPerc from "../../functions/toPerc.js";


export default class TextDb extends CompDb implements IText {
public content :AniStringDb;
public fontFamily :FontFamily;
public maxDisplayChars :AniNumberDb; 
public fitToWidth :AniBooleanDb; 
//----------------------------------------
private _oldWidth :null|number;
private _oldHeight :null|number;
public heightFineTune :number;

//----------------------------------------
private charsWidth : (chars:string,fontSize:number,fontName:string)=> number;

constructor(startTime :number, endTime :number ,insertAction :"add"|"append" | "alwaysOn",canvasWidth :number,canvasHeight :number,
charsWidth : (chars:string,fontSize:number,fontName:string)=> number,
content :string,  color :string){

super(startTime,endTime,insertAction,canvasWidth,canvasHeight);
//xxxxxxxxx
this.content = new AniStringDb(content);
this.fontFamily = FontFamily.Calibri;
this.maxDisplayChars = new AniNumberDb(500);
this.fitToWidth  = new AniBooleanDb(false);

this.charsWidth = charsWidth;
this.color.set(color);
/////////////
this._oldWidth = null;
this._oldHeight = null;
this.heightFineTune = 5;
} 
 
contentHeight():number {
    let heightInPic =  this.charsWidth(
                "W",
                this.getFontSize(),
                this.fontFamily);
return toPerc(heightInPic, this.canvasHeight() );    
}
contentWidth():number {
    let widthInPix = this.charsWidth(
        this.content.value().substring(0,this.maxDisplayChars.value()),
        this.getFontSize(),
        this.fontFamily);
    return toPerc(widthInPix,this.canvasWidth());        
}
    
getEngineComp(pack :Pack):compEngine{
   const comp = new Text(this,pack);
   return comp; 
}
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
//  this.style.fontSize = this.getFontSize(); 
//  this.style.fontFamily = this.fontFamily; 
 //--------------------The Process
     for (let i = 1; i < 900; i++) {
     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize
     const newWidthInPix = this.charsWidth(this.content.value(), i ,this.fontFamily);
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

}