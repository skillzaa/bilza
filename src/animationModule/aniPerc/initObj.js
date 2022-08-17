import Increment from "../aniNumber/filters/increment.js";
import Decrement from "../aniNumber/filters/decrement.js";
import Random from "../aniNumber/filters/random.js";
import Oscillate from "../aniNumber/filters/oscillatets.js";
import IdentityFil from "../filters/identityFil.js";
export default class InitObj {
    constructor(filtersArr) {
        this.filtersArr = filtersArr;
    }
    init(canvasWidthHeight) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            let fil = this.filtersArr[i];
            if (fil instanceof IdentityFil ||
                fil instanceof Increment ||
                fil instanceof Decrement ||
                fil instanceof Random) {
                fil.setBaseValue(this.responsiveValue(canvasWidthHeight, fil.getBaseValue()));
                fil.setEndValue(this.responsiveValue(canvasWidthHeight, fil.getEndValue()));
                fil.setBeyondValue(this.responsiveValue(canvasWidthHeight, fil.getBeyondValue()));
            }
            if (fil instanceof Oscillate) {
                const osc = new Oscillate(fil.rTimeMsStart, fil.rTimeMsEnd, this.responsiveValue(canvasWidthHeight, fil.getBaseValue()), this.responsiveValue(canvasWidthHeight, fil.getEndValue()), fil.delay.delayValue, this.responsiveValue(canvasWidthHeight, fil.getBeyondValue()));
                this.filtersArr[i] = osc;
            }
        }
    }
    responsiveValue(heightWidth, perc) {
        return ((heightWidth / 100) * perc);
    }
}
