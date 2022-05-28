import Axis from "../axis/axis.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { XAlignment } from "./xAlignment.js";
import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";
import setBWzeroNhundred from "../../../../functions/setBWzeroNhundred.js";
export default class XAxis extends Axis {
    constructor(defaultValue = 0) {
        super(defaultValue);
        this.xAlignmentOptions = XAlignment;
        this.xAlign = this.xAlignmentOptions.Mid;
        this._set_value = null;
        this.preInitIncDecArray = [];
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
            this._ret_value = this.xPercToPix(this._set_value);
            this._set_value = null;
        }
    }
    animate(from = 0, to = 10, startValue = 0, endValue = 100) {
        let a = new PreInitIncDecXAxis(from, to, startValue, endValue);
        this.preInitIncDecArray.push(a);
    }
    initIncDec() {
        for (let i = 0; i < this.preInitIncDecArray.length; i++) {
            const elm = this.preInitIncDecArray[i];
            const start = this.translateOffScreen(elm.startValue);
            const end = this.translateOffScreen(elm.endValue);
            if (start < end) {
                let c = this.newIncrement(elm.from, elm.to, start, end);
                this.animations.push(c);
            }
            else {
                let c = this.newDecrement(elm.from, elm.to, start, end);
                this.animations.push(c);
            }
        }
    }
    xPercToPix(perc) {
        let r = 0;
        if (this.canvasWidth == null) {
            this.notInitError();
        }
        else {
            let checked = setBWzeroNhundred(perc);
            r = Math.ceil((this.canvasWidth / 100) * checked);
        }
        return r;
    }
    translateOffScreen(value) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        if (typeof value == "number") {
            return this.xPercToPix(value);
        }
        let r = 0;
        switch (value) {
            case OffScreenXOpt.XLeft:
                r = -1 * (this.compWidth());
                break;
            case OffScreenXOpt.XRight:
                r = this.xPercToPix(100) + this.compWidth();
                break;
            default:
                break;
        }
        return Math.ceil(r);
    }
    adjestAlign(incomming) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        let x = incomming;
        switch (this.xAlign) {
            case this.xAlignmentOptions.Left:
                break;
            case this.xAlignmentOptions.Mid:
                x = Math.floor(x - ((this.compWidth() / 2)));
                break;
            case this.xAlignmentOptions.Right:
                Math.floor(x - (this.compWidth()));
                break;
        }
        return x;
    }
}
