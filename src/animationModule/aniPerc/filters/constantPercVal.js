import BasePercFilter from "./basePercFilter.js";
export default class ConstantPercVal extends BasePercFilter {
    constructor(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS = 0) {
        super(rTimeMsStart, rTimeMsEnd, baseValue, delayInMS);
    }
    init(canvasWidthHeight) {
        this.heightWidth = canvasWidthHeight;
        return true;
    }
    animatedValue() {
        console.log("animatedValue of ConstantPercVal");
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
