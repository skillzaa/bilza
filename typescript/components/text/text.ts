import { Pack } from "../../Bilza.js";
import Text002 from "./text002.js"
;
export default class Text extends Text002 {
public useDynamicWidth :boolean;
    
/////////////////////////////////////////
constructor (content :string="",colorHax :string="#000000",fontSize :number=40,x :number=0,y :number=0){
super(content,colorHax,fontSize,x,y);  
this.useDynamicWidth = true;
}
update(msDelta: number, p: Pack): boolean {
    super.update(msDelta,p);
    // if (this.useDynamicWidth == true){

    // }
    return true;
}

// private dynamicFontSize(p :Pack):number | null{
// //----required with should exclude padding     
//  const reqWdInPix = this.reqWdInPix(p);
//  //if not already in sync
//  this.style.fontSize = this.fontSize.value(); 
//  //------------------------------------
//  let newWidth = 0; 
//      for (let i = 1; i < 900; i++) {
//      //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize
//      this.style.fontSize = i; 
//      const newWidthInPix = p.charsWidth(this.content,this.style.fontSize,this.style.fontFamily);
//  //----------------------------
//  const newHtpix = p.charsWidth("W",this.style.fontSize,this.style.fontFamily);
// //  const HtpixToPerc = Math.ceil(newHtpix/p.canvasHeight() * 100);
//      if (newWidthInPix >= (reqWdInPix) ){
//          this.fontSize.setValue(i); 
//          this.style.fontSize = i;
//  //--dont use base comp dynHeight
//         //  this.dynHeight = HtpixToPerc;
//          return this.fontSize.value();
//      } 
//  }//for end  
//  return null;
//  }//dynamic font size
// private reqWdInPix(p :Pack){
// const r =  (p.canvasWidth() /100 * this.dynWidth.value());
//     const s = r - (this.paddingLeft.value() + this.paddingRight.value());
//     return s;
//     }
    
}//class

 