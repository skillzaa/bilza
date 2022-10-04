import Delay from "./delay.js";
export default class BaseFilter {
    constructor(startTimeMs, endTimeMs, startValue, endValue, delaySec = 0) {
        this.delay = new Delay(delaySec);
        this.startValue = startValue;
        this.endValue = endValue;
        this.afterValue = null;
        this._animatedValue = null;
        if (startTimeMs < 0 || endTimeMs < 0) {
            throw new Error("time can not be negative");
        }
        if (endTimeMs <= startTimeMs) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        this.startTimeMs = startTimeMs;
        this.endTimeMs = endTimeMs;
    }
    update(rTimeMs) {
        if (this.isBefore(rTimeMs) == true) {
            this._animatedValue = null;
            return false;
        }
        if (this.isAfter(rTimeMs) == true) {
            this._animatedValue = this.getAfterValue();
            return false;
        }
        return true;
    }
    isAfter(rTimeMs) {
        if (rTimeMs > this.endTimeMs) {
            return true;
        }
        else {
            return false;
        }
    }
    isBefore(rTimeMs) {
        if (rTimeMs < this.startTimeMs) {
            return true;
        }
        else {
            return false;
        }
    }
    filterValue() {
        if (this._animatedValue == null) {
            return this.startValue;
        }
        else {
            return this._animatedValue;
        }
    }
    timeDiff() {
        return Math.abs(this.startTimeMs - this.endTimeMs);
    }
    getStartValue() {
        return this.startValue;
    }
    getEndValue() {
        return this.endValue;
    }
    setAnimatedValue(val) {
        this._animatedValue = val;
        return this._animatedValue;
    }
    getAnimatedValue() {
        return this._animatedValue;
    }
    getAfterValue() {
        if (this.afterValue !== null) {
            return this.afterValue;
        }
        else {
            return this.endValue;
        }
    }
    setAfterValue(val) {
        this.afterValue = val;
        return this.afterValue;
    }
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
