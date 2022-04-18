import {Component,Pack,DrawLayer } from "../../Bilza.js";
import DataFn,{ObjectData} from "./DataFn.js";
import {XAlignment} from "./xAlignment.js";
import {YAlignment} from "./yAlignment.js";

export default class Text extends Component<ObjectData> {
    xAlignmentOptions:typeof XAlignment;   
    yAlignmentOptions:typeof YAlignment;   
// private safeColor:string;
// private safeColorMargin:string;
// private safeColorBg:string;

constructor (content :string="",color :string="black",x:number=0,y:number =0, widthPercent:number=10,heightPercent:number=10){
    super(DataFn);
    this.xAlignmentOptions = XAlignment;
    this.yAlignmentOptions = YAlignment;

    this.d.content = content;
    this.d.x = x;
    this.d.y = y;
    //---colors and safe colors --change later
    this.d.color = color;
    // this.safeColor = color;
    this.d.colorMargin = color;
    // this.safeColorMargin = color;
    this.d.colorBg = "#e1f4e1";
    // this.safeColorBg = "#e1f4e1";

    this.d.widthPercent = widthPercent;
    this.d.heightPercent = heightPercent;
     

    this.drawLayer = DrawLayer.MiddleGround;
}
width(p:Pack):number {
return (p.textWidth(this.d.content,this.style) + this.factorsWOFontSize());
}
height(p:Pack):number {
return (p.textWidth("Wi",this.style)+ this.factorsWOFontSize());
}

update(msDelta: number, p: Pack): boolean {
this.setFontSize(p);
// if (this.d.flagDim == true){
//     this.dim();
// }else {
//     this.unDim();
// }
    return true;
}

draw(p:Pack):boolean{
if (this.d.flagDrawBg == true){
    this.drawBg(p);
}
if (this.d.flagDrawMargin == true){
this.drawMargin(p);
}

this.style.fillStyle = this.d.color;    
this.style.strokeStyle = this.d.color;  
p.drawText(this.d.content,
    this.getX(p) + (this.d.padding + this.d.margin),
    this.getY(p) + (this.d.padding + this.d.margin),
    this.style)
return true;
} 
private setFontSize(p :Pack):number{
let reqWd = (p.canvasWidth() /100 * this.d.widthPercent);
let reqHt = (p.canvasWidth() /100 * this.d.heightPercent);
for (let i = 1; i < 300; i++) {
    this.style.fontSize = i; 
    let newWidth = this.width(p);
    let newHeight = this.height(p);

    // console.log("font size",i);
    // console.log("newWidth",newWidth);
    // console.log("newHeight",newHeight);
    if (newWidth >= reqWd || newHeight >= reqHt){
        return this.style.fontSize;
    }   
}

//--for testing

return this.style.fontSize;
}
drawMargin(p :Pack) :boolean{
this.style.strokeStyle = this.d.colorMargin;
this.style.lineWidth = this.d.margin;    
p.drawRect(
    this.getX(p),
    this.getY(p),
    this.width(p),
    this.height(p),
    this.style);
return true;
}
drawBg(p :Pack) :boolean{
this.style.fillStyle = this.d.colorBg;
p.drawFillRect(
    this.getX(p),
    this.getY(p),
    this.width(p),
    this.height(p),
    this.style);
return true;
} 
factorsWOFontSize():number{
return (this.d.padding * 2) + (this.d.margin * 2);  
}
private getX(p :Pack):number{
let x =   p.xPerc(this.d.x);  
switch (this.d.xAlignment) {
    case this.xAlignmentOptions.Left:
        break;
    case this.xAlignmentOptions.Mid:
         x = x - (this.width(p)/2);
        break;
    
    case this.xAlignmentOptions.Right:
        x = x - this.width(p);
        break;

    default:
        return x;
        break;
}
return x ;
}
private getY(p :Pack):number{
let y =   p.yPerc(this.d.y);  
switch (this.d.yAlignment) {
    case this.yAlignmentOptions.Top:
        break;
    case this.yAlignmentOptions.Mid:
         y = y - (this.height(p)/2);
        break;
    
    case this.yAlignmentOptions.Bot:
        y = y - this.height(p);
        break;
}
return y ;
}
// private dim(){
// //save before change
// this.safeColor = this.d.color;    
// this.d.color = "grey";
// //save before change
// this.safeColorMargin = this.d.colorMargin;    
// this.d.colorMargin = "grey";
// this.safeColorBg = this.d.colorBg;
// this.d.colorBg = "#e5e3e3";    
// }
// private unDim(){
// this.d.color = this.safeColor;
// this.d.colorMargin = this.safeColorMargin;
// this.d.colorBg = this.safeColorBg;    
// }

}//class