import AniProp from "../aniProp/aniProp.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Random from "./filters/random.js";
import Oscillate from "./filters/oscillatets.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    animate(rTimeMsStart, rTimeMsEnd, startValue, endValue) {
        if (startValue < endValue) {
            let inc = new Increment(rTimeMsStart * 1000, rTimeMsEnd * 1000, startValue, endValue, 0);
            this.addFilter(inc);
        }
        else if (startValue > endValue) {
            let dec = new Decrement(rTimeMsStart * 1000, rTimeMsEnd * 1000, startValue, endValue, 0);
            this.addFilter(dec);
        }
    }
    random(rTimeMsStart, rTimeMsEnd, min = 0, max = 100, delayMs = 0) {
        const v = new Random(rTimeMsStart * 1000, rTimeMsEnd * 1000, min, max, delayMs);
        this.addFilter(v);
    }
    oscillate(rTimeMsStart, rTimeMsEnd, startValue, endValue, secPerIter = 1, stopAt = endValue) {
        if (startValue > endValue) {
            throw new Error("for oscillate operation the startValue can not be bigger than endValue, however in future this restriction may be lifted.");
        }
        const v = new Oscillate(rTimeMsStart * 1000, rTimeMsEnd * 1000, startValue, endValue, secPerIter * 1000, stopAt);
        this.addFilter(v);
    }
    vibrate(rTimeMsStart, rTimeMsEnd, offset = 10, delaySec = 100) {
    }
}
