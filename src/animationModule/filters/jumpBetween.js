import BaseFilter from "./baseFilter.js";
export default class IdentityFil extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, delaySec = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, delaySec);
    }
    animatedValue() {
        return this.startValue;
    }
}
