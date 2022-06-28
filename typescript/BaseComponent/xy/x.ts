import XyBaseAdaptor from "./xyBaseAdaptor.js";
import {XAlignOpt} from "../designBC/xAlignOpt.js";

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
this.initRandom(usePercentages,canvasWidth);
this.initJumpBetween(usePercentages,canvasWidth);
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
initRandom(usePercentages :boolean,canvasWidth :number){
    for (let i = 0; i < this.preInitRandoms.length; i++) {
        const elm = this.preInitRandoms[i];
        let __min = elm.min;
        let __max = elm.max;
            if ( usePercentages == true){
                __min = this.percToX(elm.min,canvasWidth);
                __max = this.percToX(elm.max,canvasWidth);
            }
    this.baseRandom(elm.startTimeSec,elm.endTimeSec,__min,__max,elm.skipFrames);
    }    
}
initJumpBetween(usePercentages :boolean,canvasWidth :number){
for (let i = 0; i < this.preInitJumpBetweens.length; i++) {
    const elm = this.preInitJumpBetweens[i];
    let __pointOne = elm.pointOne;
    let __pointTwo = elm.pointTwo;
        if ( usePercentages == true){
            __pointOne = this.percToX(elm.pointOne,canvasWidth);
            __pointTwo = this.percToX(elm.pointTwo,canvasWidth);
        }
this.baseJumpBetween(elm.startTimeSec,elm.endTimeSec,__pointOne,__pointTwo,elm.skipFrames);
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