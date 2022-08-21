import { Pack,DrawLayer,BaseComponent,FontFamily} from "../bilza.js";

import {AniNumber,AniPerc,AniString,AniBoolean,AniColor,} from "../animationModule/animations.js";
import RawText from "./rawText.js";

export default class Text extends RawText {
fitTextToWidth :AniBoolean;
fitTextToHeight :AniBoolean;
    ///////////////////////////////////////// 
constructor (content :string="",colorHax :string="#000000"){
super(content,colorHax);
this.fitTextToWidth = new AniBoolean(false);
this.fitTextToHeight = new AniBoolean(false);

} 

update(msDelta: number, p: Pack): boolean {
if (this.fitTextToWidth.value() == true){
    this.dynamicFontSize(p);    
}
if (this.fitTextToHeight.value() == true){
    this.shrinkToFitMaxHeight(p);    
}
super.update(msDelta,p);//--keep it down here so that Loc is updated late;
return true;
}


///////////////////////////////////////////
///////////////////////////////////////////
private dynamicFontSize(p :Pack):number | null{
//----required with should exclude padding     
 const reqWdInPix = (this.width.value());;
 
 //if not already in sync
 this.style.fontSize = this.fontSize.value(); 
 //------------------------------------
     for (let i = 1; i < 900; i++) {
     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize

     const newWidthInPix = p.charsWidth(this.content.value(),i,this.style.fontFamily);
 //----------------------------
     if (newWidthInPix >= (reqWdInPix) ){
         this.fontSize.set(i); 
         this.style.fontSize = i; //important
         return this.fontSize.value();
     } 
 }//for end  
 return null; 
}//dynamic font size

private shrinkToFitMaxHeight(p :Pack):boolean{
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

 