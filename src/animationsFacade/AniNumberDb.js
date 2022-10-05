import AniPropDb from "./AniPropDb.js";
import Increment from "../animations/filters/increment.js";
import Decrement from "../animations/filters/decrement.js";
import Random from "../animations/filters/random.js";
import Oscillate from "../animations/filters/oscillatets.js";
export default class AniNumberDb extends AniPropDb {
    constructor(initialValue) {
        super(initialValue);
        this._isResp = false;
        this.theWhole = null;
    }
    init(theWhole) {
        this.theWhole = theWhole;
    }
    setResp(tf) {
        this._isResp = tf;
    }
    isResponsive() {
        return this._isResp;
    }
    value() {
        if (this._isResp == false) {
            return super.value();
        }
        else {
            return this.responsiveValue(super.value());
        }
    }
    valueRaw() {
        return super.value();
    }
    responsiveValue(perc) {
        if (this.theWhole == null) {
            throw new Error("init error");
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
