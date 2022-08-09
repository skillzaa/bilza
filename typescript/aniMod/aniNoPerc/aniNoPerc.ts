import AniNumber from "../aniNumber/aniNumber.js";
  
import PreInitGoto from "./designNoPerc/preInitGoto.js";
import PreInitAnimate from "./designNoPerc/preInitAnimate.js";
import PreInitRandom from "./designNoPerc/preInitRandom.js";
import PreInitJumpBetween from "./designNoPerc/preInitJumpBetween.js";
import PreInitOscilate from "./designNoPerc/preInitoscilate.js";

export default class AniNoPercBase extends AniNumber { 

protected usePercentages :boolean | null; 

protected preInitGotos:PreInitGoto[];
protected preInitAnimates:PreInitAnimate[];
// protected preInitVibrates:PreInitVibrate[];
protected preInitRandoms:PreInitRandom[];
protected preInitJumpBetweens:PreInitJumpBetween[];
protected preInitOscilate:PreInitOscilate[];
//----------------
protected _initValue :number; 
public canvasWidthHeight :number | null;
  

constructor(defaultValue=0){
super(defaultValue);    

this.usePercentages = true; 
this._initValue = defaultValue;
this.canvasWidthHeight =  null;

this.preInitRandoms = []; 
this.preInitGotos = []; 
this.preInitAnimates = []; 
// this.preInitVibrates = [];
this.preInitJumpBetweens = [];
this.preInitOscilate = [];

}
//----------------------------------------------------------
init(usePercentages :boolean,canvasWidthHeight :number){
this.usePercentages = usePercentages;
this.canvasWidthHeight = canvasWidthHeight;   
//-- the init values set by set is converted once  
this.initSet();    
this.initGoto();
this.initAnimate();
this.initRandom();
this.initJumpBetween();

} 
public set(n :number):number{
if ( this.usePercentages == true ){
    this._initValue = n;
    return this._initValue;
} else {
    super.set(n);    
    return n;
}
} 
   
initSet(){
if ( this.usePercentages == true){
    if (this.canvasWidthHeight == null){throw new Error("init       error");}    
    //-no need to make init value number | null since it gets default value from start.
    const _v = this.percToPix(this._initValue);
      super.set(_v);
    }else {
        //--do nothing since its already directly set in "set"
        super.set(this._initValue)
    } 
}
///////////////////////////////////////////////////////
public jumpBetween(msDeltaStart :number,msDeltaEnd :number,pointOne :number=1, pointTwo :number=10,delayInMS :number=0){
const c = new PreInitJumpBetween(msDeltaStart,msDeltaEnd,pointOne, pointTwo,delayInMS);    
this.preInitJumpBetweens.push(c);
}

public goto(msDelta :number , value :number){
const c = new PreInitGoto(msDelta,value);    
this.preInitGotos.push(c);
}

public random(startTimeSec :number,endTimeSec :number,min :number=1, max :number=10,skipXFrames :number=0): void {
const c = new PreInitRandom (startTimeSec,endTimeSec,min, max,skipXFrames);
    this.preInitRandoms.push(c);
}

public animate(msDeltaStart :number,msDeltaEnd :number,startValue :number,endValue :number): void {
    const c = new PreInitAnimate(msDeltaStart,msDeltaEnd,startValue,endValue);
    this.preInitAnimates.push(c);    
}

public oscillate(startTimeSec :number,endTimeSec :number,startValue :number=1, endValue :number=10,speed :number= 1){
const c = new PreInitOscilate(startTimeSec,endTimeSec,startValue, endValue,speed);
this.preInitOscilate.push(c);
}
////////////////////////////////////////////////////
protected percToPix(perc :number){
    if (this.canvasWidthHeight == null){throw("init error");}
    return ((this.canvasWidthHeight /100) * perc);
}
//----------------------------------------------------------
//----------------------------------------------------------
initOscilate(){
for (let i = 0; i < this.preInitOscilate.length; i++) {
    const elm = this.preInitOscilate[i];
    let __startValue = elm.startValue;
    let __endValue = elm.endValue;
            if ( this.usePercentages == true){
                __startValue = this.percToPix(elm.startValue);
                __endValue = this.percToPix(elm.endValue);
            } 
super.oscillate(elm.msDeltaStart,elm.msDeltaEnd,__startValue,__endValue,elm.speed);
}    
}

initRandom(){
    for (let i = 0; i < this.preInitRandoms.length; i++) {
        const elm = this.preInitRandoms[i];
        let __min = elm.min;
        let __max = elm.max;
            if ( this.usePercentages == true){
                __min = this.percToPix(elm.min);
                __max = this.percToPix(elm.max);
            }
super.random(elm.msDeltaStart ,elm.msDeltaEnd,__min,__max,elm.delayInMilliSec);
    }    
}
initJumpBetween(){
for (let i = 0; i < this.preInitJumpBetweens.length; i++) {
    const elm = this.preInitJumpBetweens[i];
    let __pointOne = elm.pointOne;
    let __pointTwo = elm.pointTwo;
        if ( this.usePercentages == true){
            __pointOne = this.percToPix(elm.pointOne);
            __pointTwo = this.percToPix(elm.pointTwo);
        }
super.jumpBetween(elm.msDeltaStart,elm.msDeltaEnd,__pointOne,__pointTwo,elm.delayInMS);
}    
}
initGoto(){
for (let i = 0; i < this.preInitGotos.length; i++) {
    const elm = this.preInitGotos[i];
    let v = elm.value;
    if ( this.usePercentages == true){
        v = this.percToPix(elm.value);
    }
    super.goto(elm.msDelta,v);
}      
}
initAnimate(){
for (let i = 0; i < this.preInitAnimates.length; i++) {
    const e= this.preInitAnimates[i];
        if ( this.usePercentages == true){
            super.animate(e.msDeltaStart,e.msDeltaEnd,this.percToPix(e.startValue),this.percToPix(e.endValue));
        }else {
            super.animate(e.msDeltaStart,e.msDeltaEnd, e.startValue, e.endValue);
        }
}      
}
//----------------------------------------------------------

}