import BaseFilter from "../../filters/baseFilter.js";  
import Increment from "./increment.js";
import Decrement from "./decrement.js";

export default class Oscillate extends BaseFilter<number> {

public  incDecArray :BaseFilter<number>[];

constructor(rTimeMsStart :number,rTimeMsEnd :number,startValue :number, endValue :number,secPerIter :number= 1,stopAt:number=endValue){

super(rTimeMsStart,rTimeMsEnd,startValue, endValue,secPerIter);  
this.incDecArray = [];
this.setAfterValue(stopAt);
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
const noOfIter = Math.floor( this.timeDiff() / this.delay.delayValue);
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
let stratWithInc:boolean = (startValue < endValue) ? true : false;

for (let i = 0; i < noOfIter ; i ++) {

if (stratWithInc == true)
{
    stratWithInc = !stratWithInc; //change
    const thisStartTime = this.startTimeMs + (i * this.delay.delayValue);
    const thisEndTime = thisStartTime + this.delay.delayValue;
    let inc = new Increment(thisStartTime,thisEndTime,startValue ,endValue);
    this.incDecArray.push(inc);
}   else {
    stratWithInc = !stratWithInc; //change
    const thisStartTime = this.startTimeMs + (i * this.delay.delayValue);
    const thisEndTime = thisStartTime + this.delay.delayValue;
    let inc = new Decrement(thisStartTime,thisEndTime,endValue,startValue);
    this.incDecArray.push(inc);
}

}
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!1
}

public update(rTimeMs :number):boolean{
if (super.update(rTimeMs) == false ){ return false;}    
////////////////////////////////////////////////    

for (let i = 0; i < this.incDecArray.length; i++) {
    const elm = this.incDecArray[i];
    if (elm.startTimeMs < rTimeMs && elm.endTimeMs > rTimeMs ){
        elm.update(rTimeMs);
        this.setAnimatedValue ( elm.filterValue());
        return true;
    }
}
return true;

}

}
