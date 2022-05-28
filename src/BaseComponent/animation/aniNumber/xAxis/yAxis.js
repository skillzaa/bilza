import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { XAlignment } from "./xAlignment.js";
import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";
import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
import setBWzeroNhundred from "../../../../functions/setBWzeroNhundred.js";
export default class XAxis {
    constructor(defaultValue = 0) {
        this.xAlignmentOptions = XAlignment;
        this.xAlign = this.xAlignmentOptions.Mid;
        this._ret_value = defaultValue;
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
            this._set_value = null;
        }
    }
    setValue(n) {
        const pix = this.xPercToPix(n);
        this._set_value = pix;
    }
    animate(from = 0, to = 10, startValue = 0, endValue = 100) {
        let a = new PreInitIncDecXAxis(from, to, startValue, endValue);
        this.preInitIncDecArray.push(a);
    }
    initIncDec() {
        for (let i = 0; i < this.preInitIncDecArray.length; i++) {
            const elm = this.preInitIncDecArray[i];
            if (elm.startValue < elm.endValue) {
                const start = this.translateOffScreen(elm.startValue);
                const end = this.translateOffScreen(elm.endValue);
                this.newIncrement(elm.from, elm.to, start, end);
            }
            else {
                const start = this.translateOffScreen(elm.startValue);
                const end = this.translateOffScreen(elm.endValue);
                this.newDecrement(elm.from, elm.to, start, end);
            }
        }
    }
    runAnimations(msDelta) {
        for (let i = 0; i < this.animations.length; i++) {
            const ani = this.animations[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._ret_value = v;
            }
        }
    }
    notInitError() {
        throw new Error("XAxis is not initialized yet");
    }
    checkNonNull(n) {
        let r = 0;
        if (n == null) {
            this.notInitError();
        }
        else {
            r = n;
        }
        return r;
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
    newIncrement(from, to, startValue, endValue) {
        let c = new Increment(from, to, startValue, endValue);
        this.animations.push(c);
    }
    newDecrement(from, to, startValue, endValue) {
        let c = new Decrement(from, to, startValue, endValue);
        this.animations.push(c);
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
