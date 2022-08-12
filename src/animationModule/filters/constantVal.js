import BaseFilter from "./baseFilter.js";
export default class ConstantVal extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    animatedValue(rTimeMs) {
        return this.baseValue;
    }
}
