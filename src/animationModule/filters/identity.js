import BaseFilter from "./baseFilter.js";
export default class Identity extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    animatedValue() {
        return this.baseValue;
    }
}
