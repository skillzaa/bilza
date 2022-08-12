import AniNumber from "../aniNumber/aniNumber.js";
export default class AniPerc extends AniNumber {
    constructor(initialValue = 0, responsive = true, minValue = -3000, maxValue = 3000) {
        super(initialValue, minValue, maxValue);
        this.responsive = responsive;
    }
    setResponsive(tf) {
        this.responsive = tf;
    }
    init(canvasWidthHeight) {
        if (this.responsive == false) {
            return false;
        }
        this.defaultValue = this.percToPix(this.defaultValue, canvasWidthHeight);
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            fil.init(canvasWidthHeight);
        }
    }
    percToPix(perc, canvasWidthHeight) {
        return ((canvasWidthHeight / 100) * perc);
    }
}
