import { YAlignOpt } from "../designBC/yAlignOpt.js";
import XyBaseAdaptor from "./xyBaseAdaptor.js";
export default class Y extends XyBaseAdaptor {
    constructor() {
        super();
        this.YAlignOpt = YAlignOpt;
        this.yAlign = this.YAlignOpt.Top;
    }
    init(usePercentages, canvasHeight) {
        this.initVibrate(usePercentages, canvasHeight);
        this.initGoto(usePercentages, canvasHeight);
        this.initAnimate(usePercentages, canvasHeight);
        this.initRandom(usePercentages, canvasHeight);
        this.initJumpBetween(usePercentages, canvasHeight);
    }
    initJumpBetween(usePercentages, canvasHeight) {
        for (let i = 0; i < this.preInitJumpBetweens.length; i++) {
            const elm = this.preInitJumpBetweens[i];
            let __pointOne = elm.pointOne;
            let __pointTwo = elm.pointTwo;
            if (usePercentages == true) {
                __pointOne = this.percToY(elm.pointOne, canvasHeight);
                __pointTwo = this.percToY(elm.pointTwo, canvasHeight);
            }
            this.baseJumpBetween(elm.startTimeSec, elm.endTimeSec, __pointOne, __pointTwo, elm.skipFrames);
        }
    }
    initRandom(usePercentages, canvasHeight) {
        for (let i = 0; i < this.preInitRandoms.length; i++) {
            const elm = this.preInitRandoms[i];
            let __min = elm.min;
            let __max = elm.max;
            if (usePercentages == true) {
                __min = this.percToY(elm.min, canvasHeight);
                __max = this.percToY(elm.max, canvasHeight);
            }
            this.baseRandom(elm.startTimeSec, elm.endTimeSec, __min, __max, elm.skipFrames);
        }
    }
    initVibrate(usePercentages, canvasHeight) {
        for (let i = 0; i < this.preInitVibrates.length; i++) {
            const elm = this.preInitVibrates[i];
            let __v = elm.seed;
            if (usePercentages == true) {
                __v = this.percToY(elm.seed, canvasHeight);
            }
            this.baseVibrate(elm.from, elm.to, __v, elm.offset, elm.delay);
        }
    }
    initGoto(usePercentages, canvasHeight) {
        for (let i = 0; i < this.preInitGotos.length; i++) {
            const elm = this.preInitGotos[i];
            let v = elm.theValue;
            if (usePercentages == true) {
                v = this.percToY(elm.theValue, canvasHeight);
            }
            this.baseGoto(elm.frame, v);
        }
    }
    initAnimate(usePercentages, canvasHeight) {
        for (let i = 0; i < this.preInitAnimates.length; i++) {
            const e = this.preInitAnimates[i];
            if (usePercentages == true) {
                this.baseAnimate(e.startTime, e.endTime, this.percToY(e.startValue, canvasHeight), this.percToY(e.endValue, canvasHeight));
            }
            else {
                this.baseAnimate(e.startTime, e.endTime, e.startValue, e.endValue);
            }
        }
    }
    percToY(perc, canvasHeight) {
        return ((canvasHeight / 100) * perc);
    }
    aligned(height) {
        let x = this.value();
        switch (this.yAlign) {
            case this.YAlignOpt.Top:
                break;
            case this.YAlignOpt.Mid:
                x = x - (height / 2);
                break;
            case this.YAlignOpt.Bot:
                x = x - height;
                break;
        }
        return x;
    }
}
