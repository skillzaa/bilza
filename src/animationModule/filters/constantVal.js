import BaseFilter from "./baseFilter.js";
export default class ConstantVal extends BaseFilter {
    constructor(msDeltaStart, msDeltaEnd, baseValue, delayInMS = 0) {
        super(msDeltaStart, msDeltaEnd, baseValue, delayInMS);
    }
    animatedValue(msDelta) {
        return this.baseValue;
    }
}
