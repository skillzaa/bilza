import AniNumber from "../aniNumber/aniNumber.js";
import IdentityFil from "../filters/identityFil.js";
import InitObj from "./initObj.js";
export default class AniPerc extends AniNumber {
    constructor(initialValue = 0, responsive = true, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.initialized = false;
        this.canvasWidthHeight = null;
        this.initObj = new InitObj(this.filtersArr);
    }
    init(canvasWidthHeight) {
        if (this.initialized == true) {
            return;
        }
        this.initialized = true;
        this.canvasWidthHeight = canvasWidthHeight;
        const defFil = new IdentityFil(0, 100, this.responsiveValue(this.canvasWidthHeight, this.defaultFilter.getBaseValue()), this.responsiveValue(this.canvasWidthHeight, this.defaultFilter.getBaseValue()));
        this.defaultFilter = defFil;
        this.initObj.init(this.canvasWidthHeight);
    }
    responsiveValue(heightWidth, perc) {
        return ((heightWidth / 100) * perc);
    }
}
