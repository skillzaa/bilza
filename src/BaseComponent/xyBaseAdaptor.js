import AniNumber from "../aniNumber/aniNumber.js";
import PreInitGoto from "./designBC/preInitGoto.js";
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
    goto(atSecond, value) {
        const c = new PreInitGoto(atSecond, value);
        this.preInitGotos.push(c);
    }
    baseGoto(atSecond, value) {
        this._XorY.goto(atSecond, value);
    }
    vibrate(from, to, xValue, offset, delay) {
        const c = new PreInitVibrate(from, to, xValue, offset, delay);
        this.preInitVibrates.push(c);
    }
    baseVibrate(from, to, xValue, offset, delay) {
        this._XorY.vibrate(from, to, xValue, offset, delay);
    }
    animate(startTime, endTime, startValue, endValue) {
        const c = new PreInitAnimate(startTime, endTime, startValue, endValue);
        this.preInitAnimates.push(c);
    }
    baseAnimate(startTime, endTime, startValue, endValue) {
        this._XorY.animate(startTime, endTime, startValue, endValue);
    }
}
