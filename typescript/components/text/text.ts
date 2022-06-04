import {Pack,BaseComponent,DrawLayer,FontFamily} from "../../Bilza.js";
// import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import TextUtil from "./textUtil.js";
import AnimatedNoBase from "../../BaseComponent/animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
export default class Text extends BaseComponent {
public content :string;
public fontFamily :FontFamily;
//--padding--
public paddingLeft :number;
public paddingRight :number;
public paddingTop :number;
public paddingBottom :number;
//--numbers
public fontSize :AnimatedNoBase;
public border :number;
public maxDisplayChars :number; //implement it
//--colors
public color :string;
public colorBorder :string;
public colorBg :string;
//---flags     
public showContent :boolean;
public showBg :boolean;
public showTextShadow :boolean;
public showBorderShadow :boolean; 
public showBgShadow :boolean; 
//-----------------------------
private realWidth :number;
private realHeight :number;
/////////////////////////////////////////
constructor (content :string="",colorHax :string="#000000",fontSize :number=40,x :number=0,y :number=0){
super();  
this.content = content ; 
this.fontSize = new AnimatedNoBase(fontSize);
this.fontFamily = FontFamily.Calibri;
this.paddingLeft = 0;
this.paddingRight = 0;
this.paddingTop = 0;
this.paddingBottom = 0;
this.border = 0;
//---------------------------     
this.colorBorder = colorHax;
// this.colorBg = lightenDarkenColor(colorHax,225);
this.colorBg = "pink";
this.color = colorHax ; 
//-----------------------------
this.showContent = true;
this.showBg = false;
this.showTextShadow = false;
this.showBgShadow = false;
this.showBorderShadow = false;
this.maxDisplayChars = 200; 
this.drawLayer = DrawLayer.MiddleGround;
//-----------------------------
this.realWidth = 0;
this.realHeight = 0;
}
init(p: Pack): boolean {
super.init(p);

this.fontSize.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

return true;
}
update(msDelta: number, p: Pack): boolean {
super.update(msDelta,p);
this.realWidth = TextUtil.realWidth(p,this.content,this.maxDisplayChars,this.fontSize.value(),this.fontFamily,this.paddingLeft,this.paddingRight);

this.realHeight = TextUtil.realHeight(p,this.fontSize.value(),this.fontFamily,this.paddingTop,this.paddingBottom);
this.fontSize.update(msDelta);
return true;
}
width():number {
return this.realWidth;
}
height():number {
return this.realHeight;
}
  
draw(p:Pack):boolean{
this.style.fillStyle = this.colorBg;    
this.style.strokeStyle = this.colorBg;    
TextUtil.drawBg(p,this.style,this.loc.x(),this.loc.y(),this.realWidth,this.realHeight);
this.style.fillStyle = this.colorBorder;    
this.style.strokeStyle = this.colorBorder;    
TextUtil.drawBorder(p,this.style,this.loc.x(),this.loc.y(),this.border,this.realWidth,this.realHeight);

this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color;
this.style.fontSize = this.fontSize.value();
this.style.fontFamily = this.fontFamily;
TextUtil.drawContent(p,this.style,this.content,this.loc.x(),this.loc.y(),this.maxDisplayChars,this.paddingLeft,this.paddingTop,this.showContent);
return true;
} 
 
}//class

//  private reqWdInPix(p :Pack){
// const r =  (p.canvasWidth() /100 * this.dynWidth.value());
//  const s = r - (this.padding * 2);
//  return s;
//  }
//  public dynamicFontSize(p :Pack):number | null{
// //----required with should exclude padding     
//  const reqWdInPix = this.reqWdInPix(p);
//  //if not already in sync
//  this.style.fontSize = this.fontSize; 
//  //------------------------------------
//  let newWidth = 0; 
//      for (let i = 1; i < 900; i++) {
//      //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize
//      this.style.fontSize = i; 
//      const newWidthInPix = p.charsWidth(this.content,this.style.fontSize,this.style.fontFamily);
//  //----------------------------
//  const newHtpix = p.charsWidth("W",this.style.fontSize,this.style.fontFamily);
//  const HtpixToPerc = Math.ceil(newHtpix/p.canvasHeight() * 100);
//      if (newWidthInPix >= (reqWdInPix) ){
//          this.fontSize = i; 
//          this.style.fontSize = i;
//  //--dont use base comp dynHeight
//          this.maxHeight = HtpixToPerc;
//          return this.fontSize;
//      } 
//  }//for end  
//  return null;
//  }//dynamic font size
 