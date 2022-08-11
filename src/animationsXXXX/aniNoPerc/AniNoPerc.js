import AniNoPercBase from "./AniNoPercBase.js";
export default class AniNoPerc extends AniNoPercBase {
    constructor(defaultValue = 0) {
        super(defaultValue);
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
    initOscilate() {
        for (let i = 0; i < this.preInitOscilate.length; i++) {
            const elm = this.preInitOscilate[i];
            let __startValue = elm.startValue;
            let __endValue = elm.endValue;
            if (this.usePercentages == true) {
                __startValue = this.percToPix(elm.startValue);
                __endValue = this.percToPix(elm.endValue);
            }
            this.baseOscillate(elm.startTimeSec, elm.endTimeSec, __startValue, __endValue, elm.speed);
        }
    }
    initVibrate() {
        for (let i = 0; i < this.preInitVibrates.length; i++) {
            const elm = this.preInitVibrates[i];
            let __v = elm.seed;
            if (this.usePercentages == true) {
                __v = this.percToPix(elm.seed);
            }
            this.baseVibrate(elm.from, elm.to, __v, elm.offset, elm.delay);
        }
    }
    initRandom() {
        for (let i = 0; i < this.preInitRandoms.length; i++) {
            const elm = this.preInitRandoms[i];
            let __min = elm.min;
            let __max = elm.max;
            if (this.usePercentages == true) {
                __min = this.percToPix(elm.min);
                __max = this.percToPix(elm.max);
            }
            this.baseRandom(elm.startTimeSec, elm.endTimeSec, __min, __max, elm.skipFrames);
        }
    }
    initJumpBetween() {
        for (let i = 0; i < this.preInitJumpBetweens.length; i++) {
            const elm = this.preInitJumpBetweens[i];
            let __pointOne = elm.pointOne;
            let __pointTwo = elm.pointTwo;
            if (this.usePercentages == true) {
                __pointOne = this.percToPix(elm.pointOne);
                __pointTwo = this.percToPix(elm.pointTwo);
            }
            this.baseJumpBetween(elm.startTimeSec, elm.endTimeSec, __pointOne, __pointTwo, elm.skipFrames);
        }
    }
    initGoto() {
        for (let i = 0; i < this.preInitGotos.length; i++) {
            const elm = this.preInitGotos[i];
            let v = elm.theValue;
            if (this.usePercentages == true) {
                v = this.percToPix(elm.theValue);
            }
            this.baseGoto(elm.frame, v);
        }
    }
    initAnimate() {
        for (let i = 0; i < this.preInitAnimates.length; i++) {
            const e = this.preInitAnimates[i];
            if (this.usePercentages == true) {
                this.baseAnimate(e.startTime, e.endTime, this.percToPix(e.startValue), this.percToPix(e.endValue));
            }
            else {
                this.baseAnimate(e.startTime, e.endTime, e.startValue, e.endValue);
            }
        }
    }
}
