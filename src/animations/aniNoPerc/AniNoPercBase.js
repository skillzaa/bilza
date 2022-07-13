import AniNumber from "../aniNumber/aniNumber.js";
import PreInitGoto from "./designNoPerc/preInitGoto.js";
import PreInitAnimate from "./designNoPerc/preInitAnimate.js";
import PreInitVibrate from "./designNoPerc/preInitVibrate.js";
import PreInitRandom from "./designNoPerc/preInitRandom.js";
import PreInitJumpBetween from "./designNoPerc/preInitJumpBetween.js";
import PreInitOscilate from "./designNoPerc/preInitoscilate.js";
export default class AniNoPercBase {
    constructor(defaultValue = 0) {
        this._XorY = new AniNumber(defaultValue);
        this.usePercentages = true;
        this._initValue = defaultValue;
        this.preInitRandoms = [];
        this.preInitGotos = [];
        this.preInitAnimates = [];
        this.preInitVibrates = [];
        this.preInitJumpBetweens = [];
        this.preInitOscilate = [];
    }
    setInitValue(n) {
        this._initValue = n;
    }
    update(msDelta) {
        this._XorY.update(msDelta);
    }
    value() {
        return this._XorY.value();
    }
    override(n) {
        this._XorY.set(n);
        return this._XorY.value();
    }
    jumpBetween(startTimeSec, endTimeSec, pointOne = 1, pointTwo = 10, skipFrames = 0) {
        const c = new PreInitJumpBetween(startTimeSec, endTimeSec, pointOne, pointTwo, skipFrames);
        this.preInitJumpBetweens.push(c);
    }
    baseJumpBetween(startTimeSec, endTimeSec, pointOne = 1, pointTwo = 10, skipFrames = 0) {
        this._XorY.jumpBetween(startTimeSec, endTimeSec, pointOne, pointTwo, skipFrames);
    }
    goto(atSecond, value) {
        const c = new PreInitGoto(atSecond, value);
        this.preInitGotos.push(c);
    }
    baseGoto(atSecond, value) {
        this._XorY.goto(atSecond, value);
    }
    vibrate(from, to, seed, offset, delay) {
        const c = new PreInitVibrate(from, to, seed, offset, delay);
        this.preInitVibrates.push(c);
    }
    baseVibrate(from, to, xValue, offset, delay) {
        this._XorY.vibrate(from, to, xValue, offset, delay);
    }
    random(startTimeSec, endTimeSec, min = 1, max = 10, skipXFrames = 0) {
        const c = new PreInitRandom(startTimeSec, endTimeSec, min, max, skipXFrames);
        this.preInitRandoms.push(c);
    }
    baseRandom(startTimeSec, endTimeSec, min = 1, max = 10, skipXFrames = 0) {
        this._XorY.random(startTimeSec, endTimeSec, min, max, skipXFrames);
    }
    animate(startTime, endTime, startValue, endValue) {
        const c = new PreInitAnimate(startTime, endTime, startValue, endValue);
        this.preInitAnimates.push(c);
    }
    baseAnimate(startTime, endTime, startValue, endValue) {
        this._XorY.animate(startTime, endTime, startValue, endValue);
    }
    oscillate(startTimeSec, endTimeSec, startValue = 1, endValue = 10, speed = 1) {
        const c = new PreInitOscilate(startTimeSec, endTimeSec, startValue, endValue, speed);
        this.preInitOscilate.push(c);
    }
    baseOscilate(startTimeSec, endTimeSec, startValue = 1, endValue = 10, speed = 1) {
        this._XorY.oscillate(startTimeSec, endTimeSec, startValue, endValue, speed);
    }
}
