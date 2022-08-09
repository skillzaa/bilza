import BaseFilter from "../baseFilter.js";
export default class Decrement extends BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, startValue, endValue) {
        super(msDeltaStart, msDeltaEnd);
        if (startValue <= endValue) {
            throw new Error("end value can not be equal to or larger than start value in an decrement operation");
        }
        if (startValue < 0) {
            throw new Error("start value can not be less than zero in decrement operation");
        }
        this.startValue = startValue;
        this.endValue = endValue;
        this.timeDiff = Math.abs(this.msDeltaStart - this.msDeltaEnd);
        this.Xdiff = Math.abs(this.startValue - this.endValue);
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
