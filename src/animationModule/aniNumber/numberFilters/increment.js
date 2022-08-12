import BaseFilter from "../../filters/baseFilter.js";
export default class Increment extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0, endValue) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
        this.endValue = endValue;
        if (this.baseValue >= this.endValue) {
            throw new Error("start value can not be equal to or larger than end value in an increment operation");
        }
        this.timeDiff = Math.abs(this.rTimeMsEnd - this.rTimeMsStart);
        this.Xdiff = Math.abs(this.baseValue - this.endValue);
    }
    update(rTimeMs) {
        const timeLapsed = Math.ceil(rTimeMs - this.rTimeMsStart);
        const timeLapPercent = (timeLapsed / (this.timeDiff)) * 100;
        const distanceLapsed = (this.Xdiff / 100) * timeLapPercent;
        this._animatedValue = this.baseValue + parseFloat(distanceLapsed.toFixed(2));
        return true;
    }
}
