import BaseStringFilter from "./baseStringFilter.js";
export default class ConstantVal extends BaseStringFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    animatedValue() {
        return this.baseValue;
    }
}
