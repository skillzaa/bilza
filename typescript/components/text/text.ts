import { Pack ,AnimatedNoBase,Style } from "../../Bilza.js";
import Text002 from "./text002.js"
;
// import TextUtil from "./textUtil.js";
export default class Text extends Text002 {
public useDynWidth :boolean;
public useMaxHeight :boolean;
public dynWidth :AnimatedNoBase;    //required by all comps--no
public maxHeight :number;    //required by all comps--no    
/////////////////////////////////////////
constructor (content :string="",colorHax :string="#000000"){
super(content,colorHax);  
this.maxHeight = 20;//max Height is 20% of canvas
this.dynWidth = new AnimatedNoBase(10); 
this.useDynWidth = false;
this.useMaxHeight = false;
}
init(p: Pack): boolean {
super.init(p);    
this.dynWidth.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());


return true;       
}

update(msDelta: number, p: Pack): boolean {
    
    this.dynWidth.update(msDelta);
    if (this.useDynWidth == true){
        this.dynamicFontSize(p);
    }
    if (this.useMaxHeight == true){
        this.shrinkToFitMaxHeight(p);
    }
    super.update(msDelta,p);//--keep it down here so that Loc is updated late;
    return true;
}

private dynamicFontSize(p :Pack):number | null{
//----required with should exclude padding     
 const reqWdInPix = this.reqWdInPixForFontSize(p);
 
 //if not already in sync
 this.style.fontSize = this.fontSize; 
 //------------------------------------
     for (let i = 1; i < 900; i++) {
     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize

     const newWidthInPix = p.charsWidth(this.content,i,this.style.fontFamily);
 //----------------------------
     if (newWidthInPix >= (reqWdInPix) ){
         this.fontSize = i; 
         this.style.fontSize = i;
         return this.fontSize;
     } 
 }//for end  
 return null; 
 }//dynamic font size
private reqWdInPixForFontSize(p :Pack){
const r =  (p.canvasWidth() /100 * this.dynWidth.value());
//--we removed padding here
    const s = r - (this.paddingLeft.value() + this.paddingRight.value());
    return s;
    }
    
private shrinkToFitMaxHeight(p :Pack):boolean{
if (this.charsWidth==null){throw new Error("init error");
}    
const reqHtInPix =  (p.canvasHeight() /100 * this.maxHeight);
const reqHtInPixwoPad = reqHtInPix - (this.paddingTop.value() + this.paddingBottom.value()); 
const contentHeight = this.charsWidth("W",this.style.fontSize,this.style.fontFamily);
if ( contentHeight < reqHtInPixwoPad){return true;}
//-----------------------------------------
    for (let i = 300; i > 0; i--) {
    // this.style.fontSize = i; 
    const newHeightInPix = p.charsWidth("W",i,this.style.fontFamily);
//----------------------------
// if (i < 100){debugger;}
    if (newHeightInPix <= reqHtInPixwoPad ){
        this.fontSize = i; 
        this.style.fontSize = i;//may not be required
        return true;
    }
}
return true;
}    
}//class

 