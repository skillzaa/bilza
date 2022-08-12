import BaseFilter from "./baseFilter.js.js";
export default class Oscillate extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue = 1, endValue = 10, speed = 1, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, delayInMS);
        this.startValue = startValue;
        this.endValue = endValue;
        this.addSub = true;
        this.speed = speed;
    }
    update(rTimeMs, baseGotoValue) {
        if (this._ret_val == null) {
            this._ret_val = this.startValue;
        }
        if (this._ret_val < this.startValue) {
            this.addSub = true;
        }
        else if (this._ret_val > this.endValue) {
            this.addSub = false;
        }
        if (this.addSub == true) {
            this._ret_val += this.speed;
        }
        else {
            this._ret_val -= this.speed;
        }
        return true;
    }
    init(canvasWidthHeight) {
        this.startValue = this.percToPix(canvasWidthHeight, this.startValue);
        this.endValue = this.percToPix(canvasWidthHeight, this.endValue);
        return true;
    }
}
