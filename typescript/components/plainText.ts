import { Pack ,AniNumber,AniColor,AniBoolean} from "../bilza.js";
import RawText from "./rawText.js";
 import AniNoXPerc from "../animations/aniNoPerc/AniNoXPerc.js";
 import AniNoYPerc from "../animations/aniNoPerc/AniNoYPerc.js";
export default class PlainText extends RawText {

public paddingTop :AniNoYPerc;    //required by all comps--no     
public paddingBottom :AniNoYPerc;    //required by all comps--no     

public paddingRight :AniNoXPerc;    //required by all comps--no     
public paddingLeft : AniNoXPerc;    //required by all comps--no     

public border :AniNumber;    //required by all comps--no     
public maxHeight :number;    //required by all comps--no   

public colorBackground :AniColor;
public colorBorder :AniColor;

public showBackground :AniBoolean;
///////////////////////////////////////// 
constructor (content :string="",colorHax :string="#000000"){
super(content,colorHax);

this.paddingTop = new AniNoYPerc(0);
this.paddingBottom = new AniNoYPerc(0); 

this.paddingRight = new AniNoXPerc(0);
this.paddingLeft  = new AniNoXPerc(0);

this.border  = new AniNumber(0);

this.maxHeight = 500;//max Height is 10% of canvas

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
this.paddingTop.init(this.usePercentages,this.canvasWidth);
this.paddingBottom.init(this.usePercentages,this.canvasWidth);

// this.applyBoth(p);
return true;       
}
update(msDelta: number, p: Pack): boolean {
    this.paddingLeft.update(msDelta);
    
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
const canvasHtBy100 = Math.floor(this.canvasHeight/100);
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

}//class

 