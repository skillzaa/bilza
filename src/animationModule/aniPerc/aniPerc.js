import AniNumber from "../aniNumber/aniNumber.js";
import IdentityFil from "../filters/identityFil.js";
export default class AniPerc extends AniNumber {
    constructor(initialValue = 0, responsive = true, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.canvasWidthHeight = null;
    }
    init(canvasWidthHeight) {
        this.canvasWidthHeight = canvasWidthHeight;
        const defFil = new IdentityFil(0, 100, this.responsiveValue(this.canvasWidthHeight, this.defaultFilter.getBaseValue()), this.responsiveValue(this.canvasWidthHeight, this.defaultFilter.getBaseValue()));
        this.defaultFilter = defFil;
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
        }
    }
    responsiveValue(heightWidth, perc) {
        return ((heightWidth / 100) * perc);
    }
}
