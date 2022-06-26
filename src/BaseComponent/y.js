import { YAlignOpt } from "./designBC/yAlignOpt.js";
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
