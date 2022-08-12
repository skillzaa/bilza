import BaseFilter from "./baseFilter.js.js";
export default class JumpBetween extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, pointOne = 1, pointTwo = 10, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, delayInMS);
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
    }
    update(rTimeMs, baseGotoValue) {
        if (baseGotoValue !== this.pointOne) {
            this._ret_val = this.pointOne;
        }
        else {
            this._ret_val = this.pointTwo;
        }
        return true;
    }
    init(canvasWidthHeight) {
        this.pointOne = this.percToPix(canvasWidthHeight, this.pointOne);
        this.pointTwo = this.percToPix(canvasWidthHeight, this.pointTwo);
        return true;
    }
}
