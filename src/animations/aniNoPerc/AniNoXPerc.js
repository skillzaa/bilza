import AniNoPerc from "./AniNoPerc.js";
export default class AniNoXPerc extends AniNoPerc {
    constructor() {
        super();
    }
    init(usePercentages, canvasWidth) {
        this.initSetInitValue(usePercentages, canvasWidth);
        this.initVibrate(usePercentages, canvasWidth);
        this.initGoto(usePercentages, canvasWidth);
        this.initAnimate(usePercentages, canvasWidth);
        this.initRandom(usePercentages, canvasWidth);
        this.initJumpBetween(usePercentages, canvasWidth);
    }
    set(n) {
        throw new Error("set method can not be called on this property ");
    }
    initSetInitValue(usePercentages, canvasWidth) {
        if (usePercentages == true) {
            const _v = this.percToX(this._initValue, canvasWidth);
            this._XorY.set(_v);
        }
    }
    initVibrate(usePercentages, canvasWidth) {
        for (let i = 0; i < this.preInitVibrates.length; i++) {
            const elm = this.preInitVibrates[i];
            let __v = elm.seed;
            if (usePercentages == true) {
                __v = this.percToX(elm.seed, canvasWidth);
            }
            this.baseVibrate(elm.from, elm.to, __v, elm.offset, elm.delay);
        }
    }
    initRandom(usePercentages, canvasWidth) {
        for (let i = 0; i < this.preInitRandoms.length; i++) {
            const elm = this.preInitRandoms[i];
            let __min = elm.min;
            let __max = elm.max;
            if (usePercentages == true) {
                __min = this.percToX(elm.min, canvasWidth);
                __max = this.percToX(elm.max, canvasWidth);
            }
            this.baseRandom(elm.startTimeSec, elm.endTimeSec, __min, __max, elm.skipFrames);
        }
    }
    initJumpBetween(usePercentages, canvasWidth) {
        for (let i = 0; i < this.preInitJumpBetweens.length; i++) {
            const elm = this.preInitJumpBetweens[i];
            let __pointOne = elm.pointOne;
            let __pointTwo = elm.pointTwo;
            if (usePercentages == true) {
                __pointOne = this.percToX(elm.pointOne, canvasWidth);
                __pointTwo = this.percToX(elm.pointTwo, canvasWidth);
            }
            this.baseJumpBetween(elm.startTimeSec, elm.endTimeSec, __pointOne, __pointTwo, elm.skipFrames);
        }
    }
    initGoto(usePercentages, canvasWidth) {
        for (let i = 0; i < this.preInitGotos.length; i++) {
            const elm = this.preInitGotos[i];
            let v = elm.theValue;
            if (usePercentages == true) {
                v = this.percToX(elm.theValue, canvasWidth);
            }
            this.baseGoto(elm.frame, v);
        }
    }
    initAnimate(usePercentages, canvasWidth) {
        for (let i = 0; i < this.preInitAnimates.length; i++) {
            const e = this.preInitAnimates[i];
            if (usePercentages == true) {
                this.baseAnimate(e.startTime, e.endTime, this.percToX(e.startValue, canvasWidth), this.percToX(e.endValue, canvasWidth));
            }
            else {
                this.baseAnimate(e.startTime, e.endTime, e.startValue, e.endValue);
            }
        }
    }
    percToX(perc, canvasWidth) {
        if (canvasWidth == null) {
            throw ("init error");
        }
        return ((canvasWidth / 100) * perc);
    }
}
