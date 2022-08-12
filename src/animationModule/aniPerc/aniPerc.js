import AniNumber from "../aniNumber/aniNumber.js";
export default class AniPerc extends AniNumber {
    constructor(initialValue = 0, minValue = -3000, maxValue = 3000) {
        super(initialValue);
    }
    init(canvasWidthHeight) {
        for (let i = 0; i < this.filtersArr.length; i++) {
            const fil = this.filtersArr[i];
            fil.init(canvasWidthHeight);
        }
    }
}
