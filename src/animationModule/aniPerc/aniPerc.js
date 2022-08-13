import AniNumber from "../aniNumber/aniNumber.js";
import ConstantPercVal from "./filters/constantPercVal.js";
export default class AniPerc extends AniNumber {
    constructor(initialValue = 0, responsive = true, minValue = -3000, maxValue = 3000) {
        super(initialValue, minValue, maxValue);
        this.defaultFilter = new ConstantPercVal(0, 100, initialValue);
        this.canvasWidthHeight = null;
        this.filtersArr = [];
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
}
