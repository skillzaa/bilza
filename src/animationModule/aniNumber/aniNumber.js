import AniProp from "../aniProp/aniProp.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Random from "./filters/random.js";
import Oscillate from "./filters/oscillatets.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.isResp = false;
        this.theWhole = null;
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    init(theWhole) {
        this.theWhole = theWhole;
    }
    isResponsive() {
        return this.isResp;
    }
    setResponsive() {
        this.isResp = true;
    }
    setNonResponsive() {
        this.isResp = false;
    }
    value() {
        if (this._value == null) {
            if (this.isResp == false) {
                return this.defaultFilter.animatedValue();
            }
            else {
                return this.responsiveValue(this.defaultFilter.animatedValue());
            }
        }
        else {
            if (this.isResp == false) {
                return this._value;
            }
            else {
                return this.responsiveValue(this._value);
            }
        }
    }
    valueNR() {
        if (this._value == null) {
            return this.defaultFilter.animatedValue();
        }
        else {
            return this._value;
        }
    }
    responsiveValue(perc) {
        if (this.theWhole == null) {
            throw new Error("theWhole is null");
        }
        return ((this.theWhole / 100) * perc);
    }
    animate(StartSec, endSec, startValue, endValue) {
        if (startValue < endValue) {
            let inc = new Increment(StartSec * 1000, endSec * 1000, startValue, endValue, 0);
            this.addFilter(inc);
        }
        else if (startValue > endValue) {
            let dec = new Decrement(StartSec * 1000, endSec * 1000, startValue, endValue, 0);
            this.addFilter(dec);
        }
    }
    random(StartSec, endSec, min = 0, max = 100, delayInMs = 10) {
        const v = new Random(StartSec * 1000, endSec * 1000, min, max, delayInMs);
        this.addFilter(v);
    }
    oscillate(StartSec, endSec, startValue, endValue, secPerIter = 1, stopAt = endValue) {
        if (startValue > endValue) {
            throw new Error("for oscillate operation the startValue can not be bigger than endValue, however in future this restriction may be lifted.");
        }
        const v = new Oscillate(StartSec * 1000, endSec * 1000, startValue, endValue, secPerIter * 1000, stopAt);
        this.addFilter(v);
    }
    vibrate(rTimeMsStart, rTimeMsEnd, offset = 10, delaySec = 100) {
    }
}
