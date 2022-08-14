import BasePercFilter from "./basePercFilter.js";
export default class IdentityFilPerc extends BasePercFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    animatedValue() {
        return this.responsiveValue(this.baseValue);
    }
}
