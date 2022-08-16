import AniNumber from "../aniNumber/aniNumber.js";
export default class AniPerc extends AniNumber {
    constructor(initialValue = 0, responsive = true, minValue = -3000, maxValue = 3000) {
        super(initialValue);
        this.canvasWidthHeight = null;
    }
    init(canvasWidthHeight) {
        this.canvasWidthHeight = canvasWidthHeight;
    }
}
