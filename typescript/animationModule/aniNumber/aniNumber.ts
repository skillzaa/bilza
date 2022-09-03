import AniProp from "../aniProp/aniProp.js";
import IdentityFil from "../filters/identityFil.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Random from "./filters/random.js";
import Oscillate from "./filters/oscillatets.js";

// import Vibrate from "./effFilters/vibrate.js";

export default class AniNumber extends AniProp<number>  {
    
public readonly minValue :number;
public readonly maxValue :number;

constructor(initialValue :number=0, minValue :number=-3000,maxValue :number=3000){
 
super(initialValue);

this.minValue  = minValue; 
this.maxValue  = maxValue; 

}
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
public animate( StartSec :number, endSec :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let inc = new Increment(StartSec * 1000,endSec * 1000,startValue,endValue,0);
        this.addFilter(inc);
    }else if (startValue > endValue){
        let dec = new Decrement(StartSec * 1000,endSec * 1000,startValue,endValue,0);
        this.addFilter(dec);
    }
    // else if (startValue == endValue){
    //     let c = new ConstantNo(from,to,startValue);
    //     this.filters.push(c);
    // }
}

public random(StartSec :number,endSec :number,min :number=0, max :number=100, delayInMs :number=10){
const v = new Random(StartSec * 1000, endSec * 1000, min,max,delayInMs);
this.addFilter(v);
}

public oscillate(StartSec :number,endSec :number,startValue :number, endValue :number,secPerIter :number= 1,stopAt=endValue){
///-Bug 002
if (startValue > endValue ){
throw new Error("for oscillate operation the startValue can not be bigger than endValue, however in future this restriction may be lifted.");   
}    
const v = new Oscillate(StartSec * 1000,endSec * 1000,startValue,endValue,secPerIter * 1000,stopAt);
this.addFilter(v);  
}//oscialte

//---effects
public vibrate(rTimeMsStart :number,rTimeMsEnd :number,offset :number=10,delaySec :number= 100){
    // const v = new Vibrate(rTimeMsStart,rTimeMsEnd,offset,delayInMilliSec);
    // this.filters.push(v);
}
} 