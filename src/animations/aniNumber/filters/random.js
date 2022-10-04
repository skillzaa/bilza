import BaseFilter from "../../filters/baseFilter.js";
export default class Random extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, min, max, delayInMS = 1) {
        super(rTimeMsStart, rTimeMsEnd, min, max, min, delayInMS);
    }
    update(rTimeMs) {
        if (this.delay.isSegChanged(rTimeMs) == true) {
            this._animatedValue = this.getRandom(this.startValue, this.endValue);
            return;
        }
        return;
    }
}
