import { Pack ,AniNumber,AniColor,AniBoolean} from "../bilza.js";
import RawText from "./rawText.js";
 import AniNoPerc from "../animations/aniNoPerc/AniNoPerc.js";

/**
 * Text class has all the bells and whistles unlike RawText. 
 * We can remove or apply "fitTextToWidth" and increase "maxHeight" to a large number and this will work just like raw text (i.e the fontSize is not changed to fit width).
 * The paddings are  using percentages but we can disable them (by usePercentages = false in init) when ever we want and then the padding can be set in pix and not perc.
 * Also the X and Y of text component just like padding can be made to use pixels and not perc. This will come in handy when we want to use the text in container components.
 */ 
export default class Text extends RawText {
public fitTextToWidth :boolean;    
public maxHeight :number;       
    
public paddingTop :AniNoPerc;    //required by all comps--no     
public paddingBottom :AniNoPerc;    //required by all comps--no     

public paddingRight :AniNoPerc;         
public paddingLeft : AniNoPerc;         

public border :AniNumber;         

public colorBackground :AniColor;
public colorBorder :AniColor;

public showBackground :AniBoolean;
///////////////////////////////////////// 
constructor (content :string="",colorHax :string="#000000"){
super(content,colorHax);

this.fitTextToWidth = true;
this.maxHeight = 500;

this.paddingTop = new AniNoPerc(0);
this.paddingBottom = new AniNoPerc(0); 

this.paddingRight = new AniNoPerc(0);
this.paddingLeft  = new AniNoPerc(0);

this.border  = new AniNumber(0);


this.colorBackground = new AniColor("#ffffff");
this.colorBorder = new AniColor("#000000");
this.showBackground = new AniBoolean(false);
} 
init(p: Pack): boolean {
super.init(p);    
if (this.canvasWidth == null || this.canvasHeight == null){
    throw new Error("init error");
}
this.paddingLeft.init(this.usePercentages,this.canvasWidth);
this.paddingRight.init(this.usePercentages,this.canvasWidth);
//--- DO NOT FEED CANVASWIDTH HERE its for canvasHeight
this.paddingTop.init(this.usePercentages,this.canvasHeight);
this.paddingBottom.init(this.usePercentages,this.canvasHeight);


// this.applyBoth(p);
return true;       
}
update(msDelta: number, p: Pack): boolean {
    if (this.fitTextToWidth == true){
        this.dynamicFontSize(p);    
    }     
    
    this.paddingLeft.update(msDelta);
    this.paddingRight.update(msDelta);
    this.paddingTop.update(msDelta);
    this.paddingBottom.update(msDelta);

    // this.applyBoth(p);
    super.update(msDelta,p);//--keep it down here so that Loc is updated late;
    this.border.update(msDelta);
    this.colorBackground.update(msDelta);
    this.colorBorder.update(msDelta);

    return true;
}

widthInPix(): number {
if (this.canvasWidth == null){throw new Error("init error");}
if (this.charsWidth == null){throw new Error("init error");}
const canvasWdBy100 = Math.floor(this.canvasWidth/100);
const borderX2 = this.border.value() * 2;
// const pl = canvasWdBy100 * this.paddingLeft.value();
const pl = this.paddingLeft.value();
const pr = this.paddingRight.value();
// const pr = canvasWdBy100 * this.paddingRight.value();
//---- This is not the actual size of the content but this should be the width
//--- This is text real width
const txt = this.charsWidth(this.content.value(),this.fontSize.value(),this.fontFamily);
return Math.floor(pl + txt + pr + borderX2);     
}

heightInPix(): number {
if (this.canvasHeight == null){throw new Error("init error");}
if (this.charsWidth == null){throw new Error("init error");}
// const canvasHtBy100 = Math.floor(this.canvasHeight/100);
const borderX2 = this.border.value() * 2;
const pt = this.paddingTop.value();
const pb = this.paddingBottom.value();
//--- This is actual height and not the maxHeight since it may be much smaller than maxHeight
const txt = this.charsWidth("W",this.style.fontSize,this.style.fontFamily);
return Math.floor( pt + pb + txt + borderX2);     
}

draw(p:Pack):boolean{
    this.style.opacity = (this.opacity.value());
    
this.style.fontSize = this.fontSize.value();
this.style.fontFamily = this.fontFamily;

this.applyRotation(p);
    if (this.showBackground.value() == true ){
        this.drawBackground(p);
    }
    if (this.border.value() > 0 ){
        this.drawBorder(p);
    }
this.drawContent(p);
this.removeRotation(p);

return true;
} 

drawBackground(p :Pack){

this.style.fillStyle = this.colorBackground.value();    
this.style.strokeStyle = this.colorBackground.value();  

p.drawFillRect (this.xAligned(), this.yAligned(),
this.widthInPix() , this.heightInPix(),this.style);
} 

drawBorder(p :Pack){
this.style.strokeStyle = this.colorBorder.value();  
this.style.fillStyle = this.colorBorder.value();  

this.style.lineWidth = this.border.value();    
p.drawRect(this.xAligned(), this.yAligned(),
this.widthInPix() , this.heightInPix(),this.style);
} 

drawContent(p :Pack){
this.style.strokeStyle = this.color.value();  
this.style.fillStyle = this.color.value();  

p.drawText(
    this.content.value().substring(0,this.maxDisplayChars.value()),
    this.xAligned() + this.border.value() + this.paddingLeft.value(),
    this.yAligned() + this.border.value() + this.paddingTop.value(),
    this.style);   
} 
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
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
const reqHtInPix =  (p.canvasHeight() /100 * this.maxHeight);
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

 