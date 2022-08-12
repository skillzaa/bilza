import BaseNumberFilter from "./baseNumberFilter.js";
export default class ConstantVal extends BaseNumberFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    init(canvasWidthHeight) {
        this.baseValue = this.percToPix(canvasWidthHeight, this.baseValue);
        return true;
    }
}
