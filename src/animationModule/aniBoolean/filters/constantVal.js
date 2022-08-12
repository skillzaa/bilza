import BaseBooleanFilter from "./baseBooleanFilter.js";
export default class ConstantVal extends BaseBooleanFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    animatedValue() {
        return this.baseValue;
    }
}
