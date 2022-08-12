import BaseFilter from "./baseFilter.js.js";
export default class RandomNo extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, min = 1, max = 10, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, delayInMS);
        this.min = min;
        this.max = max;
    }
    update(rTimeMs, baseGotoValue) {
        this._ret_val = Math.floor(Math.random() * (this.max - this.min + 1) + this.min);
        return true;
    }
    init(canvasWidthHeight) {
        this.min = this.percToPix(canvasWidthHeight, this.min);
        this.max = this.percToPix(canvasWidthHeight, this.max);
        return true;
    }
}
