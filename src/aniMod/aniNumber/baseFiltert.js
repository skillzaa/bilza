export default class BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, startValue, endValue) {
        if (msDeltaStart < 0 || msDeltaEnd < 0) {
            throw new Error("time can not be negative");
        }
        if (msDeltaEnd <= msDeltaStart) {
            throw new Error("end Time can not be equal or smaller than start time");
        }
        if (startValue >= endValue) {
            throw new Error("start value can not be equal to or larger than end value in an increment operation");
        }
        this.msDeltaStart = msDeltaStart;
        this.msDeltaEnd = msDeltaEnd;
        this.startValue = startValue;
        this.endValue = endValue;
        this.timeDiff = Math.abs(this.msDeltaEnd - this.msDeltaStart);
        this.Xdiff = Math.abs(this.startValue - this.endValue);
        this._ret_val = null;
    }
    value(msDelta, baseGotoValue = 0) {
        const timeLapsed = Math.ceil(msDelta - this.msDeltaStart);
        const timeLapPercent = (timeLapsed / (this.timeDiff)) * 100;
        const distanceLapsed = (this.Xdiff / 100) * timeLapPercent;
        this._ret_val = baseGotoValue + parseFloat(distanceLapsed.toFixed(2));
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
