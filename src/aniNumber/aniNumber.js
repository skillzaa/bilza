import Increment from "../filters/incDec/increment.js";
import Decrement from "../filters/incDec/decrement.js";
import Vibrate from "../filters/vibrate.js";
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
    runGoto(msDelta) {
        for (let i = 0; i < this.gotoArray.length; i++) {
            const gotoItem = this.gotoArray[i];
            if ((gotoItem.atFrame * 1000) <= msDelta) {
                this._value = gotoItem.value;
                this.gotoArray.splice(i, 1);
            }
        }
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
