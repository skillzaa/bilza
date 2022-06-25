import { XAlignOpt, YAlignOpt } from "../bilza.js";
import BaseComponentBase from "./BaseComponentBase.js";
export default class Loc extends BaseComponentBase {
    constructor() {
        super();
        this.charsWidth = null;
    }
    init(p) {
        this.canvasWidth = p.canvasWidth();
        this.canvasHeight = p.canvasHeight();
        return true;
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
        this.xAlign = xAlign;
        this.yAlign = yAlign;
        this.x.goto(atFrame, x);
        this.y.goto(atFrame, y);
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
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo, xAlignFrom = XAlignOpt.Left, xAlignTo = XAlignOpt.Left, yAlignFrom = YAlignOpt.Top, yAlignTo = YAlignOpt.Top, xExtraFrom = 0, xExtraTo = 0, yExtraFrom = 0, yExtraTo = 0) {
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
