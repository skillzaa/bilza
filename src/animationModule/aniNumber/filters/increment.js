import BaseNumberFilter from "./baseNumberFilter.js";
export default class Increment extends BaseNumberFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, delayInMS);
        this.endValue = endValue;
        if (this.startValue >= this.endValue) {
            throw new Error("start value can not be equal to or larger than end value in an increment operation");
        }
        this.timeDiff = Math.abs(this.rTimeMsEnd - this.rTimeMsStart);
    }
    update(rTimeMs) {
        if (this.isBeyond(rTimeMs) == true) {
            return false;
        }
        const Xdiff = Math.abs(this.startValue - this.endValue);
        const timeLapsed = Math.ceil(rTimeMs - this.rTimeMsStart);
        const timeLapPercent = (timeLapsed / (this.timeDiff)) * 100;
        const distanceLapsed = (Xdiff / 100) * timeLapPercent;
        this._animatedValue = this.startValue + parseFloat(distanceLapsed.toFixed(2));
        return true;
    }
}
