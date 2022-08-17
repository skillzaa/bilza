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
public animate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let inc = new Increment(rTimeMsStart * 1000,rTimeMsEnd * 1000,startValue,endValue,0);
        this.addFilter(inc);
    }else if (startValue > endValue){
        let dec = new Decrement(rTimeMsStart * 1000,rTimeMsEnd * 1000,startValue,endValue,0);
        this.addFilter(dec);
    }
    // else if (startValue == endValue){
    //     let c = new ConstantNo(from,to,startValue);
    //     this.filters.push(c);
    // }
}

public random(rTimeMsStart :number,rTimeMsEnd :number,min :number=0, max :number=100,delaySec :number=0){
const v = new Random(rTimeMsStart * 1000,rTimeMsEnd * 1000,min,max,delaySec * 1000);
this.addFilter(v);
}

public oscillate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number, endValue :number,secPerIter :number= 1,stopAt=endValue){
const v = new Oscillate(rTimeMsStart * 1000,rTimeMsEnd * 1000,startValue,endValue,secPerIter * 1000,stopAt);
this.addFilter(v);  
}//oscialte

//---effects
public vibrate(rTimeMsStart :number,rTimeMsEnd :number,offset :number=10,delaySec :number= 100){
    // const v = new Vibrate(rTimeMsStart,rTimeMsEnd,offset,delayInMilliSec);
    // this.filters.push(v);
}
} 