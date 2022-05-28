import { OffScreenYOpt } from "./OffScreenYOpt.js";
import { YAlignment } from "./yAlignment.js";
import Axis from "../axis/axis.js";
import PreInitIncDecYAxis from "./preInitIncDecYAxis.js";
import setBWzeroNhundred from "../../../../functions/setBWzeroNhundred.js";
export default class YAxis extends Axis {
    constructor(defaultValue = 0) {
        super(defaultValue);
        this.yAlignmentOptions = YAlignment;
        this.yAlign = this.yAlignmentOptions.Mid;
        this._set_value = null;
        this.preInitIncDecArray = [];
        this.animations = [];
        this.compWidth = null;
        this.compHeight = null;
        this.canvasWidth = null;
        this.canvasHeight = null;
    }
    init(compWidth, compHeight, canvasWidth, canvasHeight) {
        this.compWidth = compWidth;
        this.compHeight = compHeight;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.runSetValue();
        this.initIncDec();
        return true;
    }
    update(msDelta) {
        this.runSetValue();
        this.runAnimations(msDelta);
        return true;
    }
    value() {
        return this.adjestAlign(this._ret_value);
    }
    runSetValue() {
        if (this._set_value !== null) {
            this._ret_value = this.yPercToPix(this._set_value);
            this._set_value = null;
        }
    }
    setValue(n) {
        this._set_value = n;
    }
    animate(from = 0, to = 10, startValue = 0, endValue = 100) {
        let a = new PreInitIncDecYAxis(from, to, startValue, endValue);
        this.preInitIncDecArray.push(a);
    }
    initIncDec() {
        for (let i = 0; i < this.preInitIncDecArray.length; i++) {
            const elm = this.preInitIncDecArray[i];
            if (elm.startValue < elm.endValue) {
                const start = this.translateOffScreen(elm.startValue);
                const end = this.translateOffScreen(elm.endValue);
                let c = this.newIncrement(elm.from, elm.to, start, end);
                this.animations.push(c);
            }
            else {
                const start = this.translateOffScreen(elm.startValue);
                const end = this.translateOffScreen(elm.endValue);
                let c = this.newDecrement(elm.from, elm.to, start, end);
                this.animations.push(c);
            }
        }
    }
    yPercToPix(perc) {
        let r = 0;
        if (this.canvasHeight == null) {
            this.notInitError();
        }
        else {
            let checked = setBWzeroNhundred(perc);
            r = Math.ceil((this.canvasHeight / 100) * checked);
        }
        return r;
    }
    translateOffScreen(value) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        if (typeof value == "number") {
            return this.yPercToPix(value);
        }
        let r = 0;
        switch (value) {
            case OffScreenYOpt.YTop:
                r = -1 * (this.compWidth());
                break;
            case OffScreenYOpt.YBot:
                r = this.yPercToPix(100) + this.compWidth();
                break;
            default:
                break;
        }
        return Math.ceil(r);
    }
    adjestAlign(incomming) {
        if (this.compHeight == null) {
            throw new Error("init error");
        }
        let x = incomming;
        switch (this.yAlign) {
            case this.yAlignmentOptions.Top:
                break;
            case this.yAlignmentOptions.Mid:
                x = Math.floor(x - ((this.compHeight() / 2)));
                break;
            case this.yAlignmentOptions.Bot:
                Math.floor(x - (this.compHeight()));
                break;
        }
        return x;
    }
}
