import BaseNumberFilter from "./baseNumberFilter.js";
export default class Decrement extends BaseNumberFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, delayInMS);
        if (this.startValue <= this.endValue) {
            throw new Error("end value can not be equal to or larger than start value in an decrement operation");
        }
        if (this.startValue < 0) {
            throw new Error("start value can not be less than zero in decrement operation");
        }
    }
    update(rTimeMs, baseGotoValue = 0) {
        const Xdiff = Math.abs(this.startValue - this.endValue);
        const timeLapsed = Math.ceil(rTimeMs - this.startTimeMs);
        const timeLapPercent = (timeLapsed / (this.timeDiff())) * 100;
        const timeLapPercDecrement = Math.abs(100 - timeLapPercent);
        const distanceLapsed = (Xdiff / 100) * timeLapPercDecrement;
        this._animatedValue = Math.ceil(this.endValue + distanceLapsed);
        return true;
    }
}
