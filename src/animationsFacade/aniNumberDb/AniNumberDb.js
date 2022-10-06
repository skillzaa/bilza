import AniPropDb from "../aniPropDb/AniPropDb.js";
import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Random from "./filters/random.js";
import Oscillate from "./filters/oscillatets.js";
import IdentityFil from "../filters/identityFil.js";
export default class AniNumberDb extends AniPropDb {
    constructor(initialValue) {
        super(initialValue);
        this._isResp = false;
        this.theWhole = null;
    }
    init(theWhole = null) {
        this.theWhole = theWhole;
    }
    setResp(tf, theWhole = null) {
        if (tf == true && theWhole == null) {
            throw new Error("to set prop value responsive please give 'width' , 'height' or a number ");
        }
        this.theWhole = theWhole;
        this._isResp = tf;
    }
    isResp() {
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
    goto(atSec, value) {
        if (this.isResp() == true) {
            value = this.responsiveValue(value);
        }
        const v = new IdentityFil(atSec * 1000, (atSec * 1000) + 1000, value);
        this.addFilter(v);
        return false;
    }
}
