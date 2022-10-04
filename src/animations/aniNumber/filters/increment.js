import BaseNumberFilter from "./baseNumberFilter.js";
export default class Increment extends BaseNumberFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, delayInMS);
        if (this.getStartValue() >= this.getEndValue()) {
            throw new Error("start value can not be equal to or larger than end value in an increment operation");
        }
    }
    update(rTimeMs) {
        if (super.update(rTimeMs) == false) {
            return false;
        }
        const Xdiff = Math.abs(this.getStartValue() - this.getEndValue());
        const timeLapsed = Math.ceil(rTimeMs - this.startTimeMs);
        const timeLapPercent = (timeLapsed / (this.timeDiff())) * 100;
        const distanceLapsed = (Xdiff / 100) * timeLapPercent;
        this.setAnimatedValue(this.getStartValue() + parseFloat(distanceLapsed.toFixed(2)));
        return true;
    }
}
