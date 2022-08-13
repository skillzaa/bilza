import BaseFilter from "../../filters/baseFilter.js";
export default class BaseNumberFilter extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    init(canvasWidthHeight) {
        return true;
    }
    percToPix(perc) {
        if (this.heightWidth == null) {
            throw new Error("init error!");
        }
        return ((this.heightWidth / 100) * perc);
    }
}
