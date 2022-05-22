import PreInitMoves from "./preInitMoves.js";
import Increment from "../filters/increment.js";
import Decrement from "../filters/decrement.js";
export default class AnimatedNoBase {
    constructor(compWidth, compHeight) {
        this._ret_value = null;
        this._set_value = null;
        this.compWidth = compWidth;
        this.compHeight = compHeight;
        this.preInitMoves = [];
        this.animations = [];
    }
    init(p, startTime, endTime, duration) {
        this.runSetValue();
        this.initMoves(p);
        return true;
    }
    initMoves(p) {
        for (let i = 0; i < this.preInitMoves.length; i++) {
            const elm = this.preInitMoves[i];
            if (elm.startValue < elm.endValue) {
                let c = new Increment(elm.from, elm.to, elm.startValue, elm.endValue);
                this.animations.push(c);
            }
            else {
                let c = new Decrement(elm.from, elm.to, elm.startValue, elm.endValue);
                this.animations.push(c);
            }
        }
    }
    update(msDelta, p) {
        this.runSetValue();
        this.runAnimations(msDelta);
        return true;
    }
    runSetValue() {
        if (this._set_value !== null) {
            this._ret_value = this._set_value;
            this._set_value = null;
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
    setValue(n) {
        this._set_value = n;
        return this._set_value;
    }
    animate(from = 0, to = 10, startValue = 0, endValue = 100) {
        let a = new PreInitMoves(from, to, startValue, endValue);
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
