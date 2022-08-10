import AniNumber from "../aniNumber/aniNumber.js";
import PreInitGoto from "./designNoPerc/preInitGoto.js";
import PreInitAnimate from "./designNoPerc/preInitAnimate.js";
import PreInitRandom from "./designNoPerc/preInitRandom.js";
import PreInitJumpBetween from "./designNoPerc/preInitJumpBetween.js";
import PreInitOscilate from "./designNoPerc/preInitoscilate.js";
export default class AniNoPercBase extends AniNumber {
    constructor(defaultValue = 0) {
        super(defaultValue);
        this.usePercentages = true;
        this.canvasWidthHeight = null;
        this.preInitRandoms = [];
        this.preInitGotos = [];
        this.preInitAnimates = [];
        this.preInitJumpBetweens = [];
        this.preInitOscilate = [];
    }
    init(usePercentages, canvasWidthHeight) {
        this.usePercentages = usePercentages;
        this.canvasWidthHeight = canvasWidthHeight;
        this.initSet();
        this.initGoto();
        this.initAnimate();
        this.initRandom();
        this.initJumpBetween();
    }
    initSet() {
        if (this.usePercentages == true) {
            if (this.canvasWidthHeight == null) {
                throw new Error("init       error");
            }
            this.defaultValue = this.percToPix(this.defaultValue);
        }
    }
    jumpBetween(msDeltaStart, msDeltaEnd, pointOne = 1, pointTwo = 10, delayInMS = 0) {
        const c = new PreInitJumpBetween(msDeltaStart, msDeltaEnd, pointOne, pointTwo, delayInMS);
        this.preInitJumpBetweens.push(c);
    }
    goto(msDelta, value) {
        const c = new PreInitGoto(msDelta, value);
        this.preInitGotos.push(c);
    }
    random(startTimeSec, endTimeSec, min = 1, max = 10, skipXFrames = 0) {
        const c = new PreInitRandom(startTimeSec, endTimeSec, min, max, skipXFrames);
        this.preInitRandoms.push(c);
    }
    animate(msDeltaStart, msDeltaEnd, startValue, endValue) {
        const c = new PreInitAnimate(msDeltaStart, msDeltaEnd, startValue, endValue);
        this.preInitAnimates.push(c);
    }
    oscillate(startTimeSec, endTimeSec, startValue = 1, endValue = 10, speed = 1) {
        const c = new PreInitOscilate(startTimeSec, endTimeSec, startValue, endValue, speed);
        this.preInitOscilate.push(c);
    }
    percToPix(perc) {
        if (this.canvasWidthHeight == null) {
            throw ("init error");
        }
        return ((this.canvasWidthHeight / 100) * perc);
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
            super.oscillate(elm.msDeltaStart, elm.msDeltaEnd, __startValue, __endValue, elm.speed);
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
            super.random(elm.msDeltaStart, elm.msDeltaEnd, __min, __max, elm.delayInMilliSec);
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
            super.jumpBetween(elm.msDeltaStart, elm.msDeltaEnd, __pointOne, __pointTwo, elm.delayInMS);
        }
    }
    initGoto() {
        for (let i = 0; i < this.preInitGotos.length; i++) {
            const elm = this.preInitGotos[i];
            let v = elm.value;
            if (this.usePercentages == true) {
                v = this.percToPix(elm.value);
            }
            super.goto(elm.msDelta, v);
        }
    }
    initAnimate() {
        for (let i = 0; i < this.preInitAnimates.length; i++) {
            const e = this.preInitAnimates[i];
            if (this.usePercentages == true) {
                super.animate(e.msDeltaStart, e.msDeltaEnd, this.percToPix(e.startValue), this.percToPix(e.endValue));
            }
            else {
                super.animate(e.msDeltaStart, e.msDeltaEnd, e.startValue, e.endValue);
            }
        }
    }
}
