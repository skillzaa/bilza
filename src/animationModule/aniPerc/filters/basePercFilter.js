import BaseFilter from "../../filters/baseFilter.js";
export default class BasePercFilter extends BaseFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
        this.responsive = false;
        this.heightWidth = null;
    }
    init(canvasWidthHeight) {
        this.heightWidth = canvasWidthHeight;
        return true;
    }
    percToPix(perc) {
        if (this.heightWidth == null) {
            throw new Error("heightWidth is null");
        }
        return ((this.heightWidth / 100) * perc);
    }
}
