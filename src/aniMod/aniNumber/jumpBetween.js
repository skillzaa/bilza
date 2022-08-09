import BaseFilter from "../baseFilter.js";
export default class JumpBetween extends BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, pointOne = 1, pointTwo = 10, delayInMS = 0) {
        super(msDeltaStart, msDeltaEnd, delayInMS);
        this.pointOne = pointOne;
        this.pointTwo = pointTwo;
    }
    value(msDelta, baseGotoValue) {
        if (baseGotoValue !== this.pointOne) {
            return this.pointOne;
        }
        else {
            return this.pointTwo;
        }
    }
}
