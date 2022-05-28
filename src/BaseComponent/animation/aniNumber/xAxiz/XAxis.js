import AnimatedNoBase from "../animatedNoBase/AnimatedNoBase.js";
import { XAlignment } from "./xAlignment.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import PreInitIncDecXAxis from "./preInitIncDecXAxis.js";
export default class XAxis extends AnimatedNoBase {
    constructor(defaultValue) {
        super(defaultValue);
        this.xAlignmentOptions = XAlignment;
        this.xAlign = this.xAlignmentOptions.Mid;
        this.PreInitIncDecXAxisArray = [];
        this._set_valueXAxis = null;
        this._ret_valueXAxis = null;
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
    value() {
        if ()
            let r = this.translateOffScreen(this._ret_valueXAxis);
        return this.adjestAlign(r);
    }
    setValue(n) {
        this._set_valueXAxis = n;
    }
    runSetValue() {
        if (this._set_valueXAxis !== null) {
            this._ret_valueXAxis = this.translateOffScreen(this._set_valueXAxis);
            this._set_valueXAxis = null;
        }
    }
    animate(from = 0, to = 10, startValue = 0, endValue = 100) {
        let a = new PreInitIncDecXAxis(from, to, startValue, endValue);
        this.PreInitIncDecXAxisArray.push(a);
    }
    initIncDec() {
        for (let i = 0; i < this.PreInitIncDecXAxisArray.length; i++) {
            const elm = this.PreInitIncDecXAxisArray[i];
            const start = this.translateOffScreen(elm.startValue);
            const end = this.translateOffScreen(elm.endValue);
            if (start < end) {
                this.newIncrement(elm.from, elm.to, start, end);
            }
            else {
                this.newDecrement(elm.from, elm.to, start, end);
            }
        }
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
