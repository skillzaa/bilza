import AniNumber from "../aniNumber/aniNumber.js";
  
import PreInitRandom from "./designNoPerc/preInitRandom.js";
import PreInitJumpBetween from "./designNoPerc/preInitJumpBetween.js";
import PreInitOscilate from "./designNoPerc/preInitoscilate.js";

export default class AniNoPercBase extends AniNumber { 

protected usePercentages :boolean | null; 

protected preInitRandoms:PreInitRandom[];
protected preInitJumpBetweens:PreInitJumpBetween[];
protected preInitOscilate:PreInitOscilate[];
//----------------
public canvasWidthHeight :number | null;
  

constructor(defaultValue=0){
super(defaultValue);    

this.usePercentages = true; 
this.canvasWidthHeight =  null;

this.preInitRandoms = []; 
this.preInitJumpBetweens = [];
this.preInitOscilate = [];

}
//----------------------------------------------------------
// init(usePercentages :boolean,canvasWidthHeight :number){
// this.usePercentages = usePercentages;
// this.canvasWidthHeight = canvasWidthHeight;   

// this.initSet();    
// //----------------------------------
// for (let i = 0; i < this.filters.length; i++) {
//     const fil = this.filters[i];
//     fil.init(this.canvasWidthHeight);
// }
// //-- the init values set by set is converted once  

// // this.initGoto();
// // this.initAnimate();
// // this.initRandom();
// // this.initJumpBetween();

// } 
   

///////////////////////////////////////////////////////
public jumpBetween(msDeltaStart :number,msDeltaEnd :number,pointOne :number=1, pointTwo :number=10,delayInMS :number=0){
const c = new PreInitJumpBetween(msDeltaStart,msDeltaEnd,pointOne, pointTwo,delayInMS);    
this.preInitJumpBetweens.push(c);
}

public random(startTimeSec :number,endTimeSec :number,min :number=1, max :number=10,skipXFrames :number=0): void {
const c = new PreInitRandom (startTimeSec,endTimeSec,min, max,skipXFrames);
    this.preInitRandoms.push(c);
}

public oscillate(startTimeSec :number,endTimeSec :number,startValue :number=1, endValue :number=10,speed :number= 1){
const c = new PreInitOscilate(startTimeSec,endTimeSec,startValue, endValue,speed);
this.preInitOscilate.push(c);
}
////////////////////////////////////////////////////

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

//----------------------------------------------------------

}