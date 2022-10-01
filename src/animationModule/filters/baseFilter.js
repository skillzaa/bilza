import Delay from "./delay.js";
export default class BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, delaySec = 0) {
        this.delay = new Delay(delaySec);
        this.startValue = startValue;
        this._animatedValue = null;
        this.endValue = endValue;
        this.beyondValue = endValue;
        this.delaySec = delaySec;
        if (rTimeMsStart < 0 || rTimeMsEnd < 0) {
            throw new Error("time can not be negative");
        }
        if (rTimeMsEnd <= rTimeMsStart) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        this.rTimeMsStart = rTimeMsStart;
        this.rTimeMsEnd = rTimeMsEnd;
    }
    update(rTimeMs) {
        false;
        return true;
    }
    isBeyond(rTimeMs) {
        if (rTimeMs > this.rTimeMsEnd) {
            this._animatedValue = this.beyondValue;
            return true;
        }
        else {
            return false;
        }
    }
    setBaseValue(bv) {
        this.startValue = bv;
        return this.startValue;
    }
    getBaseValue() {
        return this.startValue;
    }
    setBeyondValue(bv) {
        this.beyondValue = bv;
        return this.startValue;
    }
    getBeyondValue() {
        return this.beyondValue;
    }
    setEndValue(ev) {
        this.endValue = ev;
        return this.endValue;
    }
    getEndValue() {
        return this.endValue;
    }
    animatedValue() {
        if (this._animatedValue == null) {
            return this.startValue;
        }
        else {
            return this._animatedValue;
        }
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
