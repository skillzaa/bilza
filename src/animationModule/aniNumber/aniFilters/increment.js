import BaseFilter from "./baseFilter.js";
export default class Increment extends BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, startValue, endValue) {
        super(msDeltaStart, msDeltaEnd);
        if (startValue >= endValue) {
            throw new Error("start value can not be equal to or larger than end value in an increment operation");
        }
        this.startValue = startValue;
        this.endValue = endValue;
        this.timeDiff = Math.abs(this.msDeltaEnd - this.msDeltaStart);
        this.Xdiff = Math.abs(this.startValue - this.endValue);
    }
    update(msDelta) {
        const timeLapsed = Math.ceil(msDelta - this.msDeltaStart);
        const timeLapPercent = (timeLapsed / (this.timeDiff)) * 100;
        const distanceLapsed = (this.Xdiff / 100) * timeLapPercent;
        this._ret_val = this.startValue + parseFloat(distanceLapsed.toFixed(2));
        return true;
    }
    qualifyToRun(msDelta) {
        if (msDelta < this.msDeltaStart || msDelta > this.msDeltaEnd) {
            return false;
        }
        else {
            return true;
        }
    }
    init(canvasWidthHeight) {
        this.startValue = this.percToPix(canvasWidthHeight, this.startValue);
        this.endValue = this.percToPix(canvasWidthHeight, this.endValue);
        return true;
    }
}
