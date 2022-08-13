import BaseNumberFilter from "./baseNumberFilter.js";
export default class Increment extends BaseNumberFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0, endValue) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
        this.endValue = endValue;
        if (this.baseValue >= this.endValue) {
            throw new Error("start value can not be equal to or larger than end value in an increment operation");
        }
        this.timeDiff = Math.abs(this.rTimeMsEnd - this.rTimeMsStart);
    }
    update(rTimeMs) {
        const Xdiff = Math.abs(this.baseValue - this.endValue);
        const timeLapsed = Math.ceil(rTimeMs - this.rTimeMsStart);
        const timeLapPercent = (timeLapsed / (this.timeDiff)) * 100;
        const distanceLapsed = (Xdiff / 100) * timeLapPercent;
        this._animatedValue = this.baseValue + parseFloat(distanceLapsed.toFixed(2));
        return true;
    }
    init(canvasWidthHeight) {
        this.heightWidth = canvasWidthHeight;
        this.baseValue = this.percToPix(this.baseValue);
        this.endValue = this.percToPix(this.endValue);
        return true;
    }
}
