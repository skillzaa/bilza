import AniNoPercBase from "./AniNoPercBase.js";
export default class AniNoXPerc extends AniNoPercBase {
    constructor(defaultValue = 0) {
        super(defaultValue);
        this.canvasWidthHeight = null;
    }
    init(usePercentages, canvasWidthHeight) {
        this.usePercentages = usePercentages;
        this.canvasWidthHeight = canvasWidthHeight;
        this.initSetInitValue();
        this.initVibrate();
        this.initGoto();
        this.initAnimate();
        this.initRandom();
        this.initJumpBetween();
    }
    set(n) {
        if (this.canvasWidthHeight == null) {
            throw new Error("init error : set value can not be used at compile time for properties which need canvas width or height. For such values you should use setInitValue at compile time and use \"set\" only at run time when the protety has been initialized");
        }
        if (this.usePercentages == true) {
            const _v = this.percToPix(n);
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
}
this.x_internal;
initRandom();
{
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
initJumpBetween();
{
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
initGoto();
{
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
initAnimate();
{
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
percToPix(perc, number);
{
    if (this.canvasWidthHeight == null) {
        throw ("init error");
    }
    return ((this.canvasWidthHeight / 100) * perc);
}
