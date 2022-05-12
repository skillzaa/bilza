import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./textData.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";

export default class Text extends Component<ObjectData> {
 
constructor (duration:number= 10,content :string="",colorHax :string="#000000",x:number=0,y:number =0,dynWidth :number=20,dynHeight :number=20){
    
    super(DataFn,duration);
this.insertType = this.insertTypeOptions.Append;
    this.d.content = content;
    this.d.x = x;
    this.d.y = y;
    this.d.dynWidth = dynWidth;
    this.d.dynHeight = dynHeight;
    //---colors
    this.d.color = colorHax;
    this.d.colorBorder = colorHax;
    this.d.colorBg = lightenDarkenColor(colorHax,10);
    //move to base comp class 
    this.drawLayer = DrawLayer.MiddleGround;
}
width(p:Pack):number {
//-- this.d.fontSize is what decides the width and height    
return (p.textWidth(this.d.content.substring(0,this.d.maxDisplayChars),this.style) + (this.d.padding * 2) + (this.d.border ) );
}
height(p:Pack):number {
return (p.charsWidth("W",this.d.fontSize,this.style.fontName)+ (this.d.padding * 2) + (this.d.border) );
}

init(p: Pack): boolean {
    return true;
}
update(msDelta: number, p: Pack): boolean {
    if (this.d.flagUseDynResize ==true){
        this.dynamicFontSize(p);
    }
    if (this.d.flagShrinkHeightToFit ==true){
        this.shrinkHeightToFit(p);
    }
    return true;
}

draw(p:Pack):boolean{

if (this.d.showBg == true){
    this.drawBg(p);
}
if (this.d.border > 0){
    this.drawBorder(p);
}
if (this.d.showContent == true){
    this.drawContent(p);
}

return true;
} 

// =- AM USING drawRect (Empty rect) for border and not line
private drawBorder(p :Pack) :boolean{

if (this.d.showBorderShadow == true){
    // this.shadowsOn();
    this.setShadow(this.d.shadowBlur,this.d.shadowOffsetX,this.d.shadowOffsetY,this.d.shadowColor);
} else {
    this.shadowsOff();
}
this.style.fillStyle = this.d.colorBorder;
this.style.strokeStyle = this.d.colorBorder;          
this.style.lineWidth = this.d.border;  
this.style.fontSize = this.d.fontSize;       

p.drawRect(
    this.getX(p) + (this.d.border/2),
    this.getY(p) + (this.d.border/2),
    this.width(p),
    this.height(p),
    this.style);
return true;
}
private drawBg(p :Pack) :boolean{
    if (this.d.showBgShadow == true){
        // this.shadowsOn();
        this.setShadow(this.d.shadowBlur,this.d.shadowOffsetX,this.d.shadowOffsetY,this.d.shadowColor);
    } else {
        this.shadowsOff();
    }
    this.style.fillStyle = this.d.colorBg;
    this.style.strokeStyle = this.d.colorBg;
    this.style.fontSize = this.d.fontSize;
      
p.drawFillRect(
    this.getX(p) + (this.d.border),
    this.getY(p) + (this.d.border),
    this.width(p),
    this.height(p),
    this.style);
return true;
} 
private drawContent(p :Pack){
if (this.d.showTextShadow == true){
    // this.shadowsOn();
    this.setShadow(this.d.shadowBlur,this.d.shadowOffsetX,this.d.shadowOffsetY,this.d.shadowColor);
} else { 
    this.shadowsOff();
    
}       
    this.style.fillStyle = this.d.color;    
    this.style.strokeStyle = this.d.color; 
    //---must--
    this.style.fontSize = this.d.fontSize;
       
p.drawText(this.d.content.substring(0,this.d.maxDisplayChars),
    this.getX(p) + (this.d.border + this.d.padding),
    this.getY(p) + (this.d.border + this.d.padding),
    this.style);   
}

private getX(p :Pack):number{
let x = this.d.x;    
        if (this.d.flagUseRelativeXY == true){
            x =   p.xPerc(this.d.x);  
        }    
switch (this.d.xAlignment) {
    case this.xAlignmentOptions.Left:
        
        break;
    case this.xAlignmentOptions.Mid:
         x = x - ((this.width(p)/2)+ (this.d.border/2));
        break;
    
    case this.xAlignmentOptions.Right:
        x = x - (this.width(p) + (this.d.border/2));
        break;
}
return x ;
}
private getY(p :Pack):number{
    let y = this.d.y;    
        if (this.d.flagUseRelativeXY == true){
            y =   p.yPerc(this.d.y);  
        }    

switch (this.d.yAlignment) {
    case this.yAlignmentOptions.Top:
        break;
    case this.yAlignmentOptions.Mid:
         y = y - ((this.height(p)/2) + (this.d.border/2));
        break;
    
    case this.yAlignmentOptions.Bot:
        y = y - (this.height(p) + (this.d.border));
        break;
}
return y ;
}
public dynamicFontSize(p :Pack):number | null{
let reqWd = (p.canvasWidth() /100 * this.d.dynWidth);
this.style.fontSize = this.d.fontSize; //if not already in sync
// let oldFontSize = this.d.fontSize;
let newWidth = 0; 
    for (let i = 1; i < 900; i++) {
    //----Big secret found in the code txt.d.fontSize vs text.style.fontSize
    // txt.d.fontSize = i; 
    this.style.fontSize = i; 
    newWidth = this.width(p)
//---which Ever is reached first
//console.log("i",i, "newWidth",newWidth,"reqWd",reqWd);
//console.log("----");
    // if (newWidth >= reqWd || newHeight >= reqHt){
    if (newWidth >= reqWd ){
        this.d.fontSize = i; 
        this.style.fontSize = i;
        return this.d.fontSize;
    } 
}//for end  
return null;
}//dynamic font size
public shrinkHeightToFit(p :Pack):boolean{
let reqHt = (p.canvasHeight() /100 * this.d.dynHeight);

if (this.height(p) < reqHt){return true;}
this.style.fontSize = this.d.fontSize; 
const oldFontSize = this.style.fontSize;

//--use style.fontSize
for (let i = this.style.fontSize; i > 5; i--) {
        this.style.fontSize -= 1;
        this.d.fontSize = this.style.fontSize;
        // const newHt = this.height(p);
        if (this.height(p) < reqHt){return true;}
}
return false;
}//dynamic font size
}//class