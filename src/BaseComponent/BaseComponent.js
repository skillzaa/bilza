import { XAlignment, YAlignment } from "../bilza.js";
import BaseComponentBase from "./BaseComponentBase.js";
import AniPresent from "./aniPresent.js";
export default class BaseComponent extends BaseComponentBase {
    constructor() {
        super();
        this.charsWidth = null;
        this.aniPreset = new AniPresent(this);
    }
    init(p) {
        this.canvasWidth = p.canvasWidth();
        this.canvasHeight = p.canvasHeight();
        this.loc.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        return true;
    }
    width() {
        return 0;
    }
    height() {
        return 0;
    }
    update(msDelta, p) {
        this.loc.update(msDelta);
        return true;
    }
    draw(p) {
        return true;
    }
    checkCollision(x, y, p) {
        return false;
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
    goto(atFrame, x, y, xAlign = XAlignment.Left, yAlign = YAlignment.Top, xExtra = 0, yExtra = 0) {
        return this.loc.goto(atFrame, x, y, xAlign, yAlign, xExtra, yExtra);
    }
    animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo, xAlignFrom = XAlignment.Left, xAlignTo = XAlignment.Left, yAlignFrom = YAlignment.Top, yAlignTo = YAlignment.Top, xExtraFrom = 0, xExtraTo = 0, yExtraFrom = 0, yExtraTo = 0) {
        return this.loc.animate(timeFrom, timeTo, xFrom, xTo, yFrom, yTo, xAlignFrom, xAlignTo, yAlignFrom, yAlignTo, xExtraFrom, xExtraTo, yExtraFrom, yExtraTo);
    }
    x() {
        return this.loc.x();
    }
    y() {
        return this.loc.y();
    }
}
