import AniNumber from "../aniNumber/aniNumber.js";
import PreInitAnimate from "./designBC/preInitAnimate.js";
import PreInitVibrate from "./designBC/preInitVibrate.js";
export default class XyBaseAdaptor {
    constructor() {
        this._XorY = new AniNumber(0);
        this.preInitGotos = [];
        this.preInitAnimates = [];
        this.preInitVibrates = [];
    }
    update(msDelta) {
        this._XorY.update(msDelta);
    }
    value() {
        return this._XorY.value();
    }
    vibrate(from, to, xValue, offset, delay) {
        const c = new PreInitVibrate(from, to, xValue, offset, delay);
        this.preInitVibrates.push(c);
    }
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo, xExtraFrom = 0, xExtraTo = 0, yExtraFrom = 0, yExtraTo = 0) {
        const c = new PreInitAnimate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo, xExtraFrom, xExtraTo, yExtraFrom, yExtraTo);
        this.preInitAnimates.push(c);
    }
}
