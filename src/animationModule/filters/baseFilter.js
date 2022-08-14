export default class BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        this.baseValue = baseValue;
        this._animatedValue = null;
        this.delayInMS = delayInMS;
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
        return true;
    }
    setBaseValue(bv) {
        this.baseValue = bv;
        return this.baseValue;
    }
    animatedValue() {
        if (this._animatedValue == null) {
            return this.baseValue;
        }
        else {
            return this._animatedValue;
        }
    }
}
