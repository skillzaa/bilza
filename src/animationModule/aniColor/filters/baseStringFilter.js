import BaseFilter from "../../filters/baseFilter.js";
export default class BaseStringFilter extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    init(canvasWidthHeight) {
        return true;
    }
    percToPix(perc, canvasWidthHeight) {
        return ((canvasWidthHeight / 100) * perc);
    }
}
