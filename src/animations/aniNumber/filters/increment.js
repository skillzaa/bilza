import BaseNumberFilter from "./baseNumberFilter.js";
export default class Increment extends BaseNumberFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, delayInMS);
        if (this.startValue >= this.endValue) {
            throw new Error("start value can not be equal to or larger than end value in an increment operation");
        }
    }
    update(rTimeMs) {
        const Xdiff = Math.abs(this.startValue - this.endValue);
        const timeLapsed = Math.ceil(rTimeMs - this.startTimeMs);
        const timeLapPercent = (timeLapsed / (this.timeDiff())) * 100;
        const distanceLapsed = (Xdiff / 100) * timeLapPercent;
        this._animatedValue = this.startValue + parseFloat(distanceLapsed.toFixed(2));
        return;
    }
}
