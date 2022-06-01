import {Pack,BaseComponent,DrawLayer} from "../Bilza.js";

export default class Text extends BaseComponent {
content :string;
padding :number;
border :number;
maxDisplayChars :number; //implemented

fontSize :number;
// flagUseDynResize:boolean;
// flagShrinkHeightToFit:boolean;
// flagUseRelativeXY:boolean;

color :string;
colorBorder :string;
colorBg :string;
    
showContent :boolean;
showBg :boolean;
showTextShadow :boolean;
showBorderShadow :boolean; 
showBgShadow :boolean; 
    
    
constructor (content :string="",colorHax :string="#000000",x:number=0,y:number =0,dynWidth :number=20,dynHeight :number=20){
    
    super();
    
    // this.flagUseRelativeXY = true;//outof box its RESPONSIVE text
    // this.flagUseDynResize = true; //--dynResize ON by default
    // this.flagShrinkHeightToFit = true; //--shring ON by default
    
    
    this.content = "Text Component" ; 
    this.padding = 0;
    this.border = 0;
    this.dynWidth.setValue(dynWidth);
    this.dynHeight.setValue(dynHeight);
    
    this.colorBorder = "black";
    this.colorBg = "#e1f4e1";
    this.color = "black" ; 
    
    this.fontSize = 25;
    
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
return this.dynWidth.value();
}
height():number {
return this.dynHeight.value();
}


update(msDelta: number, p: Pack): boolean {
super.update(msDelta,p);
    // if (this.flagUseDynResize ==true){
    //     this.dynamicFontSize(p);
    // }
    // if (this.flagShrinkHeightToFit ==true){
    //     this.shrinkHeightToFit(p);
    // }
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
    this.loc.x() + (this.border/2),
    this.loc.y() + (this.border/2),
    this.width(),
    this.height(),
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
    // this.style.fillStyle = this.colorBg;
    // this.style.strokeStyle = this.colorBg;
    this.style.fillStyle = "red";
    this.style.strokeStyle = "green";
    this.style.fontSize = this.fontSize;
      
p.drawFillRect(
    this.loc.x() + (this.border),
    this.loc.y() + (this.border),
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
       
p.drawText(this.content.substring(0,this.maxDisplayChars),
    this.loc.x() + (this.border + this.padding),
    this.loc.y() + (this.border + this.padding),
    this.style);   
}


// public dynamicFontSize(p :Pack):number | null{
// let reqWd = (p.canvasWidth() /100 * this.dynWidth);
// this.style.fontSize = this.fontSize; //if not already in sync
// // let oldFontSize = this.fontSize;
// let newWidth = 0; 
//     for (let i = 1; i < 900; i++) {
//     //----Big secret found in the code txt.d.fontSize vs text.style.fontSize
//     // txt.d.fontSize = i; 
//     this.style.fontSize = i; 
//     newWidth = this.width(p)
// //---which Ever is reached first
// //console.log("i",i, "newWidth",newWidth,"reqWd",reqWd);
// //console.log("----");
//     // if (newWidth >= reqWd || newHeight >= reqHt){
//     if (newWidth >= reqWd ){
//         this.fontSize = i; 
//         this.style.fontSize = i;
//         return this.fontSize;
//     } 
// }//for end  
// return null;
// }//dynamic font size
// public shrinkHeightToFit(p :Pack):boolean{
// let reqHt = (p.canvasHeight() /100 * this.dynHeight.value());

// if (this.height() < reqHt){return true;}
// this.style.fontSize = this.fontSize; 
// const oldFontSize = this.style.fontSize;

// //--use style.fontSize
// for (let i = this.style.fontSize; i > 5; i--) {
//         this.style.fontSize -= 1;
//         this.fontSize = this.style.fontSize;
//         // const newHt = this.height(p);
//         if (this.height(p) < reqHt){return true;}
// }
// return false;
// }//dynamic font size
}//class