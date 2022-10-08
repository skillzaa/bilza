import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import Text from "./text.js";
import Pack from "../../pack/pack.js";
import {AniNumberDb,AniColorDb,AniStringDb,AniBooleanDb} from "../../animationsFacade/animationsDb.js";
import IText from "./IText.js";
import {FontFamily}  from "../../pack/fontFamily.js";


export default class TextDb extends CompDb implements IText {
public content :AniStringDb;
public fontFamily :FontFamily;
public maxDisplayChars :AniNumberDb; 
public fitToWidth :AniBooleanDb; 
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
} 
 
contentHeight():number {
//--Abstraction
if (this.maxDisplayChars.value() < 1) {return 0;}
// return this.compPack.charsWidth("W",this.adjestFontSize(this.fontSize.value()),this.fontFamily);
return this.charsWidth("W",this.height.value(),this.fontFamily);
}

contentWidth():number {
if (this.charsWidth == null){throw new Error("init error");}        
    // return this.compPack.charsWidth(this.content.value().substring(0,this.maxDisplayChars.value()),this.adjestFontSize(this.height.value()),this.fontFamily)
    return this.charsWidth(this.content.value().substring(0,this.maxDisplayChars.value()),this.height.value(),this.fontFamily)
}
getEngineComp(pack :Pack):compEngine{
   const comp = new Text(this,pack);
   return comp; 
}
    
}