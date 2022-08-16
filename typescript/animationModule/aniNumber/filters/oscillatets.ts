import BaseFilter from "../../filters/baseFilter.js";  
import Increment from "./increment.js";
import Decrement from "./decrement.js";
import IFilter from "../../filters/IFilter.js";

export default class Oscillate extends BaseFilter<number> {

public  incDecArray :IFilter<number>[];

constructor(rTimeMsStart :number,rTimeMsEnd :number,startValue :number, endValue :number,secPerIter :number= 1,stopAt:number=endValue){

super(rTimeMsStart,rTimeMsEnd,startValue, endValue,secPerIter);  
this.incDecArray = [];
this.beyondValue = stopAt;
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
//--convert delay in sec
const timeDiff = this.rTimeMsEnd - this.rTimeMsStart;

//--------------------
const noOfIter = Math.floor( timeDiff / this.delay.delayValue);
// let finalNoOfIter:number;
// if ( timeDiff % this.delay.delayValue == 0 ){ 
//     // if even division then the last step will be on the last filter so reduce one since last filter is placed 
//     finalNoOfIter = noOfIter -1 ; 
// }else {
//     // if odd division then the last frame is already skipped due to math.floor
//     finalNoOfIter = noOfIter; 
// }
let stratWithInc:boolean = (startValue < endValue) ? true : false;

for (let i = 0; i < noOfIter ; i ++) {

if (stratWithInc == true){
    stratWithInc = !stratWithInc; //change
    const thisStartTime = this.rTimeMsStart + (i * this.delay.delayValue);
    const thisEndTime = thisStartTime + this.delay.delayValue;
    let inc = new Increment(thisStartTime,thisEndTime,startValue ,endValue);
    this.incDecArray.push(inc);
}else {
    stratWithInc = !stratWithInc; //change
    const thisStartTime = this.rTimeMsStart + (i * this.delay.delayValue);
    const thisEndTime = thisStartTime + this.delay.delayValue;
    let inc = new Decrement(thisStartTime,thisEndTime,endValue,startValue);
    this.incDecArray.push(inc);
}
// this.incDecArray[this.incDecArray.length -1].
}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
}

public update(rTimeMs :number):boolean{
//--importanttay    
if(this.isBeyond(rTimeMs) == true){return false;}

for (let i = 0; i < this.incDecArray.length; i++) {
    const elm = this.incDecArray[i];
    if (elm.rTimeMsStart < rTimeMs && elm.rTimeMsEnd > rTimeMs ){
        elm.update(rTimeMs);
        this._animatedValue = elm.animatedValue();
        return true;
    }
}
return true;

}

}
