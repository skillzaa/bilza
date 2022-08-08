// import AniProp from "../animationDesign/aniProp.js";
import Increment from "./increment.js";
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
// update(msDelta :number):boolean{
// this.runFilters(msDelta);
// return true;    
// }
public value(msDelta :number):number{
//---Every time value is calc from default value    
this._value = this.defaultValue;    
//--------This is where the animation happen
//---STEP-ONE-if has base goto apply that
const baseGotoValue = this.getBaseGotoValue(msDelta);
if (typeof baseGotoValue == "number"){
    this._value = baseGotoValue;
    
    const runFilters = this.runFilters(msDelta , baseGotoValue);

    if (typeof runFilters == "number"){
        this._value = runFilters;
    }
}

//------------------------------------------
return this._value;
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
private runFilters(msDelta :number , baseGotoValue :number){
    for (let i = 0; i < this.filters.length; i++) {
        const ani = this.filters[i];

        let v  = ani.value(msDelta,baseGotoValue); 
            if ( v != null){
                this._value = v;
            }
} 
}

public animate(msDeltaStart :number,msDeltaEnd :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        this.goto(msDeltaStart,startValue);
        this.goto(msDeltaEnd,endValue);
        let c = new Increment(msDeltaStart + 1,msDeltaEnd -1,startValue,endValue);
        this.filters.push(c);
    }else if (startValue > endValue){
        // let c = new Decrement(from,to,startValue,endValue);
        // this.filters.push(c);
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