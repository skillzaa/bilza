import BaseNumberFilter from "./baseNumberFilter.js";
export default class Decrement extends BaseNumberFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, delayInMS);
        if (this.getStartValue() <= this.getEndValue()) {
            throw new Error("end value can not be equal to or larger than start value in an decrement operation");
        }
        if (this.getStartValue() < 0) {
            throw new Error("start value can not be less than zero in decrement operation");
        }
    }
    update(rTimeMs, baseGotoValue = 0) {
        if (super.update(rTimeMs) == false) {
            return false;
        }
        const Xdiff = Math.abs(this.getStartValue() - this.getEndValue());
        const timeLapsed = Math.ceil(rTimeMs - this.startTimeMs);
        const timeLapPercent = (timeLapsed / (this.timeDiff())) * 100;
        const timeLapPercDecrement = Math.abs(100 - timeLapPercent);
        const distanceLapsed = (Xdiff / 100) * timeLapPercDecrement;
        this.setAnimatedValue(Math.ceil(this.getEndValue() + distanceLapsed));
        return true;
    }
}
