import { XAlignment } from "../../../../design/xAlignment.js";
import { YAlignment } from "../../../../design/yAlignment.js";
import LocItem from "./locItem.js";
import solveX from "./solveX.js";
import solveY from "./solveY.js";
import PreInitArray from "./preInitArray.js";
import XY from "./xy.js";
import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrement.js";
export default class Loc {
    constructor(x, y, xAlign = XAlignment.Left, yAlign = YAlignment.Top, xExtra = 0, yExtra = 0) {
        this._set_data = new LocItem(x, y, xAlign, yAlign, xExtra, yExtra);
        ;
        this._ret_data = new XY(0, 0);
        this.preInitArray = [];
        this.animationsX = [];
        this.animationsY = [];
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
        this.runSet();
        this.initIncDec(this.compWidth(), this.compHeight());
        return true;
    }
    update(msDelta) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        this.runSet();
        this.runAnimationsX(msDelta);
        this.runAnimationsY(msDelta);
        this.runExhaustedCheckX(msDelta);
        this.runExhaustedCheckY(msDelta);
        this.removeExhaustedX(msDelta);
        this.removeExhaustedY(msDelta);
        return true;
    }
    initIncDec(compWidth, compHeight) {
        for (let i = 0; i < this.preInitArray.length; i++) {
            const elm = this.preInitArray[i];
            this.initIncDecX(elm, compWidth);
            this.initIncDecY(elm, compHeight);
        }
    }
    initIncDecX(elm, compWidth) {
        const start = solveX(elm.from, compWidth, this.canvasWidth);
        const end = solveX(elm.to, compWidth, this.canvasWidth);
        if (start < end) {
            let c = this.newIncrement(elm.timeFrom, elm.timeTo, start, end);
            this.animationsX.push(c);
        }
        else {
            let c = this.newDecrement(elm.timeFrom, elm.timeTo, start, end);
            this.animationsX.push(c);
        }
    }
    initIncDecY(elm, compHeight) {
        const start = solveY(elm.from, compHeight, this.canvasHeight);
        const end = solveY(elm.to, compHeight, this.canvasHeight);
        if (start < end) {
            let c = this.newIncrement(elm.timeFrom, elm.timeTo, start, end);
            this.animationsY.push(c);
        }
        else {
            let c = this.newDecrement(elm.timeFrom, elm.timeTo, start, end);
            this.animationsY.push(c);
        }
    }
    runAnimationsX(msDelta) {
        for (let i = 0; i < this.animationsX.length; i++) {
            const ani = this.animationsX[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._ret_data.x = v;
            }
        }
    }
    runExhaustedCheckX(msDelta) {
        for (let i = 0; i < this.animationsX.length; i++) {
            const ani = this.animationsX[i];
            if (ani.isExhausted() == true) {
            }
        }
    }
    runExhaustedCheckY(msDelta) {
        for (let i = 0; i < this.animationsY.length; i++) {
            const ani = this.animationsY[i];
            if (ani.isExhausted() == true) {
            }
        }
    }
    removeExhaustedX(msDelta) {
        for (let i = 0; i < this.animationsX.length; i++) {
            const ani = this.animationsX[i];
            if (ani.isExhausted() == true) {
                console.log("is exhaused", msDelta);
                this.animationsX.splice(i, 1);
            }
        }
    }
    removeExhaustedY(msDelta) {
        for (let i = 0; i < this.animationsY.length; i++) {
            const ani = this.animationsY[i];
            if (ani.isExhausted() == true) {
                console.log("is exhaused", msDelta);
                this.animationsY.splice(i, 1);
            }
        }
    }
    runAnimationsY(msDelta) {
        for (let i = 0; i < this.animationsY.length; i++) {
            const ani = this.animationsY[i];
            ani.update(msDelta);
            let v = ani.value();
            if (v != null) {
                this._ret_data.y = v;
            }
        }
    }
    runSet() {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        if (this.compHeight == null) {
            throw new Error("init error");
        }
        if (this._set_data !== null && this._set_data.x !== null) {
            this._ret_data.x = solveX(this._set_data, this.compWidth(), this.canvasWidth);
            this._ret_data.y = solveY(this._set_data, this.compHeight(), this.canvasHeight);
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
