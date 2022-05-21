import AniNumberMoves from "./aniNumberMoves.js";
import Increment from "../filters/increment.js";
import Decrement from "../filters/decrement.js";
export default class BaseAniNumber {
    constructor(compWidth, compHeight) {
        this._ret_value = null;
        this._set_value = null;
        this.compWidth = compWidth;
        this.compHeight = compHeight;
        this.startTime = null;
        this.endTime = null;
        this.duration = null;
        this.preInitAni = [];
        this.animations = [];
    }
    init(p, startTime, endTime, duration) {
        this.initMoveX(p);
        return true;
    }
    initMoveX(p) {
        for (let i = 0; i < this.preInitAni.length; i++) {
            const elm = this.preInitAni[i];
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
    notInitError() {
        throw new Error("XAxis is not initialized yet");
    }
    setValue(n) {
        this._set_value = n;
        return this._set_value;
    }
    animate(from = 0, to = 10, startValue = 0, endValue = 100) {
        let a = new AniNumberMoves(from, to, startValue, endValue);
        this.preInitAni.push(a);
    }
    value() {
        if (this._ret_value == null) {
            throw new Error("AniNumber is not initialized");
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
