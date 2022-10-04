import Delay from "./delay.js";
export default class BaseFilter {
    constructor(startTimeMs, endTimeMs, startValue, endValue, afterValue = endValue, delaySec = 0) {
        this.delay = new Delay(delaySec);
        this.delaySec = delaySec;
        this.startValue = startValue;
        this.endValue = endValue;
        this.afterValue = afterValue;
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
            return;
        }
        if (this.isAfter(rTimeMs) == true) {
            this._animatedValue = this.afterValue;
            return;
        }
        return;
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
    getRandom(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}
