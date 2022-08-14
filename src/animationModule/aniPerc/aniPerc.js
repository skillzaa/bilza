import AniProp from "../aniProp/aniProp.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import IdentityFilPerc from "./filters/identityFilPerc.js";
export default class AniPerc extends AniProp {
    constructor(initialValue = 0, responsive = true, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.defaultFilter = new IdentityFilPerc(0, 100, initialValue);
        this.canvasWidthHeight = null;
        this.filtersArr = [];
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.setResponsive(true);
    }
    setResponsive(tf) {
        this.defaultFilter.responsive = tf;
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            fil.responsive = tf;
        }
    }
    init(canvasWidthHeight) {
        this.canvasWidthHeight = canvasWidthHeight;
        this.defaultFilter.init(canvasWidthHeight);
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            fil.init(canvasWidthHeight);
        }
    }
    goto(rTimeMs, value) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil.rTimeMsStart == rTimeMs) {
                fil.setBaseValue(value);
                return true;
            }
        }
        const v = new IdentityFilPerc(rTimeMs, rTimeMs + 1000, value, 0);
        this.addFilter(v);
        return false;
    }
    animate(rTimeMsStart, rTimeMsEnd, startValue, endValue) {
        if (startValue < endValue) {
            let inc = new Increment(rTimeMsStart, rTimeMsEnd, startValue, 0, endValue);
            this.addFilter(inc);
            const stop = new IdentityFilPerc(rTimeMsEnd, rTimeMsEnd + 100000, endValue, 0);
            this.addFilter(stop);
        }
        else if (startValue > endValue) {
            let dec = new Decrement(rTimeMsStart, rTimeMsEnd, startValue, 0, endValue);
            this.addFilter(dec);
            const stop = new IdentityFilPerc(rTimeMsEnd, rTimeMsEnd + 100000, endValue, 0);
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
