import AniProp from "../aniProp/aniProp.js";
import Increment from "./filters/increment.js";
// import ConstantVal from "./filters/constantVal.js";
import IdentityFil from "../filters/identityFil.js";
import Decrement from "./filters/decrement.js";
// import Vibrate from "./effFilters/vibrate.js";
// import RandomNo from "./aniFilters/randomNo.js";
// import JumpBetween from "./aniFilters/jumpBetween.js";
// import Oscillate from "./aniFilters/oscillate.js"; 


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
///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
public animate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let inc = new Increment(rTimeMsStart,rTimeMsEnd,startValue,0,endValue);
        this.addFilter(inc);
        //--- The stop filter
        //- the generic IdentityFil works without <number> as well
        const stop = new IdentityFil <number>(rTimeMsEnd,rTimeMsEnd + 100000,endValue,0);
            this.addFilter(stop);
    }else if (startValue > endValue){
        let dec = new Decrement(rTimeMsStart,rTimeMsEnd,startValue,0,endValue);
        this.addFilter(dec);
        //--- The stop filter
        const stop = new IdentityFil <number>(rTimeMsEnd,rTimeMsEnd + 100000,endValue,0);
            this.addFilter(stop);
    }
    // else if (startValue == endValue){
    //     let c = new ConstantNo(from,to,startValue);
    //     this.filters.push(c);
    // }
//--- This goto is to ensure that the last frame is met
// this.goto(to , endValue );    
}

public random(rTimeMsStart :number,rTimeMsEnd :number,min :number=0, max :number=100,delayInMilliSec :number=0){
// const v = new RandomNo(rTimeMsStart,rTimeMsEnd,min,max,delayInMilliSec);
// this.filters.push(v);
}

public oscillate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number=1, endValue :number=10,speed :number= 1){
// const v = new Oscillate(rTimeMsStart,rTimeMsEnd,startValue, endValue,speed);
// this.filters.push(v);
}

//---effects
public vibrate(rTimeMsStart :number,rTimeMsEnd :number,offset :number=10,delayInMilliSec :number= 100){
    // const v = new Vibrate(rTimeMsStart,rTimeMsEnd,offset,delayInMilliSec);
    // this.filters.push(v);
}
} 