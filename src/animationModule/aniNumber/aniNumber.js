import AniProp from "../aniProp/aniProp.js";
import Increment from "./numberFilters/increment.js";
export default class AniNumber extends AniProp {
    constructor(initialValue = 0, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.minValue = minValue;
        this.maxValue = maxValue;
    }
    animate(rTimeMsStart, rTimeMsEnd, startValue, endValue) {
        if (startValue < endValue) {
            let inc = new Increment(rTimeMsStart, rTimeMsEnd, startValue, 0, endValue);
            this.addFilter(inc);
        }
        else if (startValue > endValue) {
        }
    }
}
