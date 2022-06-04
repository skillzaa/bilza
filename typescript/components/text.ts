/**
 * Main thing to manage in a comp is width and height. in text dynHeight is not implemented, there is no effect of it instead the height is managed by maxHeight (we can just set max height and its a :number not an animated number-- leave the base width prop alone)
 * also text always use percentage no more raw pix
 * -- Border is being treated as external comp its width and height is not included in the component
 */
 import lightenDarkenColor from "../functions/lightenDarkenColor.js";
 import {Pack,BaseComponent,DrawLayer} from "../Bilza.js";

 export default class Text extends BaseComponent {
 public content :string;
 public padding :number;
 public border :number;
 public maxHeight :number;
 
 public maxDisplayChars :number;
 
 //---i need this for internal workings
 protected fontSize :number;
private calcHeight :number; 
 public color :string;
 public colorBorder :string;
 public colorBg :string;
     
 public showContent :boolean;
 public showBg :boolean;
 public showTextShadow :boolean;
 public showBorderShadow :boolean; 
 public showBgShadow :boolean; 
     
     
 constructor (content :string="",colorHax :string="#000000",dynWidth :number=30){
super();    
this.content = content ; 
this.padding = 0;
this.border = 0;
this.dynWidth.setValue(dynWidth);
//am not using the base comp dynHeight
this.maxHeight = 20;
this.calcHeight = 0;
//---------------------------     
this.colorBorder = colorHax;
this.colorBg = lightenDarkenColor(colorHax,225);
this.color = colorHax ; 
this.fontSize = 25;
//-----------------------------
this.showContent = true;
this.showBg = false;
this.showTextShadow = false;
this.showBgShadow = false;
this.showBorderShadow = false;
this.maxDisplayChars = 200;
//-------Base Component Values--keep all here except x and y
this.drawLayer = DrawLayer.MiddleGround;
}
/**
 * Q-The reason why p :Pack was removed from width and height is
 * A-At init the comp is given canvasWidth and canvasHeight so it is upto the component to decide its own width and height
 * Q-But what if we need to use some Pack method like fontSize
 * A- At update comp gets Pack there it can set its variables.06 
 * 
 */
//--Width return the width that It should have its authors job to make comp width equal to the value being returned by width();
width():number {
if(this.canvasWidth==null){throw new Error("init error");
}    
 const widthInPix = Math.ceil(this.canvasWidth / 100 * this.dynWidth.value());    
return widthInPix + (this.padding * 2);

 }
 //The height of Text comp cant be maxHeight, it has to be the actual height this we need fontSize for this and need to set this in updateg
 
 height():number {
 return this.calcHeight;
 }
 
 
 update(msDelta: number, p: Pack): boolean {
 super.update(msDelta,p);
         this.dynamicFontSize(p);
 this.calcHeight = p.textWidth(this.content,this.style);
     return true;
 }
 
 draw(p:Pack):boolean{
 if (this.showBg == true){
     this.drawBg(p);
 }
 if (this.border > 0){
     this.drawBorder(p);
 }
 if (this.showContent == true){
     this.drawContent(p);
 }
 
 return true;
 } 
 
 // =- AM USING drawRect (Empty rect) for border and not line
 private drawBorder(p :Pack) :boolean{
 
 if (this.showBorderShadow == true){
     this.setShadow(this.shadowBlur,this.shadowOffsetX,this.shadowOffsetY,this.shadowColor);
 } else {
     this.shadowsOff();
 }
 this.style.fillStyle = this.colorBorder;
 this.style.strokeStyle = this.colorBorder;          
 this.style.lineWidth = this.border;  
 this.style.fontSize = this.fontSize;       
 
 p.drawRect(
     this.loc.x() - (this.border/2),
     this.loc.y() - (this.border/2),
     this.width() + (this.border),
     this.height() + (this.border),
     this.style);
 return true;
 }
 private drawBg(p :Pack) :boolean{
     if (this.showBgShadow == true){
         // this.shadowsOn();
         this.setShadow(this.shadowBlur,this.shadowOffsetX,this.shadowOffsetY,this.shadowColor);
     } else {
         this.shadowsOff();
     }
     this.style.fillStyle = this.colorBg;
     this.style.strokeStyle = this.colorBg;
     this.style.fontSize = this.fontSize;
//--the bg is classic width and       
 p.drawFillRect(
     this.loc.x(),
     this.loc.y(),
     this.width(),
     this.height(),
     this.style);
 return true;
 } 
 private drawContent(p :Pack){
 if (this.showTextShadow == true){
     // this.shadowsOn();
     this.setShadow(this.shadowBlur,this.shadowOffsetX,this.shadowOffsetY,this.shadowColor);
 } else { 
     this.shadowsOff();
 }       
     this.style.fillStyle = this.color;    
     this.style.strokeStyle = this.color; 
     //---must--
     this.style.fontSize = this.fontSize;    
    //  ctx.textBaseline = "middle";

//--p.textBaseline("top");//--must     
 p.drawText(
     this.content.substring(0,this.maxDisplayChars),
     this.loc.x() + (this.padding),
     this.loc.y() + (this.padding/2),
     this.style);   
//--p.textBaseline("top");//--must     
 }
 
 private reqWdInPix(p :Pack){
const r =  (p.canvasWidth() /100 * this.dynWidth.value());
 const s = r - (this.padding * 2);
 return s;
 }
 public dynamicFontSize(p :Pack):number | null{
//----required with should exclude padding     
 const reqWdInPix = this.reqWdInPix(p);
 //if not already in sync
 this.style.fontSize = this.fontSize; 
 //------------------------------------
 let newWidth = 0; 
     for (let i = 1; i < 900; i++) {
     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize--in update txt.d.fontSize is sync with tst.style.fontSize
     this.style.fontSize = i; 
     const newWidthInPix = p.charsWidth(this.content,this.style.fontSize,this.style.fontFamily);
 //----------------------------
 const newHtpix = p.charsWidth("W",this.style.fontSize,this.style.fontFamily);
 const HtpixToPerc = Math.ceil(newHtpix/p.canvasHeight() * 100);
     if (newWidthInPix >= (reqWdInPix) ){
         this.fontSize = i; 
         this.style.fontSize = i;
 //--dont use base comp dynHeight
         this.maxHeight = HtpixToPerc;
         return this.fontSize;
     } 
 }//for end  
 return null;
 }//dynamic font size
 

 }//class