import {Pack,BaseComponent,DrawLayer,FontFamily} from "../../bilza.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import TextUtil from "./textUtil.js";
import AnimatedNoBase from "../../animatedNo/AnimatedNoBase.js";

export default class Text002 extends BaseComponent {
public content :string;
public fontFamily :FontFamily;
//--padding--
public paddingLeft   :AnimatedNoBase;
public paddingRight  :AnimatedNoBase;
public paddingTop    :AnimatedNoBase;
public paddingBottom :AnimatedNoBase;
//--numbers
public fontSize :number;
public border :AnimatedNoBase;
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
/////////////////////////////////////////
constructor (content :string="",colorHax :string="#000000"){
super();  
this.content = content ; 
this.fontSize = 50;
this.fontFamily = FontFamily.Calibri;
this.paddingLeft = new AnimatedNoBase(0);
this.paddingRight = new AnimatedNoBase(0);
this.paddingTop = new AnimatedNoBase(0);
this.paddingBottom = new AnimatedNoBase(0);
this.border = new AnimatedNoBase(0);
//-----------------------------     
this.colorBorder = colorHax;
this.colorBg = lightenDarkenColor(colorHax,225);
// this.colorBg = "pink";
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
}
init(p: Pack): boolean {
super.init(p);

// this.fontSize.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

this.paddingBottom.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

this.paddingLeft.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

this.paddingRight.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

this.paddingTop.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

this.border.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());

return true;
}
update(msDelta: number, p: Pack): boolean {
    
super.update(msDelta,p);

// this.fontSize.update(msDelta);
this.paddingBottom.update(msDelta);
this.paddingLeft.update(msDelta);
this.paddingRight.update(msDelta);
this.paddingTop.update(msDelta);

this.border.update(msDelta);

return true;
}
 
height():number {
if (this.charsWidth == null){throw new Error("init error");}    
const textHeight = this.charsWidth("W",this.style.fontSize,this.style.fontFamily)
return  textHeight + (this.paddingTop.value() + this.paddingBottom.value());
}
width():number {
if (this.charsWidth == null){throw new Error("init error");}        
const textWdith = this.charsWidth(this.content.substring(0,this.maxDisplayChars),this.fontSize,this.fontFamily)
return textWdith + (this.paddingLeft.value() + this.paddingRight.value()); 
}

  
draw(p:Pack):boolean{
this.style.fillStyle = this.colorBg;    
this.style.strokeStyle = this.colorBg;    
TextUtil.drawBg(p,this.style,this.loc.x(),this.loc.y(),this.width(),this.height());
this.style.fillStyle = this.colorBorder;    
this.style.strokeStyle = this.colorBorder;    
TextUtil.drawBorder(p,this.style,this.loc.x(),this.loc.y(),this.border.value(),this.width( ),this.height( ));

this.style.fillStyle = this.color;    
this.style.strokeStyle = this.color;
this.style.fontSize = this.fontSize;
this.style.fontFamily = this.fontFamily;
TextUtil.drawContent(p,this.style,this.content,this.loc.x(),this.loc.y(),this.maxDisplayChars,this.paddingLeft.value(),this.paddingTop.value(),this.showContent);
return true;
} 
 
}//class
