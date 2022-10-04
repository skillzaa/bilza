import BaseFilter from "../../filters/baseFilter.js";
export default class BaseBooleanFilter extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, afterValue, delaySec = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, afterValue, delaySec);
    }
}
