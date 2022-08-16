import Increment from "../aniNumber/filters/increment.js";
import Decrement from "../aniNumber/filters/decrement.js";
import IdentityFil from "../filters/identityFil.js";
export default class InitObj {
    constructor(filtersArr) {
        this.filtersArr = filtersArr;
    }
    init(canvasWidthHeight) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            if (fil instanceof IdentityFil) {
                fil.setBaseValue(this.responsiveValue(canvasWidthHeight, fil.getBaseValue()));
            }
            if (fil instanceof Increment) {
                fil.setBaseValue(this.responsiveValue(canvasWidthHeight, fil.getBaseValue()));
                fil.setEndValue(this.responsiveValue(canvasWidthHeight, fil.getEndValue()));
            }
            if (fil instanceof Decrement) {
                fil.setBaseValue(this.responsiveValue(canvasWidthHeight, fil.getBaseValue()));
                fil.setEndValue(this.responsiveValue(canvasWidthHeight, fil.getEndValue()));
            }
        }
    }
    responsiveValue(heightWidth, perc) {
        return ((heightWidth / 100) * perc);
    }
}
