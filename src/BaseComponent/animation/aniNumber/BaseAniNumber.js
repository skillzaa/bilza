import { XAlignment } from "../../../design/xAlignment.js";
import Increment from "../filters/increment.js";
import Decrement from "../filters/decrement.js";
export default class BaseAniNumber {
    constructor(compWidth, compHeight) {
        this.xAlignmentOptions = XAlignment;
        this._ret_value = null;
        this._set_value = null;
        this.compWidth = compWidth;
        this.compHeight = compHeight;
        this.startTime = null;
        this.endTime = null;
        this.duration = null;
        this.xAlign = this.xAlignmentOptions.Left;
        this.preInitMoves = [];
        this.animations = [];
    }
    init(p, startTime, endTime, duration) {
        return true;
    }
    initMoveX(p) {
        for (let i = 0; i < this.preInitMoves.length; i++) {
            const elm = this.preInitMoves[i];
            const startValue = this.translate(elm.startValue, p);
            const endValue = this.translate(elm.endValue, p);
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
    update(msDelta, p) {
        for (let i = 0; i < this.animations.length; i++) {
            const ani = this.animations[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._ret_value = v;
                this._ret_value = this.adjestXAlign(p, this._ret_value);
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
