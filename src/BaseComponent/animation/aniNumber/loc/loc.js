import { XAlignment } from "../../../../design/xAlignment.js";
import { YAlignment } from "../../../../design/yAlignment.js";
import LocItem from "./locItem.js";
import solveX from "./solveX.js";
import solveY from "./solveY.js";
import PreInitArray from "./preInitArray.js";
import XY from "./xy.js";
import Increment from "../../filters/increment.js";
import Decrement from "../../filters/decrement.js";
import GotoArray from "./gotoArray.js";
export default class Loc {
    constructor() {
        this._ret_data = new XY();
        this.preInitArray = [];
        this.animationsX = [];
        this.animationsY = [];
        this.gotoArray = [];
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
        return true;
    }
    update(msDelta) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        this.activateFilter(msDelta);
        this.runAnimationsX(msDelta);
        this.runAnimationsY(msDelta);
        this.runGoto(msDelta);
        return true;
    }
    initIncDec(compWidth, compHeight) {
        for (let i = 0; i < this.preInitArray.length; i++) {
            const elm = this.preInitArray[i];
            this.initIncDecX(elm, compWidth);
            this.initIncDecY(elm, compHeight);
        }
    }
    activateFilter(msDelta) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        if (this.compHeight == null) {
            throw new Error("init error");
        }
        for (let i = 0; i < this.preInitArray.length; i++) {
            const elm = this.preInitArray[i];
            if ((elm.timeFrom * 1000) <= msDelta) {
                this.initIncDecX(elm, this.compWidth());
                this.initIncDecY(elm, this.compHeight());
                this.preInitArray.splice(i, 1);
            }
        }
    }
    initIncDecX(elm, compWidth) {
        const start = solveX(elm.fromLocItem, compWidth, this.canvasWidth);
        const end = solveX(elm.toLocItem, compWidth, this.canvasWidth);
        if (start < end) {
            let c = this.newIncrement(elm.timeFrom, elm.timeTo, start, end);
            this.animationsX.push(c);
        }
        else if (end < start) {
            let c = this.newDecrement(elm.timeFrom, elm.timeTo, start, end);
            this.animationsX.push(c);
        }
    }
    initIncDecY(elm, compHeight) {
        const start = solveY(elm.fromLocItem, compHeight, this.canvasHeight);
        const end = solveY(elm.toLocItem, compHeight, this.canvasHeight);
        if (start < end) {
            let c = this.newIncrement(elm.timeFrom, elm.timeTo, start, end);
            this.animationsY.push(c);
        }
        else if (end < start) {
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
    goto(atFrame, x, y, xAlign = XAlignment.Left, yAlign = YAlignment.Top, xExtra = 0, yExtra = 0) {
        let loc = new LocItem(x, y, xAlign, yAlign, xExtra, yExtra);
        let c = new GotoArray(atFrame, loc);
        this.gotoArray.push(c);
    }
    runGoto(msDelta) {
        if (this.compWidth == null) {
            throw new Error("init error");
        }
        if (this.compHeight == null) {
            throw new Error("init error");
        }
        for (let i = 0; i < this.gotoArray.length; i++) {
            const gotoItem = this.gotoArray[i];
            if ((gotoItem.atFrame * 1000) <= msDelta) {
                this._ret_data.x = solveX(gotoItem.gotoLocItem, this.compWidth(), this.canvasWidth);
                this._ret_data.y = solveY(gotoItem.gotoLocItem, this.compHeight(), this.canvasHeight);
                this.gotoArray.splice(i, 1);
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
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo, xAlignFrom = XAlignment.Left, xAlignTo = XAlignment.Left, yAlignFrom = YAlignment.Top, yAlignTo = YAlignment.Top, xExtraFrom = 0, xExtraTo = 0, yExtraFrom = 0, yExtraTo = 0) {
        const fromLocItem = new LocItem(xFrom, yFrom, xAlignFrom, yAlignFrom, xExtraFrom, yExtraFrom);
        const toLocItem = new LocItem(xTo, yTo, xAlignTo, yAlignTo, xExtraTo, yExtraTo);
        const c = new PreInitArray(timeFrom, timeTo, fromLocItem, toLocItem);
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
