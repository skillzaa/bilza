import BaseFilter from "../../filters/baseFilter.js";
export default class BaseStringFilter extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, startValue, endValue, afterValue, delaySec = 0) {
        super(rTimeMsStart, rTimeMsEnd, startValue, afterValue, endValue, delaySec);
    }
    init(canvasWidthHeight) {
        return true;
    }
}
