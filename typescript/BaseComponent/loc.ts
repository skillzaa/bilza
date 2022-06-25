import {Pack,IComponent,XAlignOpt,YAlignOpt} from "../bilza.js";
import BaseComponentBase from "./BaseComponentBase.js";
// import AniPreset from "./aniPreset.js";

export default class Loc extends BaseComponentBase implements IComponent{
// XX-------------||||||||||||||||||||||---------------XX 
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);
// aniPreset :AniPreset;

//--KEEP COMP drfault duration at 10 sec
constructor (){
    super();
    this.charsWidth = null;  
    // this.aniPreset = new AniPreset(this);
}

init(p: Pack): boolean {
//--- now i have width in pix when app is init and width in percentage when not init...    
this.canvasWidth =  p.canvasWidth();  
this.canvasHeight =  p.canvasHeight();  
// this.x.init(); There is no AniNumber.init :)
// this.y.init(); There is no AniNumber.init :)
// this.loc.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());
return true;
}
//--width is actually /shd be dynWidth in pix
width(): number {
return 0;
}
//--width is actually /shd be dynWidth in pix
height(): number {   
return 0;
}

update(msDelta :number,p :Pack): boolean {
    // this.loc.update(msDelta);
    this.x.update(msDelta);
    this.y.update(msDelta);
//--dont use them here use them in comps    
    // this.dynWidth.update(msDelta);
    // this.dynHeight.update(msDelta);
return true;    
}

draw(p: Pack): boolean {
    return true;
}

goto(atFrame :number,x :number , y :number,xAlign :XAlignOpt=XAlignOpt.Left,yAlign :YAlignOpt=YAlignOpt.Top,xExtra :number=0,yExtra :number=0):boolean{
this.xAlign = xAlign;     
this.yAlign = yAlign;     
this.x.goto(atFrame,x);
this.y.goto(atFrame,y);
return true;
}
shadowsOff(){
this.style.shadowBlur = 0;
this.style.shadowOffsetX = 0;
this.style.shadowOffsetY = 0;
}
setShadow(shadowBlur :number=8,shadowOffsetX :number=10,shadowOffsetY :number =10,shadowColor :string ="grey"){
this.style.shadowBlur = shadowBlur;
this.style.shadowOffsetX = shadowOffsetX;
this.style.shadowOffsetY = shadowOffsetY;
this.style.shadowColor = shadowColor;
}
shadowsOn(){
    this.style.shadowBlur = 8;
    this.style.shadowOffsetX = 10;
    this.style.shadowOffsetY = 10;
    this.style.shadowColor = "grey";
}

getEndTime(inMilliSec :boolean = true) :number{
let r = this.insertTimeInVid + this.duration; //both r in sec
return inMilliSec ? (r * 1000) : r;
}
getStartTime(inMilliSec :boolean = true) :number{
return inMilliSec ? (this.insertTimeInVid * 1000) : this.insertTimeInVid;    
}
setStartTime(n :number):number{
this.insertTimeInVid = n;
return this.insertTimeInVid;
}

animate(timeFrom :number,timeTo :number,
    xFrom :number,xTo :number, yFrom :number,yTo :number,
     
    xAlignFrom :XAlignOpt=XAlignOpt.Left,xAlignTo :XAlignOpt=XAlignOpt.Left,yAlignFrom :YAlignOpt=YAlignOpt.Top,yAlignTo :YAlignOpt=YAlignOpt.Top,
    
    xExtraFrom :number=0,xExtraTo :number=0,yExtraFrom :number=0,yExtraTo :number=0):boolean {
// return this.loc.animate(timeFrom,timeTo,
//     xFrom,xTo, yFrom ,yTo,
//     xAlignFrom,xAlignTo,yAlignFrom,yAlignTo,
//     xExtraFrom,xExtraTo,yExtraFrom,yExtraTo);
return true;
}
xAligned():number{   
let x = this.x.value();     
switch (this.xAlign) {
    case this.XAlignOpt.Left:
    //--nothing        
    break;
    case this.XAlignOpt.Mid:
    x = x - (this.width()/2);    
    break;
    case this.XAlignOpt.Right:
    x = x - this.width();    
    break;
}
return x;    
}
yAligned():number{   
let y = this.y.value();     
switch (this.yAlign) {
    case this.YAlignOpt.Top:
    //--nothing        
    break;
    case this.YAlignOpt.Mid:
    y = y - (this.height()/2);    
    break;
    case this.YAlignOpt.Bot:
    y = y - this.height();    
    break;
}
return y;    
}

////////////////////////////////////////////////////////
}//component ends 