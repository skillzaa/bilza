import { XAlignment } from "../xAxis/xAlignment.js";
import { YAlignment } from "../yAxis/yAlignment.js";
import LocItem from "./locItem.js";
import solveX from "./solveX.js";
import PreInitArray from "./preInitArray.js";
import XY from "./xy.js";
import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrementTimeBased.js";
export default class Loc {
    constructor(x, y, xAlign = XAlignment.Left, yAlign = YAlignment.Top, xExtra = 0, yExtra = 0) {
        this._ret_data = new XY(0, 0);
        this._set_data = new LocItem(x, y, xAlign, yAlign, xExtra, yExtra);
        ;
        this.preInitArray = [];
        this.animations = [];
        this.compWidth = null;
        this.compHeight = null;
        this.canvasWidth = null;
        this.canvasHeight = null;
        this.yAlignOpt = YAlignment;
        this.xAlignOpt = XAlignment;
    }
    init(compWidth, compHeight, canvasWidth, canvasHeight) {
        this.compWidth = compWidth;
        this.compHeight = compHeight;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.runSetValue();
        this.initIncDec(this.compWidth());
        return true;
    }
    update(msDelta) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        this.runAnimations(msDelta);
        return true;
    }
    initIncDec(compWidth) {
        for (let i = 0; i < this.preInitArray.length; i++) {
            const elm = this.preInitArray[i];
            const start = solveX(elm.from, compWidth, this.canvasWidth);
            const end = solveX(elm.to, compWidth, this.canvasWidth);
            if (start < end) {
                let c = this.newIncrement(elm.timeFrom, elm.timeTo, start, end);
                this.animations.push(c);
            }
            else {
                let c = this.newDecrement(elm.timeFrom, elm.timeTo, start, end);
                this.animations.push(c);
            }
        }
    }
    runAnimations(msDelta) {
        for (let i = 0; i < this.animations.length; i++) {
            const ani = this.animations[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._ret_data.x = v;
                console.log("v", v);
            }
        }
    }
    runSetValue() {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        if (this._set_data !== null && this._set_data.x !== null) {
            this._ret_data.x = solveX(this._set_data.x, this._set_data.xAlign, this._set_data.xExtra, this.compWidth(), this.canvasWidth);
        }
    }
    set(x, y, xAlign = XAlignment.Left, yAlign = YAlignment.Top, xExtra = 0, yExtra = 0) {
        this._set_data = new LocItem(x, y, xAlign, yAlign, xExtra, yExtra);
    }
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo, xAlignFrom = XAlignment.Left, xAlignTo = XAlignment.Left, yAlignFrom = YAlignment.Top, yAlignTo = YAlignment.Top, xExtraFrom = 0, xExtraTo = 0, yExtraFrom = 0, yExtraTo = 0) {
        const from = new LocItem(xFrom, yFrom, xAlignFrom, yAlignFrom, xExtraFrom, yExtraFrom);
        const to = new LocItem(xTo, yTo, xAlignTo, yAlignTo, xExtraTo, yExtraTo);
        const c = new PreInitArray(timeFrom, timeTo, from, to);
        this.preInitArray.push(c);
        console.log("this.preInitArray", this.preInitArray);
    }
    x() {
        if (this._ret_data !== null) {
            return this._ret_data.x;
        }
        else {
            throw new Error("init error");
        }
    }
    y() {
        if (this._ret_data !== null) {
            return this._ret_data.y;
        }
        else {
            throw new Error("init error");
        }
    }
    newIncrement(from, to, startValue, endValue) {
        let c = new Increment(from, to, startValue, endValue);
        return c;
    }
    newDecrement(from, to, startValue, endValue) {
        let c = new Decrement(from, to, startValue, endValue);
        return c;
    }
}
