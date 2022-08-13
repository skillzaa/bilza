import BaseFilter from "../../filters/baseFilter.js";
export default class BaseNumberFilter extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
}
