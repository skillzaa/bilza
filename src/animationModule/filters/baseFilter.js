export default class BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        this.baseValue = baseValue;
        this._animatedValue = baseValue;
        this.delayInMS = delayInMS;
        this.delayInMSCounter = 0;
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
    animatedValue(rTimeMs) {
        if (this._animatedValue == this.baseValue) {
            return this.baseValue;
        }
        else {
            return this._animatedValue;
        }
    }
}
