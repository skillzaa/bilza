import Increment from "./filters/increment.js";
import Decrement from "./filters/decrement.js";
import Vibrate from "./filters/vibrate.js";
import JumpBetween from "./filters/jumpBetween.js";
import SetOnce from "./filters/setOnce_goto.js";
import RandomNo from "./filters/randomNo.js";
import ConstantNo from "./filters/constantNo.js";
export default class AniNumber {
    constructor(defaultValue = 0) {
        this._value = defaultValue;
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
    _animate(from, to, startValue, endValue) {
        if (startValue < endValue) {
            let c = new Increment(from, to, startValue, endValue);
            this.filters.push(c);
        }
        else if (startValue > endValue) {
            let c = new Decrement(from, to, startValue, endValue);
            this.filters.push(c);
        }
        else if (startValue == endValue) {
            let c = new ConstantNo(from, to, startValue);
            this.filters.push(c);
        }
    }
    _vibrate(from, to, seed = 10, offset = 10, delay = 0) {
        const v = new Vibrate(from, to, seed, offset, delay);
        this.filters.push(v);
    }
    _jumpBetween(startTimeSec, endTimeSec, pointOne = 1, pointTwo = 10, everyXFrame = 0) {
        const v = new JumpBetween(startTimeSec, endTimeSec, pointOne, pointTwo, everyXFrame);
        this.filters.push(v);
    }
    _random(startTimeSec, endTimeSec, min = 0, max = 100, everyXFrame = 0) {
        const v = new RandomNo(startTimeSec, endTimeSec, min, max, everyXFrame);
        this.filters.push(v);
    }
    _goto(startTimeSec, theValue = 0) {
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
