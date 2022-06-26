import {Pack,IComponent,XAlignOpt,YAlignOpt} from "../bilza.js";
import BaseComponentBase from "./BaseComponentBase.js";
import PreInitGoto from "./designBC/preInitGoto.js";
import PreInitAnimate from "./designBC/preInitAnimate.js";
import PreInitVibrate from "./designBC/preInitVibrate.js";
// import AniPreset from "./aniPreset.js";

export default class Loc extends BaseComponentBase implements IComponent{
// XX-------------||||||||||||||||||||||---------------XX 
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);
private preInitGotos:PreInitGoto[];
private preInitAnimates:PreInitAnimate[];
private preInitVibrates:PreInitVibrate[];

// aniPreset :AniPreset;

constructor (){
    super();
    this.preInitGotos = []; 
    this.preInitAnimates = []; 
    this.preInitVibrates = []; 
    this.charsWidth = null;  
    // this.aniPreset = new AniPreset(this);
}

init(p: Pack): boolean {
//--- now i have width in pix when app is init and width in percentage when not init...    
this.canvasWidth =  p.canvasWidth();  
this.canvasHeight =  p.canvasHeight();
this.x.init(this.usePercentages,this.canvasWidth,);
// this.y.init(this.usePercentages,this.canvasHeight,);
// this.initGoto();
// this.initAnimate();
// this.initVibrateX();
// this.x.init(); There is no AniNumber.init :)
// this.y.init(); There is no AniNumber.init :)
// this.loc.init(this.width.bind(this),this.height.bind(this),p.canvasWidth(),p.canvasHeight());
return true;
}
// initVibrateX(){
// for (let i = 0; i < this.preInitVibrates.length; i++) {
//     const elm = this.preInitVibrates[i];
//     let v = elm.seed;
//     if (this.usePercentages == true){
//         v = this.percToX(elm.seed);
//     }
//     this.x.vibrate(elm.from,elm.to,v,elm.offset,elm.delay);
// }    
// }
// initGoto(){
// for (let i = 0; i < this.preInitGotos.length; i++) {
//     const elm = this.preInitGotos[i];
//     if (elm.gotoFor == "x"){
//         let v = elm.theValue;
//         if (this.usePercentages == true){
//             v = this.percToX(elm.theValue)
//         }
//         this.x.goto(elm.frame,v);

//     }else if (elm.gotoFor == "y"){
//         let v = elm.theValue;
//         if (this.usePercentages == true){
//             v = this.percToY(elm.theValue)
//         }
//         this.y.goto(elm.frame,v);
//     }
// }      
// }
// initAnimate(){
// for (let i = 0; i < this.preInitAnimates.length; i++) {
//     const e= this.preInitAnimates[i];
//         if (this.usePercentages == true){
// this.x.animate(e.timeFrom,e.timeTo,this.percToX(e.xFrom),this.percToX(e.xTo));

// this.y.animate(e.timeFrom,e.timeTo,this.percToY(e.yFrom),this.percToY(e.yTo));

//         }else {
// this.x.animate(e.timeFrom,e.timeTo,e.xFrom,e.xTo);
// this.y.animate(e.timeFrom,e.timeTo,e.yFrom,e.yTo);
//         }
    
// }      
// }
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


goto(atFrame :number,x :number ,y :number,xAlign :XAlignOpt=XAlignOpt.Left,yAlign :YAlignOpt=YAlignOpt.Top,xExtra :number=0,yExtra :number=0):boolean{
// this.xAlign = xAlign;     
// this.yAlign = yAlign; 
const c = new PreInitGoto("x",atFrame,x);
this.preInitGotos.push(c);
const d = new PreInitGoto("y",atFrame,y);
this.preInitGotos.push(d);
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
percToX(perc :number){
if (this.canvasWidth == null){throw("init error");}
return ((this.canvasWidth /100) * perc);
}
percToY(perc :number){
if (this.canvasHeight == null){throw("init error");}
return ((this.canvasHeight /100) * perc);
}
vibrateX(from :number,to :number,xValue :number,offset :number,delay :number){    
    let v = xValue;
    let c = new PreInitVibrate(from,to,v,offset,delay);
    this.preInitVibrates.push(c);

}
// xAlignFrom :XAlignOpt=XAlignOpt.Left,xAlignTo :XAlignOpt=XAlignOpt.Left,yAlignFrom :YAlignOpt=YAlignOpt.Top,yAlignTo :YAlignOpt=YAlignOpt.Top,
animate(timeFrom :number,timeTo :number,xFrom :number,xTo :number, 
    yFrom :number,yTo :number):boolean {

 const ani = new PreInitAnimate(timeFrom,timeTo,xFrom,xTo,yFrom,yTo);
        this.preInitAnimates.push(ani);
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