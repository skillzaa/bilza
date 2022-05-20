import { OffScreenXOpt } from "../../OffScreenXOpt.js";
import MoveXItem from "./moveXItem.js";
import Increment from "../filters/increment.js";
export default class XAxis {
    constructor(initalValue) {
        this.INITIALVALUE = initalValue;
        this._ret_value = null;
        this.compWidth = null;
        this.compHeight = null;
        this.startTime = null;
        this.endTime = null;
        this.duration = null;
        this.aniMoveXinc = [];
        this.aniMoveXdec = [];
        this.animations = [];
    }
    init(p, startTime, endTime, duration, compWidth, compHeight) {
        this._ret_value = this.translate(this.INITIALVALUE, p);
        this.startTime = startTime;
        this.endTime = endTime;
        this.duration = duration;
        this.compWidth = compWidth;
        this.compHeight = compHeight;
        this.initMoveXIncArray(p);
        return true;
    }
    update(msDelta, p) {
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
    translate(value, p) {
        if (typeof value == "number") {
            return p.xPerc(value);
        }
        let r = 0;
        switch (value) {
            case OffScreenXOpt.XLeft:
                r = -1 * (this.getCompWidth() + 10);
                break;
            case OffScreenXOpt.XRight:
                r = p.xPerc(100) + this.getCompWidth() + 100;
                break;
            default:
                break;
        }
        return Math.ceil(r);
    }
    getCompWidth() {
        let r = 0;
        if (this.compWidth !== null) {
            r = this.compWidth;
        }
        else {
            this.notInitError();
        }
        return r;
    }
    getCompHeight() {
        let r = 0;
        if (this.compHeight !== null) {
            r = this.compHeight;
        }
        else {
            this.notInitError();
        }
        return r;
    }
    notInitError() {
        throw new Error("XAxis is not initialized yet");
    }
    setValue(n) {
        this._ret_value = n;
        return this._ret_value;
    }
    moveXinc(from = 0, to = 10, startValue = 0, endValue = 100) {
        if (from > to) {
            throw new Error("from can not be bigger than to for increment operation");
        }
        let a = new MoveXItem(from, to, startValue, endValue);
        this.aniMoveXinc.push(a);
    }
    moveXdec(from = 0, to = 10, startValue = 0, endValue = 100) {
        if (from < to) {
            throw new Error("from can not be smaller than to for decrement operation");
        }
        let a = new MoveXItem(from, to, startValue, endValue);
        this.aniMoveXdec.push(a);
    }
    value() {
        if (this._ret_value == null) {
            throw new Error("XAxis is not initialized");
        }
        else {
            return this._ret_value;
        }
    }
    initMoveXIncArray(p) {
        for (let i = 0; i < this.aniMoveXinc.length; i++) {
            const elm = this.aniMoveXinc[i];
            const startValue = this.translate(elm.startValue, p);
            const endValue = this.translate(elm.endValue, p);
            let c = new Increment(elm.from, elm.to, startValue, endValue);
            this.animations.push(c);
        }
    }
    initMoveXDecArray(p) {
        for (let i = 0; i < this.aniMoveXdec.length; i++) {
            const elm = this.aniMoveXdec[i];
            const startValue = this.translate(elm.startValue, p);
            const endValue = this.translate(elm.endValue, p);
            this.moveXdec(this.checkNonNull(this.startTime) + elm.from, this.checkNonNull(this.startTime) + elm.to, startValue, endValue);
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
