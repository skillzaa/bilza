import Increment from "../filters/incDec/increment.js";
import Decrement from "../filters/incDec/decrement.js";
import Vibrate from "../filters/vibrate.js";
import JumpBetween from "../filters/jumpBetween.js";
import SetOnce from "../filters/setOnce_goto.js";
import RandomNo from "../filters/randomNo.js";
export default class AniNumber {
    constructor(defaultValue = 0) {
        this._value = defaultValue;
        this.preInitIncDec = [];
        this.gotoArray = [];
        this.filters = [];
    }
    update(msDelta) {
        this.runFilters(msDelta);
        return true;
    }
    value() {
        return this._value;
    }
    set(n) {
        this._value = n;
        return this._value;
    }
    animate(from, to, startValue, endValue) {
        if (startValue < endValue) {
            let c = new Increment(from, to, startValue, endValue);
            this.filters.push(c);
        }
        else {
            let c = new Decrement(from, to, startValue, endValue);
            this.filters.push(c);
        }
    }
    vibrate(from, to, seed = 10, offset = 10, delay = 0) {
        const v = new Vibrate(from, to, seed, offset, delay);
        this.filters.push(v);
    }
    jumpBetween(startTimeSec, endTimeSec, pointOne = 1, pointTwo = 10, everyXFrame = 0) {
        const v = new JumpBetween(startTimeSec, endTimeSec, pointOne, pointTwo, everyXFrame);
        this.filters.push(v);
    }
    random(startTimeSec, endTimeSec, min = 0, max = 100, everyXFrame = 0) {
        const v = new RandomNo(startTimeSec, endTimeSec, min, max, everyXFrame);
        this.filters.push(v);
    }
    goto(startTimeSec, theValue = 0) {
        const v = new SetOnce(startTimeSec, theValue);
        this.filters.push(v);
    }
    runFilters(msDelta) {
        for (let i = 0; i < this.filters.length; i++) {
            const ani = this.filters[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._value = v;
            }
        }
    }
}
