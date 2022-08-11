import BaseFilter from "../baseNumberFilter.js";
export default class JumpBetween extends BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, pointOne = 1, pointTwo = 10, delayInMS = 0) {
        super(msDeltaStart, msDeltaEnd, delayInMS);
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
    }
    update(msDelta, baseGotoValue) {
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
