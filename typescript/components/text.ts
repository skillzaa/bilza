/**
 * Main thing to manage in a comp is width and height. in text dynHeight is not implemented, there is no effect of it instead the height is automatically adjesyed using local var
 * also text always use percentage 
 * -- Border is being treated as external comp its width and height is not included in the component
 */
 import {Pack,BaseComponent,DrawLayer} from "../Bilza.js";

 export default class Text extends BaseComponent {
 content :string;
 padding :number;
 border :number;
 private localDynHeight :number;
 
 maxDisplayChars :number;
 
 protected fontSize :number;
 
 color :string;
 colorBorder :string;
 colorBg :string;
     
 showContent :boolean;
 showBg :boolean;
 showTextShadow :boolean;
 showBorderShadow :boolean; 
 showBgShadow :boolean; 
     
     
 constructor (content :string="",colorHax :string="#000000",dynWidth :number=30){
     
     super();    
     this.content = content ; 
     this.padding = 0;
     this.border = 0;
     this.dynWidth.setValue(dynWidth);
     //am not using the base comp dynHeight
     this.localDynHeight = 20;
     
     this.colorBorder = "black";
     this.colorBg = "#e1f4e1";
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
 width():number {
 if(this.canvasWidth==null){throw new Error("init error");
 }    
 return Math.ceil(this.canvasWidth / 100 * this.dynWidth.value());    
 }
 height():number {//this.localDynHeight
 if(this.canvasHeight==null){throw new Error("init error");
 }    
 return Math.ceil(this.canvasHeight / 100 * this.localDynHeight);    
 }
 
 
 update(msDelta: number, p: Pack): boolean {
 super.update(msDelta,p);
         this.dynamicFontSize(p);
 
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
         this.localDynHeight = HtpixToPerc;
         return this.fontSize;
     } 
 }//for end  
 return null;
 }//dynamic font size
 
 }//class