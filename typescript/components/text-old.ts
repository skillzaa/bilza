// import { Pack ,AniNumber} from "../bilza.js";
// import PlainText from "./plainText.js";
 
// export default class Text extends PlainText {

// public maxHeight :number;    //required by all comps--no     
// /////////////////////////////////////////
// constructor (content :string="",colorHax :string="#000000"){
// super(content,colorHax);  
// this.maxHeight = 500;//max Height is 10% of canvas
// }
// init(p: Pack): boolean {
// super.init(p);    
// this.applyBoth(p);
// return true;       
// }
// update(msDelta: number, p: Pack): boolean {
//     this.applyBoth(p);
//     super.update(msDelta,p);//--keep it down here so that Loc is updated late;
//     return true;
// }

// private dynamicFontSize(p :Pack):number | null{
// //----required with should exclude padding     
//  const reqWdInPix = this.reqWdInPixForFontSize(p);
 
//  //if not already in sync
//  this.style.fontSize = this.fontSize.value(); 
//  //------------------------------------
//      for (let i = 1; i < 900; i++) {
//      //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize

//      const newWidthInPix = p.charsWidth(this.content,i,this.style.fontFamily);
//  //----------------------------
//      if (newWidthInPix >= (reqWdInPix) ){
//          this.fontSize.set(i); 
//          this.style.fontSize = i;
//          return this.fontSize.value();
//      } 
//  }//for end  
//  return null; 
//  }//dynamic font size
// private reqWdInPixForFontSize(p :Pack){
// const r =  (p.canvasWidth() /100 * this.width.value());
// //--we removed padding here
// const s = r - (this.paddingLeft.value() + this.paddingRight.value());
//     return s;
// }
    
// private shrinkToFitMaxHeight(p :Pack):boolean{
// if (this.charsWidth==null){throw new Error("init error");
// }    
// const reqHtInPix =  (p.canvasHeight() /100 * this.maxHeight);
// const reqHtInPixwoPad = reqHtInPix - (this.paddingTop.value() + this.paddingBottom.value()); 
// const contentHeight = this.charsWidth("W",this.style.fontSize,this.style.fontFamily);
// if ( contentHeight < reqHtInPixwoPad){return true;}
// //-----------------------------------------
//     for (let i = 300; i > 0; i--) {
//     // this.style.fontSize = i; 
//     const newHeightInPix = p.charsWidth("W",i,this.style.fontFamily);
// //----------------------------
// // if (i < 100){debugger;}
//     if (newHeightInPix <= reqHtInPixwoPad ){
//         this.fontSize.set(i); 
//         this.style.fontSize = i;//may not be required
//         return true;
//     }
// }
// return true;
// }  
// private applyBoth(p :Pack){
   
//     this.dynamicFontSize(p);
//     this.shrinkToFitMaxHeight(p);
// }
// }//class

 