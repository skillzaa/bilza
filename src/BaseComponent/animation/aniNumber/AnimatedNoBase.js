import PreInitIncDec from "./preInitIncDec.js";
import Increment from "../filters/increment.js";
import Decrement from "../filters/decrement.js";
export default class AnimatedNoBase {
    constructor(defaultValue = 0) {
        this._ret_value = defaultValue;
        this._set_value = null;
        this.preInitIncDec = [];
        this.animations = [];
    }
    init(compWidth, compHeight, canvasWidth, canvasHeight) {
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
        return this._ret_value;
    }
    setValue(n) {
        this._set_value = n;
        return this._set_value;
    }
    animate(from = 0, to = 10, startValue = 0, endValue = 100) {
        let a = new PreInitIncDec(from, to, startValue, endValue);
        this.preInitIncDec.push(a);
    }
    initIncDec() {
        for (let i = 0; i < this.preInitIncDec.length; i++) {
            const elm = this.preInitIncDec[i];
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
