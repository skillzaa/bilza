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
                fil.baseValue = value;
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
        }
        else if (startValue > endValue) {
            let dec = new Decrement(rTimeMsStart, rTimeMsEnd, startValue, 0, endValue);
            this.addFilter(dec);
        }
    }
}
