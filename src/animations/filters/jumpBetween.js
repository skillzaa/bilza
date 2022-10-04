import BaseFilter from "./baseFilter.js";
export default class JumpBetween extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, afterValue, delaySec = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, afterValue, delaySec);
    }
    update(rTimeMs) {
        if (this.delay.isSegChanged(rTimeMs) == false) {
            return;
        }
        if (this._animatedValue == null) {
            this._animatedValue = this.startValue;
        }
        if (this._animatedValue == this.startValue) {
            this._animatedValue = this.endValue;
        }
        else {
            this._animatedValue = this.startValue;
        }
        super.update(rTimeMs);
    }
}
