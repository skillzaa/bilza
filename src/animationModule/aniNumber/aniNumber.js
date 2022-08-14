import AniProp from "../aniProp/aniProp.js";
import Increment from "./filters/increment.js";
import IdentityFil from "../filters/identityFil.js";
import Decrement from "./filters/decrement.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    animate(rTimeMsStart, rTimeMsEnd, startValue, endValue) {
        if (startValue < endValue) {
            let inc = new Increment(rTimeMsStart, rTimeMsEnd, startValue, 0, endValue);
            this.addFilter(inc);
            const stop = new IdentityFil(rTimeMsEnd, rTimeMsEnd + 100000, endValue, 0);
            this.addFilter(stop);
        }
        else if (startValue > endValue) {
            let dec = new Decrement(rTimeMsStart, rTimeMsEnd, startValue, 0, endValue);
            this.addFilter(dec);
            const stop = new IdentityFil(rTimeMsEnd, rTimeMsEnd + 100000, endValue, 0);
            this.addFilter(stop);
        }
    }
    random(rTimeMsStart, rTimeMsEnd, min = 0, max = 100, delayInMilliSec = 0) {
    }
    oscillate(rTimeMsStart, rTimeMsEnd, startValue = 1, endValue = 10, speed = 1) {
    }
    vibrate(rTimeMsStart, rTimeMsEnd, offset = 10, delayInMilliSec = 100) {
    }
}
