import AniProp from "../aniProp/aniProp.js";
import Increment from "./numberFilters/increment.js";
import ConstantVal from "./numberFilters/constantVal.js";
import Decrement from "./numberFilters/decrement.js";
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
public goto(rTimeMs :number,value :number):boolean{
//--first search if the frame already exists or not if it do then dont duplicate
//--NO DUBLICATE FRAME NUMBERS ALLOWED IN GOTOARRAY 
    for (let i = 0; i < this.filtersArr.length; i++) {
        const fil = this.filtersArr[i];
        if (fil.rTimeMsStart == rTimeMs){
            fil.baseValue = value;
            return true; // goto frame edited and not added
        }
    }
    //---The value is base value for filter
    const v = new ConstantVal(rTimeMs,rTimeMs + 1000,value,0);
    this.addFilter(v);
    return false;//// new goto frame ADDED 
}

public animate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number,endValue :number){
    if (startValue < endValue ){
        let inc = new Increment(rTimeMsStart,rTimeMsEnd,startValue,0,endValue);
        this.addFilter(inc);

    }else if (startValue > endValue){
        let dec = new Decrement(rTimeMsStart,rTimeMsEnd,startValue,0,endValue);
        this.addFilter(dec);
    }
    // else if (startValue == endValue){
    //     let c = new ConstantNo(from,to,startValue);
    //     this.filters.push(c);
    // }
//--- This goto is to ensure that the last frame is met
// this.goto(to , endValue );    
}

// public random(rTimeMsStart :number,rTimeMsEnd :number,min :number=0, max :number=100,delayInMilliSec :number=0){
// const v = new RandomNo(rTimeMsStart,rTimeMsEnd,min,max,delayInMilliSec);
// // this.filters.push(v);
// }
// public jumpBetween(rTimeMsStart :number,rTimeMsEnd :number,pointOne :number=1, pointTwo :number=10,delayInMilliSec :number=0){
//     const v = new JumpBetween(rTimeMsStart,rTimeMsEnd,pointOne, pointTwo,delayInMilliSec);
//     // this.filters.push(v);
// }

// public oscillate(rTimeMsStart :number,rTimeMsEnd :number,startValue :number=1, endValue :number=10,speed :number= 1){
// const v = new Oscillate(rTimeMsStart,rTimeMsEnd,startValue, endValue,speed);
// // this.filters.push(v);
// }

//---effects
// public vibrate(rTimeMsStart :number,rTimeMsEnd :number,offset :number=10,delayInMilliSec :number= 100){
//     const v = new Vibrate(rTimeMsStart,rTimeMsEnd,offset,delayInMilliSec);
//     this.filters.push(v);
// }
} 