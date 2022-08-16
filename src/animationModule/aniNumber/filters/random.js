import BaseFilter from "../../filters/baseFilter.js";
export default class Random extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, min, max, delayInMS = 1) {
        super(rTimeMsStart, rTimeMsEnd, min, max, delayInMS);
    }
    update(rTimeMs) {
        if (this.isBeyond(rTimeMs) == true) {
            return false;
        }
        if (this.delay.isSegChanged(rTimeMs) == true) {
            this._animatedValue = this.getRandom(this.startValue, this.endValue);
            return true;
        }
        else {
            return false;
        }
    }
}
