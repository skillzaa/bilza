import BaseFilter from "./baseFilter.js";
export default class JumpBetween extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, delaySec = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, delaySec);
    }
    update(rTimeMs) {
        if (this.isBeyond(rTimeMs) == true) {
            return false;
        }
        if (this.delay.isSegChanged(rTimeMs) == true) {
            if (this._animatedValue == null) {
                this._animatedValue = this.startValue;
                return true;
            }
            if (this._animatedValue == this.startValue) {
                this._animatedValue = this.endValue;
                return true;
            }
            else {
                this._animatedValue = this.startValue;
                return false;
            }
        }
        else {
            return false;
        }
    }
}
