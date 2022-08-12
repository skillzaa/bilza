import BaseFilter from "./baseFilter.js.js";
export default class Decrement extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue) {
        super(rTimeMsStart, rTimeMsEnd);
        if (startValue <= endValue) {
            throw new Error("end value can not be equal to or larger than start value in an decrement operation");
        }
        if (startValue < 0) {
            throw new Error("start value can not be less than zero in decrement operation");
        }
        this.startValue = startValue;
        this.endValue = endValue;
        this.timeDiff = Math.abs(this.rTimeMsStart - this.rTimeMsEnd);
        this.Xdiff = Math.abs(this.startValue - this.endValue);
    }
    update(rTimeMs, baseGotoValue = 0) {
        const timeLapsed = Math.ceil(rTimeMs - this.rTimeMsStart);
        const timeLapPercent = (timeLapsed / (this.timeDiff)) * 100;
        const timeLapPercDecrement = Math.abs(100 - timeLapPercent);
        const distanceLapsed = (this.Xdiff / 100) * timeLapPercDecrement;
        this._ret_val = Math.ceil(this.endValue + distanceLapsed);
        return true;
    }
    qualifyToRun(rTimeMs) {
        if (rTimeMs < this.rTimeMsStart || rTimeMs > this.rTimeMsEnd) {
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
