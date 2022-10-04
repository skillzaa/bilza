import BaseFilter from "../../filters/baseFilter.js";
export default class BaseNumberFilter extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, afterValue = endValue, delaySec = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, afterValue, delaySec);
    }
}
