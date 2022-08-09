import Increment from "./increment.js";
import Decrement from "./decrement.js";
import Vibrate from "./vibrate.js";
import RandomNo from "./randomNo.js";
import JumpBetween from "./jumpBetween.js";
import Oscillate from "./oscillate.js";
import GotoData from "./gotoData.js";
export default class AniNumber {
    constructor(initialValue = 0, minValue = 0, maxValue = 100) {
        this._value = initialValue;
        this.defaultValue = 0;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.gotoArray = [];
        this.filters = [];
    }
    value(msDelta) {
        this._value = this.defaultValue;
        const baseGotoValue = this.getBaseGotoValue(msDelta);
        if (typeof baseGotoValue == "number") {
            this._value = baseGotoValue;
        }
        this._value = this.runFilters(msDelta, this._value);
        return this._value;
    }
    runFilters(msDelta, baseGotoValue) {
        let rez = baseGotoValue;
        for (let i = 0; i < this.filters.length; i++) {
            const ani = this.filters[i];
            if (ani.qualifyToRun(msDelta) == false) {
                continue;
            }
            let v = ani.value(msDelta, rez);
            if (v != null) {
                rez = v;
            }
        }
        return rez;
    }
    getBaseGotoValue(msDelta) {
        if (this.gotoArray.length < 1) {
            return null;
        }
        let frame = 0;
        let rez = null;
        for (let i = 0; i < this.gotoArray.length; i++) {
            const elm = this.gotoArray[i];
            if (msDelta >= (elm.msDelta)) {
                if ((elm.msDelta) >= frame) {
                    frame = (elm.msDelta);
                    rez = elm.value;
                }
            }
        }
        return rez;
    }
    set(n) {
        this._value = n;
        return this._value;
    }
    goto(msDelta, value = 0) {
        const v = new GotoData(msDelta, value);
        this.gotoArray.push(v);
    }
    animate(msDeltaStart, msDeltaEnd, startValue, endValue) {
        if (startValue < endValue) {
            this.goto(msDeltaStart, startValue);
            this.goto(msDeltaEnd, endValue);
            let c = new Increment(msDeltaStart + 1, msDeltaEnd - 1, startValue, endValue);
            this.filters.push(c);
        }
        else if (startValue > endValue) {
            let c = new Decrement(msDeltaStart, msDeltaEnd, startValue, endValue);
            this.filters.push(c);
        }
    }
    vibrate(msDeltaStart, msDeltaEnd, offset = 10, delayInMilliSec = 100) {
        const v = new Vibrate(msDeltaStart, msDeltaEnd, offset, delayInMilliSec);
        this.filters.push(v);
    }
    random(msDeltaStart, msDeltaEnd, min = 0, max = 100, delayInMilliSec = 0) {
        const v = new RandomNo(msDeltaStart, msDeltaEnd, min, max, delayInMilliSec);
        this.filters.push(v);
    }
    jumpBetween(msDeltaStart, msDeltaEnd, pointOne = 1, pointTwo = 10, delayInMilliSec = 0) {
        const v = new JumpBetween(msDeltaStart, msDeltaEnd, pointOne, pointTwo, delayInMilliSec);
        this.filters.push(v);
    }
    oscillate(msDeltaStart, msDeltaEnd, startValue = 1, endValue = 10, speed = 1) {
        const v = new Oscillate(msDeltaStart, msDeltaEnd, startValue, endValue, speed);
        this.filters.push(v);
    }
}
