import BaseNumberFilter from "./baseNumberFilter.js";
export default class ConstantVal extends BaseNumberFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    init(canvasWidthHeight) {
        this.heightWidth = canvasWidthHeight;
        return true;
    }
    animatedValue() {
        if (this.responsive == true) {
            if (this.heightWidth == null) {
                throw new Error("heightWidth is null");
            }
            return this.percToPix(this.baseValue);
        }
        else {
            return this.baseValue;
        }
    }
}
