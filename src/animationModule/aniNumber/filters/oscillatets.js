import BaseFilter from "../../filters/baseFilter.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
export default class Oscillate extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue = 1, endValue = 10, secPerIter = 1) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, secPerIter);
        this.incDecArray = [];
        const timeDiff = this.rTimeMsEnd - this.rTimeMsStart;
        const noOfIter = Math.floor(timeDiff / this.delay.delayValue);
        let stratWithInc = (startValue < endValue) ? true : false;
        for (let i = 0; i < noOfIter; i++) {
            if (stratWithInc == true) {
                stratWithInc = !stratWithInc;
                const thisStartTime = this.rTimeMsStart + (i * this.delay.delayValue);
                const thisEndTime = thisStartTime + this.delay.delayValue;
                let inc = new Increment(thisStartTime, thisEndTime, startValue, endValue);
                this.incDecArray.push(inc);
            }
            else {
                stratWithInc = !stratWithInc;
                const thisStartTime = this.rTimeMsStart + (i * this.delay.delayValue);
                const thisEndTime = thisStartTime + this.delay.delayValue;
                let inc = new Decrement(thisStartTime, thisEndTime, endValue, startValue);
                this.incDecArray.push(inc);
            }
        }
    }
    update(rTimeMs) {
        if (this.isBeyond(rTimeMs) == true) {
            return false;
        }
        for (let i = 0; i < this.incDecArray.length; i++) {
            const elm = this.incDecArray[i];
            if (elm.rTimeMsStart < rTimeMs && elm.rTimeMsEnd > rTimeMs) {
                elm.update(rTimeMs);
                this._animatedValue = elm.animatedValue();
                return true;
            }
        }
        return true;
    }
}
