import { Pack ,AniNumber,AniColor,AniBoolean} from "../bilza.js";
import RawText from "./rawText.js";

/**
 * Text class can remove or apply "fitTextToWidth" and increase "height" to a large number and this will work just like raw text (i.e the fontSize is not changed to fit width).
 * The paddings are  using percentages but we can disable them  when ever we want and then the padding can be set in pix and not perc.
 * Also the X and Y of text component just like padding can be made to use pixels and not perc. This will come in handy when we want to use the text in container components.
 * In order to convert Width from percentage to raw we use the 
 */ 
export default class Text extends RawText {
 public fitTextToWidth :boolean;    
 public shrinkTextToHeight :boolean;    

///////////////////////////////////////// 
constructor (content :string="",colorHax :string="#000000"){
super(content,colorHax);

this.fitTextToWidth = true;
this.shrinkTextToHeight = true;
this.height.set(500);

} 

update(msDelta: number, p: Pack): boolean {
if (this.fitTextToWidth == true){
    this.dynamicFontSize(p);    
}     
if (this.shrinkTextToHeight == true){
    this.shrinkToFitMaxHeight(p);    
}     
super.update(msDelta,p);//--keep it down here so that Loc is updated late;
return true;
}

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

 