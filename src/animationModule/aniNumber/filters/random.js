import BaseFilter from "../../filters/baseFilter.js";
export default class Random extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, min, max, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, min, max, delayInMS);
        this.min = min;
        this.max = max;
    }
    update(rTimeMs) {
        if (this.isBeyond(rTimeMs) == true) {
            return false;
        }
        if (this.delay.isSegChanged(rTimeMs) == true) {
            this._animatedValue = this.getRandom(this.min, this.max);
            return true;
        }
        else {
            return false;
        }
    }
}
