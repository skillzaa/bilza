import AniNumber from "../aniNumber/aniNumber.js";
import PreInitGoto from "./designBC/preInitGoto.js";
import PreInitAnimate from "./designBC/preInitAnimate.js";
import PreInitVibrate from "./designBC/preInitVibrate.js";
import {XAlignOpt} from "./designBC/xAlignOpt.js";
import XyBaseAdaptor from "./xyBaseAdaptor.js";

export default class X extends XyBaseAdaptor {
public xAlign :XAlignOpt;
public readonly XAlignOpt :typeof XAlignOpt;

constructor(){
super();    
this.XAlignOpt = XAlignOpt; //final-ok
this.xAlign = this.XAlignOpt.Left;

}
init(usePercentages :boolean,canvasWidth :number){
this.initVibrate(usePercentages,canvasWidth);
this.initGoto(usePercentages,canvasWidth);
this.initAnimate(usePercentages,canvasWidth);
}


initVibrate(usePercentages :boolean,canvasWidth :number){
for (let i = 0; i < this.preInitVibrates.length; i++) {
    const elm = this.preInitVibrates[i];
    let __v = elm.seed;
    if ( usePercentages == true){
        __v = this.percToX(elm.seed,canvasWidth);
    }
    this.baseVibrate(elm.from,elm.to,  __v  ,elm.offset,elm.delay);
}    
}
initGoto(usePercentages :boolean,canvasWidth :number){
for (let i = 0; i < this.preInitGotos.length; i++) {
    const elm = this.preInitGotos[i];
        let v = elm.theValue;
        if ( usePercentages == true){
            v = this.percToX(elm.theValue,canvasWidth)
        }
        this.baseGoto(elm.frame,v);

}      
}
initAnimate(usePercentages :boolean,canvasWidth :number){
for (let i = 0; i < this.preInitAnimates.length; i++) {
    const e= this.preInitAnimates[i];
        if ( usePercentages == true){
        this.baseAnimate(e.startTime,e.endTime,this.percToX(e.startValue,canvasWidth),this.percToX(e.endValue,canvasWidth));
        }else {
        this.baseAnimate(e.startTime,e.endTime, e.startValue, e.endValue);
        }
}      
}
//----------------------------------------------------------
private percToX(perc :number ,canvasWidth :number){
if (canvasWidth == null){throw("init error");}
return ((canvasWidth /100) * perc);
}
aligned(width :number):number{   
let x = this.value();     
switch (this.xAlign) {
    
    case this.XAlignOpt.Left :
    //--nothing        
    break;
    case this.XAlignOpt.Mid:
    x = x - (width/2);    
    break;
    case this.XAlignOpt.Right:
    x = x - width;    
    break;
}
return x;    
}

















////////////////////////////////////////////////////
}