export default class BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, baseValue, delayInMS = 0) {
        this._animatedValue = null;
        this.delayInMS = delayInMS;
        this.delayInMSCounter = 0;
        this.baseValue = baseValue;
        if (msDeltaStart < 0 || msDeltaEnd < 0) {
            throw new Error("time can not be negative");
        }
        if (msDeltaEnd <= msDeltaStart) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        this.msDeltaStart = msDeltaStart;
        this.msDeltaEnd = msDeltaEnd;
    }
    update(msDelta) {
        return true;
    }
    animatedValue(msDelta) {
        return this.baseValue;
    }
}
