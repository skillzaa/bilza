import BaseNumberFilter from "./baseNumberFilter.js";
export default class Decrement extends BaseNumberFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0, endValue) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
        this.endValue = endValue;
        if (this.baseValue <= this.endValue) {
            throw new Error("end value can not be equal to or larger than start value in an decrement operation");
        }
        if (this.baseValue < 0) {
            throw new Error("start value can not be less than zero in decrement operation");
        }
        this.timeDiff = Math.abs(this.rTimeMsStart - this.rTimeMsEnd);
    }
    update(rTimeMs, baseGotoValue = 0) {
        const Xdiff = Math.abs(this.baseValue - this.endValue);
        const timeLapsed = Math.ceil(rTimeMs - this.rTimeMsStart);
        const timeLapPercent = (timeLapsed / (this.timeDiff)) * 100;
        const timeLapPercDecrement = Math.abs(100 - timeLapPercent);
        const distanceLapsed = (Xdiff / 100) * timeLapPercDecrement;
        this._animatedValue = Math.ceil(this.endValue + distanceLapsed);
        return true;
    }
    init(canvasWidthHeight) {
        this.baseValue = this.percToPix(canvasWidthHeight, this.baseValue);
        this.endValue = this.percToPix(canvasWidthHeight, this.endValue);
        return true;
    }
}
