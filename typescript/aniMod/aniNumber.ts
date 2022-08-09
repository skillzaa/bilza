// import AniProp from "../animationDesign/aniProp.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
// import Decrement from "./filters/decrement.js";
// import Vibrate from "./filters/vibrate.js";
// import JumpBetween from "./filters/jumpBetween.js";
// import SetOnce from "./filters/setOnce_goto.js";
// import RandomNo from "./filters/randomNo.js";
// import ConstantNo from "./filters/constantNo.js";
// import Oscillate from "./filters/oscillate.js"; 

import GotoData from "./gotoData.js";
import IFilter from "./IFilter.js";

export default class AniNumber  {

private _value :number; 
private gotoArray :GotoData[];                
private filters :IFilter[];                
public readonly defaultValue :number;
public readonly minValue :number;
public readonly maxValue :number;

//--no need for default value-the number-0 is default value
constructor(initialValue :number=0,minValue :number=0,maxValue :number=100){
this._value  = initialValue; 
this.defaultValue = 0;
this.minValue  = minValue; 
this.maxValue  = maxValue; 
this.gotoArray  = []; 
this.filters  = []; 
}


public value(msDelta :number):number{
//---STEP-ONE -Every time value is calc from default value    
this._value = this.defaultValue; 

//---STEP-TWO-if has base goto apply that
const baseGotoValue = this.getBaseGotoValue(msDelta);
if (typeof baseGotoValue == "number"){
    this._value = baseGotoValue;   
}

//---step-three - runFilters will alwys return number either change it or not
this._value = this.runFilters(msDelta , this._value);
//------------------------------------------
return this._value;
}
/**
 * 9-aug-2022
 * runFilters will take in baseGotoValue and return (always) a number either the same baseGotoValue or change it depending upon what the filters do.
 * It will run all the filters which qualifyToRun() feeding the first one baseGotoValue and the next one what ever is the outcome of the prev iteration. 
 * The last and final result is returned.
 * The IFilter value() return number | null;--> When a filter qualify to run but do not want its result to be counted in (for some reason). In that case the filter value() can return null which will not be included at aniNumber.runFilters().
 * Why returning a null is better:: We can also make the filter return the oldValue (since ever filter gets the previous value which it can either take into considereation or not) BUT in that case the return value may get changed unintentionally so returning a null is better.
 */
private runFilters(msDelta :number , baseGotoValue :number):number{
let rez  =  baseGotoValue;

    for (let i = 0; i < this.filters.length; i++) {
        const ani = this.filters[i];
        if (ani.qualifyToRun(msDelta) == false) {continue;}
        let v  = ani.value(msDelta,rez); 
            if ( v != null){
                rez = v;
            }
} 
return rez;
}

private getBaseGotoValue(msDelta :number):number | null{
if (this.gotoArray.length < 1){return null;}    

let frame = 0;
let rez :number | null = null;

    for (let i = 0; i < this.gotoArray.length; i++) {
        const elm = this.gotoArray[i];
        if ( msDelta >= (elm.msDelta )  ){
            if ( (elm.msDelta ) >= frame ) {
                //--for next iteration
                    frame = (elm.msDelta);
                //--the value                    
                    rez = elm.value;
            }
        }   
    }
return rez;    
}
//--when deeply nested we use set to set the initial value. This vaue will be over-written after start();
public set(n :number):number{
 this._value = n;
 return this._value;
} 
public goto(msDelta :number,value :number=0){
    const v = new GotoData(msDelta,value);
    this.gotoArray.push(v);
}

public animate(msDeltaStart :number,msDeltaEnd :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        this.goto(msDeltaStart,startValue);
        this.goto(msDeltaEnd,endValue);
        let c = new Increment(msDeltaStart + 1,msDeltaEnd -1,startValue,endValue);
        this.filters.push(c);
    }else if (startValue > endValue){
        let c = new Decrement(msDeltaStart,msDeltaEnd,startValue,endValue);
        this.filters.push(c);
    }
    // else if (startValue == endValue){
    //     let c = new ConstantNo(from,to,startValue);
    //     this.filters.push(c);
    // }
//--- This goto is to ensure that the last frame is met
// this.goto(to , endValue );    
}

// public vibrate(from :number,to :number,seed :number=10,offset :number=10,delay :number=0){
//     const v = new Vibrate(from,to,seed,offset,delay);
//     this.filters.push(v);
// }

// public jumpBetween(startTimeSec :number,endTimeSec :number,pointOne :number=1, pointTwo :number=10,everyXFrame :number=0){
//     const v = new JumpBetween(startTimeSec,endTimeSec,pointOne, pointTwo,everyXFrame);
//     this.filters.push(v);
// }

// public random(startTimeSec :number,endTimeSec :number,min :number=0, max :number=100,everyXFrame :number=0){
// const v = new RandomNo(startTimeSec,endTimeSec,min, max,everyXFrame);
// this.filters.push(v);
// }
// public oscillate(startTimeSec :number,endTimeSec :number,startValue :number=1, endValue :number=10,speed :number= 1){
// const v = new Oscillate(startTimeSec,endTimeSec,startValue, endValue,speed);
// this.filters.push(v);
// }

} 