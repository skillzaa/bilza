import {Pack} from "../bilza.js";
import WidthHeight from "./71WidthHeight.js";
import {XAlignOpt} from "./designBC/xAlignOpt.js";
import {YAlignOpt} from "./designBC/yAlignOpt.js";

import AniNoXPerc from "../animations/aniNoPerc/AniNoXPerc.js";
import AniNoYPerc from "../animations/aniNoPerc/AniNoYPerc.js";
// import X from "./xy/x.js";
// import Y from "./xy/y.js";

export default class Loc extends WidthHeight {
// XX-------------||||||||||||||||||||||---------------XX 
charsWidth :null | ((chars:string,fontSize:number,fontName:string)=>number);
//--24-june 2022 removed loc for indl x and y using new AniNumber class
public x :AniNoXPerc; 
public y :AniNoYPerc;

public xAlign :XAlignOpt;
public readonly XAlignOpt :typeof XAlignOpt;

public yAlign : YAlignOpt;
public readonly YAlignOpt :typeof YAlignOpt;

// aniPreset :AniPreset;

constructor (){
    super();
this.x = new AniNoXPerc();
this.y = new AniNoYPerc();
this.charsWidth = null;  
// this.aniPreset = new AniPreset(this);
this.XAlignOpt = XAlignOpt; //final-ok
this.xAlign = this.XAlignOpt.Left;
this.YAlignOpt = YAlignOpt;
this.yAlign = this.YAlignOpt.Top;

}

draw(p: Pack): boolean {
    return true;
}

public random(startTimeSec :number,endTimeSec :number,Xmin :number=1, Xmax :number=100,Ymin :number=1, Ymax :number=100,skipXFrames :number=60){
this.x.random(startTimeSec,endTimeSec,Xmin,Xmax,skipXFrames);
this.y.random(startTimeSec,endTimeSec,Ymin,Ymax,skipXFrames);
}
public vibrate(from: number, to: number, x: number,y: number, offset: number, delay: number): void {
    this.x.vibrate(from,to,x,offset,delay);
    this.y.vibrate(from,to,y,offset,delay);
}
goto(atFrame: number, x: number, y: number): boolean {
this.x.goto(atFrame,x);
this.y.goto(atFrame,y);
return true;    
}
animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean {
this.x.animate(timeFrom,timeTo,xFrom,xTo);    
this.y.animate(timeFrom,timeTo,yFrom,yTo);    
return true;    
}
xAligned():number{   
let x = this.x.value();     
switch (this.xAlign) {
    
    case this.XAlignOpt.Left :
    //--nothing        
    break;
    case this.XAlignOpt.Mid:
    x = x - (this.widthInPix()/2);    
    break;
    case this.XAlignOpt.Right:
    x = x - this.widthInPix();    
    break;
}
return x;    
}
yAligned():number{   
let y = this.y.value();     
switch (this.yAlign) {   
    case this.YAlignOpt.Top :
    //--nothing        
    break;
    case this.YAlignOpt.Mid:
    y = y - (this.heightInPix()/2);    
    break;
    case this.YAlignOpt.Bot:
    y = y - this.heightInPix();    
    break;
}
return y;    
}

}//component ends 