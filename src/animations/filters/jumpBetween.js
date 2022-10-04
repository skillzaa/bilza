import BaseFilter from "./baseFilter.js";
export default class JumpBetween extends BaseFilter {
    constructor(startTimeMs, endTimeMs, startValue, endValue, delaySec = 0) {
        super(startTimeMs, endTimeMs, startValue, endValue, delaySec);
    }
    update(rTimeMs) {
        if (super.update(rTimeMs) == false) {
            return false;
        }
        if (this.delay.isSegChanged(rTimeMs) == false) {
            return true;
        }
        if (this.getAnimatedValue() == null) {
            this.setAnimatedValue(this.getStartValue());
        }
        if (this.getAnimatedValue() == this.getStartValue()) {
            this.setAnimatedValue(this.getEndValue());
        }
        else {
            this.setAnimatedValue(this.getStartValue());
        }
        return true;
    }
}
