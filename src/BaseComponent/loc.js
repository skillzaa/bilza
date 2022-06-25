import { XAlignOpt, YAlignOpt } from "../bilza.js";
import BaseComponentBase from "./BaseComponentBase.js";
import PreInitGoto from "./designBC/preInitGoto.js";
import PreInitAnimate from "./designBC/preInitAnimate.js";
import PreInitVibrate from "./designBC/preInitVibrate.js";
export default class Loc extends BaseComponentBase {
    constructor() {
        super();
        this.preInitGotos = [];
        this.preInitAnimates = [];
        this.preInitVibrates = [];
        this.charsWidth = null;
    }
    init(p) {
        this.canvasWidth = p.canvasWidth();
        this.canvasHeight = p.canvasHeight();
        this.initGoto();
        this.initAnimate();
        this.initVibrateX();
        return true;
    }
    initVibrateX() {
        for (let i = 0; i < this.preInitVibrates.length; i++) {
            const elm = this.preInitVibrates[i];
            let v = elm.seed;
            if (this.usePercentages == true) {
                v = this.percToX(elm.seed);
            }
            this.x.vibrate(elm.from, elm.to, v, elm.offset, elm.delay);
        }
    }
    initGoto() {
        for (let i = 0; i < this.preInitGotos.length; i++) {
            const elm = this.preInitGotos[i];
            if (elm.gotoFor == "x") {
                let v = elm.theValue;
                if (this.usePercentages == true) {
                    v = this.percToX(elm.theValue);
                }
                this.x.goto(elm.frame, v);
            }
            else if (elm.gotoFor == "y") {
                let v = elm.theValue;
                if (this.usePercentages == true) {
                    v = this.percToY(elm.theValue);
                }
                this.y.goto(elm.frame, v);
            }
        }
    }
    initAnimate() {
        for (let i = 0; i < this.preInitAnimates.length; i++) {
            const e = this.preInitAnimates[i];
            if (this.usePercentages == true) {
                this.x.animate(e.timeFrom, e.timeTo, this.percToX(e.xFrom), this.percToX(e.xTo));
                this.y.animate(e.timeFrom, e.timeTo, this.percToY(e.yFrom), this.percToY(e.yTo));
            }
            else {
                this.x.animate(e.timeFrom, e.timeTo, e.xFrom, e.xTo);
                this.y.animate(e.timeFrom, e.timeTo, e.yFrom, e.yTo);
            }
        }
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    update(msDelta, p) {
        this.x.update(msDelta);
        this.y.update(msDelta);
        return true;
    }
    draw(p) {
        return true;
    }
    goto(atFrame, x, y, xAlign = XAlignOpt.Left, yAlign = YAlignOpt.Top, xExtra = 0, yExtra = 0) {
        const c = new PreInitGoto("x", atFrame, x);
        this.preInitGotos.push(c);
        const d = new PreInitGoto("y", atFrame, y);
        this.preInitGotos.push(d);
        return true;
    }
    shadowsOff() {
        this.style.shadowBlur = 0;
        this.style.shadowOffsetX = 0;
        this.style.shadowOffsetY = 0;
    }
    setShadow(shadowBlur = 8, shadowOffsetX = 10, shadowOffsetY = 10, shadowColor = "grey") {
        this.style.shadowBlur = shadowBlur;
        this.style.shadowOffsetX = shadowOffsetX;
        this.style.shadowOffsetY = shadowOffsetY;
        this.style.shadowColor = shadowColor;
    }
    shadowsOn() {
        this.style.shadowBlur = 8;
        this.style.shadowOffsetX = 10;
        this.style.shadowOffsetY = 10;
        this.style.shadowColor = "grey";
    }
    getEndTime(inMilliSec = true) {
        let r = this.insertTimeInVid + this.duration;
        return inMilliSec ? (r * 1000) : r;
    }
    getStartTime(inMilliSec = true) {
        return inMilliSec ? (this.insertTimeInVid * 1000) : this.insertTimeInVid;
    }
    setStartTime(n) {
        this.insertTimeInVid = n;
        return this.insertTimeInVid;
    }
    percToX(perc) {
        if (this.canvasWidth == null) {
            throw ("init error");
        }
        return ((this.canvasWidth / 100) * perc);
    }
    percToY(perc) {
        if (this.canvasHeight == null) {
            throw ("init error");
        }
        return ((this.canvasHeight / 100) * perc);
    }
    vibrateX(from, to, xValue, offset, delay) {
        let v = xValue;
        let c = new PreInitVibrate(from, to, v, offset, delay);
        this.preInitVibrates.push(c);
    }
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo) {
        const ani = new PreInitAnimate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo);
        this.preInitAnimates.push(ani);
        return true;
    }
    xAligned() {
        let x = this.x.value();
        switch (this.xAlign) {
            case this.XAlignOpt.Left:
                break;
            case this.XAlignOpt.Mid:
                x = x - (this.width() / 2);
                break;
            case this.XAlignOpt.Right:
                x = x - this.width();
                break;
        }
        return x;
    }
    yAligned() {
        let y = this.y.value();
        switch (this.yAlign) {
            case this.YAlignOpt.Top:
                break;
            case this.YAlignOpt.Mid:
                y = y - (this.height() / 2);
                break;
            case this.YAlignOpt.Bot:
                y = y - this.height();
                break;
        }
        return y;
    }
}
