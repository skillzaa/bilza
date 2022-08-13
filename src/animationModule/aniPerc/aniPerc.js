import AniNumber from "../aniNumber/aniNumber.js";
import ConstantVal from "../aniNumber/filters/constantVal.js";
export default class AniPerc extends AniNumber {
    constructor(initialValue = 0, responsive = true, minValue = -3000, maxValue = 3000) {
        super(initialValue, minValue, maxValue);
        this.defaultFilter = new ConstantVal(0, 100, initialValue);
        this.canvasWidthHeight = null;
    }
    setResponsive(tf) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            fil.responsive = tf;
        }
    }
    init(canvasWidthHeight) {
        this.canvasWidthHeight = canvasWidthHeight;
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            fil.init(canvasWidthHeight);
        }
    }
    percToPix(perc, canvasWidthHeight) {
        return ((canvasWidthHeight / 100) * perc);
    }
}
