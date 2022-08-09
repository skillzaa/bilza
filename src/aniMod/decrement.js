export default class Decrement {
    constructor(msDeltaStart, msDeltaEnd, startValue, endValue) {
        if (msDeltaStart < 0 || msDeltaEnd < 0) {
            throw new Error("time can not be negative");
        }
        if (msDeltaEnd <= msDeltaStart) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        if (startValue <= endValue) {
            throw new Error("end value can not be equal to or larger than start value in an decrement operation");
        }
        if (startValue < 0) {
            throw new Error("start value can not be less than zero in decrement operation");
        }
        this.msDeltaStart = msDeltaStart;
        this.msDeltaEnd = msDeltaEnd;
        this.startValue = startValue;
        this.endValue = endValue;
        this.timeDiff = Math.abs(this.msDeltaStart - this.msDeltaEnd);
        this.Xdiff = Math.abs(this.startValue - this.endValue);
        this._ret_val = null;
    }
    value(msDelta, baseGotoValue = 0) {
        const timeLapsed = Math.ceil(msDelta - this.msDeltaStart);
        const timeLapPercent = (timeLapsed / (this.timeDiff)) * 100;
        const timeLapPercDecrement = Math.abs(100 - timeLapPercent);
        const distanceLapsed = (this.Xdiff / 100) * timeLapPercDecrement;
        this._ret_val = Math.ceil(this.endValue + distanceLapsed);
        return this._ret_val;
    }
    qualifyToRun(msDelta) {
        if (msDelta < this.msDeltaStart || msDelta > this.msDeltaEnd) {
            return false;
        }
        else {
            return true;
        }
    }
}
