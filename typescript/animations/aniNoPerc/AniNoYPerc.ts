import AniNoPerc from "./AniNoPerc.js";

export default class AniNoYPerc extends AniNoPerc {
canvasHeight :number | null;

constructor(defaultValue :number=0){
super(defaultValue); 
this.canvasHeight =  null;
}    


init(usePercentages :boolean,canvasHeight :number){
this.usePercentages = usePercentages;
this.canvasHeight = canvasHeight;     
this.initSetInitValue();    
this.initVibrate();
this.initGoto();
this.initAnimate();
this.initRandom();
this.initJumpBetween();

}
//---set method does a different task than other methods
public set(n :number){
if (this.canvasHeight == null){throw new Error("init error");}    
if ( this.usePercentages == true){
    const _v = this.percToY( n);
    this._XorY.set(_v);
    } else {
        this._XorY.set(n);    
    }
} 
   
initSetInitValue(){
if (this.canvasHeight == null){throw new Error("init error");}    
if ( this.usePercentages == true){
      const _v = this.percToY(this._initValue);
      this._XorY.set(_v);
    }else {
        this._XorY.set(this._initValue)
    } 
}
initVibrate(){
if (this.canvasHeight == null){throw new Error("init error");}    
// if ( this.usePercentages == true){    
for (let i = 0; i < this.preInitVibrates.length; i++) {
    const elm = this.preInitVibrates[i];
    let __v = elm.seed;
            if ( this.usePercentages == true){
                __v = this.percToY(elm.seed);
            } 
this.baseVibrate(elm.from,elm.to,  __v  ,elm.offset,elm.delay);
}    
}

initRandom(){
if (this.canvasHeight == null){throw new Error("init error");}    

    for (let i = 0; i < this.preInitRandoms.length; i++) {
        const elm = this.preInitRandoms[i];
        let __min = elm.min;
        let __max = elm.max;
            if ( this.usePercentages == true){
                __min = this.percToY(elm.min);
                __max = this.percToY(elm.max);
            }
    this.baseRandom(elm.startTimeSec,elm.endTimeSec,__min,__max,elm.skipFrames);
    }    
}
initJumpBetween(){
if (this.canvasHeight == null){throw new Error("init error");}    

for (let i = 0; i < this.preInitJumpBetweens.length; i++) {
    const elm = this.preInitJumpBetweens[i];
    let __pointOne = elm.pointOne;
    let __pointTwo = elm.pointTwo;
        if ( this.usePercentages == true){
            __pointOne = this.percToY(elm.pointOne);
            __pointTwo = this.percToY(elm.pointTwo);
        }
this.baseJumpBetween(elm.startTimeSec,elm.endTimeSec,__pointOne,__pointTwo,elm.skipFrames);
}    
}
initGoto(){
if (this.canvasHeight == null){throw new Error("init error");}    

for (let i = 0; i < this.preInitGotos.length; i++) {
    const elm = this.preInitGotos[i];
        let v = elm.theValue;
        if ( this.usePercentages == true){
            v = this.percToY(elm.theValue);
        }
        this.baseGoto(elm.frame,v);

}      
}
initAnimate(){
if (this.canvasHeight == null){throw new Error("init error");}    

for (let i = 0; i < this.preInitAnimates.length; i++) {
    const e= this.preInitAnimates[i];
        if ( this.usePercentages == true){
        this.baseAnimate(e.startTime,e.endTime,this.percToY(e.startValue),this.percToY(e.endValue));
        }else {
        this.baseAnimate(e.startTime,e.endTime, e.startValue, e.endValue);
        }
}      
}
//----------------------------------------------------------
private percToY(perc :number){
if (this.canvasHeight == null){throw("init error");}
return ((this.canvasHeight /100) * perc);
}

////////////////////////////////////////////////////
}