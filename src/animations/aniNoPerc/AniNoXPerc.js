import AniNoPerc from "./AniNoPerc.js";
export default class AniNoXPerc extends AniNoPerc {
    constructor(defaultValue = 0) {
        super(defaultValue);
        this.canvasWidth = null;
    }
    init(usePercentages, canvasWidth) {
        this.usePercentages = usePercentages;
        this.canvasWidth = canvasWidth;
        this.initSetInitValue();
        this.initVibrate();
        this.initGoto();
        this.initAnimate();
        this.initRandom();
        this.initJumpBetween();
    }
    set(n) {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        if (this.usePercentages == true) {
            const _v = this.percToX(n);
            this._XorY.set(_v);
        }
        else {
            this._XorY.set(n);
        }
    }
    initSetInitValue() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        if (this.usePercentages == true) {
            const _v = this.percToX(this._initValue);
            this._XorY.set(_v);
        }
        else {
            this._XorY.set(this._initValue);
        }
    }
    initVibrate() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        for (let i = 0; i < this.preInitVibrates.length; i++) {
            const elm = this.preInitVibrates[i];
            let __v = elm.seed;
            if (this.usePercentages == true) {
                __v = this.percToX(elm.seed);
            }
            this.baseVibrate(elm.from, elm.to, __v, elm.offset, elm.delay);
        }
    }
    initRandom() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        for (let i = 0; i < this.preInitRandoms.length; i++) {
            const elm = this.preInitRandoms[i];
            let __min = elm.min;
            let __max = elm.max;
            if (this.usePercentages == true) {
                __min = this.percToX(elm.min);
                __max = this.percToX(elm.max);
            }
            this.baseRandom(elm.startTimeSec, elm.endTimeSec, __min, __max, elm.skipFrames);
        }
    }
    initJumpBetween() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        for (let i = 0; i < this.preInitJumpBetweens.length; i++) {
            const elm = this.preInitJumpBetweens[i];
            let __pointOne = elm.pointOne;
            let __pointTwo = elm.pointTwo;
            if (this.usePercentages == true) {
                __pointOne = this.percToX(elm.pointOne);
                __pointTwo = this.percToX(elm.pointTwo);
            }
            this.baseJumpBetween(elm.startTimeSec, elm.endTimeSec, __pointOne, __pointTwo, elm.skipFrames);
        }
    }
    initGoto() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        for (let i = 0; i < this.preInitGotos.length; i++) {
            const elm = this.preInitGotos[i];
            let v = elm.theValue;
            if (this.usePercentages == true) {
                v = this.percToX(elm.theValue);
            }
            this.baseGoto(elm.frame, v);
        }
    }
    initAnimate() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        for (let i = 0; i < this.preInitAnimates.length; i++) {
            const e = this.preInitAnimates[i];
            if (this.usePercentages == true) {
                this.baseAnimate(e.startTime, e.endTime, this.percToX(e.startValue), this.percToX(e.endValue));
            }
            else {
                this.baseAnimate(e.startTime, e.endTime, e.startValue, e.endValue);
            }
        }
    }
    percToX(perc) {
        if (this.canvasWidth == null) {
            throw ("init error");
        }
        return ((this.canvasWidth / 100) * perc);
    }
}
