import BaseFilter from "../../filters/baseFilter.js";
export default class Random extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, min, max, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, min, delayInMS);
        this.min = min;
        this.max = max;
        this.lastFrame = null;
    }
    update(rTimeMs) {
        if (this.lastFrame == null) {
            this._animatedValue = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        }
        else {
        }
        return true;
    }
}
