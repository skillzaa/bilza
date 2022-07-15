import AniNumber from "../aniNumber/aniNumber.js";
import PreInitGoto from "./designNoPerc/preInitGoto.js";
import PreInitAnimate from "./designNoPerc/preInitAnimate.js";
import PreInitVibrate from "./designNoPerc/preInitVibrate.js";
import PreInitRandom from "./designNoPerc/preInitRandom.js";
import PreInitJumpBetween from "./designNoPerc/preInitJumpBetween.js";
import PreInitOscilate from "./designNoPerc/preInitoscilate.js";
export default class AniNoPercBase extends AniNumber {
    constructor(defaultValue = 0) {
        super(defaultValue);
        this.usePercentages = true;
        this._initValue = defaultValue;
        this.canvasWidthHeight = null;
        this.preInitRandoms = [];
        this.preInitGotos = [];
        this.preInitAnimates = [];
        this.preInitVibrates = [];
        this.preInitJumpBetweens = [];
        this.preInitOscilate = [];
    }
    set(n) {
        if (this.usePercentages == true) {
            this._initValue = n;
            return this._initValue;
        }
        else {
            super.set(n);
            return n;
        }
    }
    initSetInitValue() {
        if (this.usePercentages == true) {
            if (this.canvasWidthHeight == null) {
                throw new Error("init       error");
            }
            const _v = this.percToPix(this._initValue);
            super.set(_v);
        }
        else {
            super.set(this._initValue);
        }
    }
    jumpBetween(startTimeSec, endTimeSec, pointOne = 1, pointTwo = 10, skipFrames = 0) {
        const c = new PreInitJumpBetween(startTimeSec, endTimeSec, pointOne, pointTwo, skipFrames);
        this.preInitJumpBetweens.push(c);
    }
    baseJumpBetween(startTimeSec, endTimeSec, pointOne = 1, pointTwo = 10, skipFrames = 0) {
        super.jumpBetween(startTimeSec, endTimeSec, pointOne, pointTwo, skipFrames);
    }
    goto(atSecond, value) {
        const c = new PreInitGoto(atSecond, value);
        this.preInitGotos.push(c);
    }
    baseGoto(atSecond, value) {
        super.goto(atSecond, value);
    }
    vibrate(from, to, seed, offset, delay) {
        const c = new PreInitVibrate(from, to, seed, offset, delay);
        this.preInitVibrates.push(c);
    }
    baseVibrate(from, to, xValue, offset, delay) {
        super.vibrate(from, to, xValue, offset, delay);
    }
    random(startTimeSec, endTimeSec, min = 1, max = 10, skipXFrames = 0) {
        const c = new PreInitRandom(startTimeSec, endTimeSec, min, max, skipXFrames);
        this.preInitRandoms.push(c);
    }
    baseRandom(startTimeSec, endTimeSec, min = 1, max = 10, skipXFrames = 0) {
        super.random(startTimeSec, endTimeSec, min, max, skipXFrames);
    }
    animate(startTime, endTime, startValue, endValue) {
        const c = new PreInitAnimate(startTime, endTime, startValue, endValue);
        this.preInitAnimates.push(c);
    }
    baseAnimate(startTime, endTime, startValue, endValue) {
        super.animate(startTime, endTime, startValue, endValue);
    }
    oscillate(startTimeSec, endTimeSec, startValue = 1, endValue = 10, speed = 1) {
        const c = new PreInitOscilate(startTimeSec, endTimeSec, startValue, endValue, speed);
        this.preInitOscilate.push(c);
    }
    baseOscillate(startTimeSec, endTimeSec, startValue = 1, endValue = 10, speed = 1) {
        super.oscillate(startTimeSec, endTimeSec, startValue, endValue, speed);
    }
    percToPix(perc) {
        if (this.canvasWidthHeight == null) {
            throw ("init error");
        }
        return ((this.canvasWidthHeight / 100) * perc);
    }
}
