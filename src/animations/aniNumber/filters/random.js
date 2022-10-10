import BaseFilter from "../../filters/baseFilter.js";
export default class Random extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, min, max, delayInMS = 1) {
        super(rTimeMsStart, rTimeMsEnd, min, max, delayInMS);
    }
    update(rTimeMs) {
        if (super.update(rTimeMs) == false) {
            return false;
        }
        if (this.delay.isSegChanged(rTimeMs) == true) {
            this.setAnimatedValue(this.getRandom(this.getStartValue(), this.getEndValue()));
            return true;
        }
        return true;
    }
}
