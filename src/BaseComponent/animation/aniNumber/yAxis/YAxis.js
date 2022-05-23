import { OffScreenXOpt } from "../xAxiz/OffScreenXOpt.js";
import MoveXItem from "../moveXItem.js";
import { YAlignment } from "./yAlignment.js";
import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
export default class YAxis {
    constructor(compWidth, compHeight) {
        this.yAlignmentOptions = YAlignment;
        this._ret_value = null;
        this._set_value = null;
        this.compWidth = compWidth;
        this.compHeight = compHeight;
        this.yAlign = this.yAlignmentOptions.Top;
        this.preInitMoves = [];
        this.animations = [];
    }
    init(p, startTime, endTime, duration) {
        this._ret_value = this.translate(0, p);
        this.initMoveX(p);
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
    translate(value, p) {
        if (typeof value == "number") {
            return p.xPerc(value);
        }
        let r = 0;
        switch (value) {
            case OffScreenXOpt.XLeft:
                r = -1 * (this.compWidth(p) + 10);
                break;
            case OffScreenXOpt.XRight:
                r = p.xPerc(100) + this.compWidth(p) + 100;
                break;
            default:
                break;
        }
        return Math.ceil(r);
    }
    update(msDelta, p) {
        if (this._set_value !== null) {
            this._ret_value = p.xPerc(this._set_value);
            this._ret_value = this.adjestYAlign(p, this._ret_value);
            this._set_value = null;
        }
        for (let i = 0; i < this.animations.length; i++) {
            const ani = this.animations[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._ret_value = v;
                this._ret_value = this.adjestYAlign(p, this._ret_value);
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
    adjestYAlign(p, incomming) {
        let x = incomming;
        switch (this.yAlign) {
            case this.yAlignmentOptions.Top:
                break;
            case this.yAlignmentOptions.Mid:
                x = Math.floor(x - ((this.compHeight(p) / 2)));
                break;
            case this.yAlignmentOptions.Bot:
                Math.floor(x - (this.compHeight(p)));
                break;
        }
        return x;
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
