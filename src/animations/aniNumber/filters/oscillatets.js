import BaseFilter from "../../filters/baseFilter.js";
import Increment from "./increment.js";
import Decrement from "./decrement.js";
export default class Oscillate extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, secPerIter = 1, stopAt = endValue) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, secPerIter);
        this.incDecArray = [];
        this.afterValue = stopAt;
        const timeDiff = this.timeDiff();
        const noOfIter = Math.floor(timeDiff / this.delay.delayValue);
        let stratWithInc = (startValue < endValue) ? true : false;
        for (let i = 0; i < noOfIter; i++) {
            if (stratWithInc == true) {
                stratWithInc = !stratWithInc;
                const thisStartTime = this.startTimeMs + (i * this.delay.delayValue);
                const thisEndTime = thisStartTime + this.delay.delayValue;
                let inc = new Increment(thisStartTime, thisEndTime, startValue, endValue);
                this.incDecArray.push(inc);
            }
            else {
                stratWithInc = !stratWithInc;
                const thisStartTime = this.startTimeMs + (i * this.delay.delayValue);
                const thisEndTime = thisStartTime + this.delay.delayValue;
                let inc = new Decrement(thisStartTime, thisEndTime, endValue, startValue);
                this.incDecArray.push(inc);
            }
        }
    }
    update(rTimeMs) {
        for (let i = 0; i < this.incDecArray.length; i++) {
            const elm = this.incDecArray[i];
            if (elm.startTimeMs < rTimeMs && elm.endTimeMs > rTimeMs) {
                elm.update(rTimeMs);
                this._animatedValue = elm.filterValue();
                return true;
            }
        }
        return true;
    }
}
