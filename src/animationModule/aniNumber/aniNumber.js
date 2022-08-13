import AniProp from "../aniProp/aniProp.js";
import Increment from "./filters/increment.js";
import ConstantVal from "./filters/constantVal.js";
import Decrement from "./filters/decrement.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    goto(rTimeMs, value) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil.rTimeMsStart == rTimeMs) {
                fil.setBaseValue(value);
                return true;
            }
        }
        const v = new ConstantVal(rTimeMs, rTimeMs + 1000, value, 0);
        this.addFilter(v);
        return false;
    }
    animate(rTimeMsStart, rTimeMsEnd, startValue, endValue) {
        if (startValue < endValue) {
            let inc = new Increment(rTimeMsStart, rTimeMsEnd, startValue, 0, endValue);
            this.addFilter(inc);
            const stop = new ConstantVal(rTimeMsEnd, rTimeMsEnd + 100000, endValue, 0);
            this.addFilter(stop);
        }
        else if (startValue > endValue) {
            let dec = new Decrement(rTimeMsStart, rTimeMsEnd, startValue, 0, endValue);
            this.addFilter(dec);
            const stop = new ConstantVal(rTimeMsEnd, rTimeMsEnd + 100000, endValue, 0);
            this.addFilter(stop);
        }
    }
    random(rTimeMsStart, rTimeMsEnd, min = 0, max = 100, delayInMilliSec = 0) {
    }
    jumpBetween(rTimeMsStart, rTimeMsEnd, pointOne = 1, pointTwo = 10, delayInMilliSec = 0) {
    }
    oscillate(rTimeMsStart, rTimeMsEnd, startValue = 1, endValue = 10, speed = 1) {
    }
    vibrate(rTimeMsStart, rTimeMsEnd, offset = 10, delayInMilliSec = 100) {
    }
}
