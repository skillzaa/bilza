import Increment from "./increment.js";
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
            const runFilters = this.runFilters(msDelta, baseGotoValue);
            if (typeof runFilters == "number") {
                this._value = runFilters;
            }
        }
        return this._value;
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
    runFilters(msDelta, baseGotoValue) {
        for (let i = 0; i < this.filters.length; i++) {
            const ani = this.filters[i];
            let v = ani.value(msDelta, baseGotoValue);
            if (v != null) {
                this._value = v;
            }
        }
    }
    animate(msDeltaStart, msDeltaEnd, startValue, endValue) {
        if (startValue < endValue) {
            this.goto(msDeltaStart, startValue);
            this.goto(msDeltaEnd, endValue);
            let c = new Increment(msDeltaStart + 1, msDeltaEnd - 1, startValue, endValue);
            this.filters.push(c);
        }
        else if (startValue > endValue) {
        }
    }
}
