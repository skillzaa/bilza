import { OffScreenXOpt } from "../../OffScreenXOpt.js";
import MoveXItem from "./moveXItem.js";
import Increment from "../filters/increment.js";
import Decrement from "../filters/decrement.js";
export default class XAxis {
    constructor() {
        this._ret_value = null;
        this._set_value = null;
        this.compWidth = null;
        this.compHeight = null;
        this.startTime = null;
        this.endTime = null;
        this.duration = null;
        this.preInitMoves = [];
        this.animations = [];
    }
    init(p, startTime, endTime, duration, compWidth, compHeight) {
        this._ret_value = this.translate(0, p, compWidth);
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.compWidth = compWidth;
        this.compHeight = compHeight;
        this.initMoveX(p, compWidth);
        return true;
    }
    update(msDelta, p) {
        if (this._set_value !== null) {
            this._ret_value = p.xPerc(this._set_value);
            this._set_value = null;
        }
        for (let i = 0; i < this.animations.length; i++) {
            const ani = this.animations[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._ret_value = v;
            }
        }
        return true;
    }
    translate(value, p, compWidth) {
        if (typeof value == "number") {
            return p.xPerc(value);
        }
        let r = 0;
        switch (value) {
            case OffScreenXOpt.XLeft:
                r = -1 * (compWidth + 10);
                break;
            case OffScreenXOpt.XRight:
                r = p.xPerc(100) + compWidth + 100;
                break;
            default:
                break;
        }
        return Math.ceil(r);
    }
    notInitError() {
        throw new Error("XAxis is not initialized yet");
    }
    setValue(n) {
        this._set_value = n;
        return this._set_value;
    }
    moveX(from = 0, to = 10, startValue = 0, endValue = 100) {
        let a = new MoveXItem(from, to, startValue, endValue);
        this.preInitMoves.push(a);
    }
    value() {
        if (this._ret_value == null) {
            throw new Error("XAxis is not initialized");
        }
        else {
            return this._ret_value;
        }
    }
    initMoveX(p, compWidth) {
        for (let i = 0; i < this.preInitMoves.length; i++) {
            const elm = this.preInitMoves[i];
            const startValue = this.translate(elm.startValue, p, compWidth);
            const endValue = this.translate(elm.endValue, p, compWidth);
            if (startValue < endValue) {
                let c = new Increment(elm.from, elm.to, startValue, endValue);
                this.animations.push(c);
            }
            else {
                let c = new Decrement(elm.from, elm.to, startValue, endValue);
                this.animations.push(c);
            }
        }
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
}
