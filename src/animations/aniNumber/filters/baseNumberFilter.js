import BaseFilter from "../../filters/baseFilter.js";
export default class BaseNumberFilter extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, delaySec = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, endValue, delaySec);
    }
}
