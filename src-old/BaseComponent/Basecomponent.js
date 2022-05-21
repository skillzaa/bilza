import { DrawLayer } from "../Bilza.js";
import Style from "../design/style.js";
import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import BaseProps from "./BaseProps.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { OffScreenYOpt } from "./OffScreenYOpt.js";
export default class BaseComponent {
    constructor() {
        this.props = new BaseProps();
        this.p = this.props;
        this.alwaysOn = false;
        this.moveYArray = [];
        this.offScreenXOpt = OffScreenXOpt;
        this.offScreenYOpt = OffScreenYOpt;
        this.xAlignmentOptions = XAlignment;
        this.yAlignmentOptions = YAlignment;
        this.duration = 0;
        this.insertTimeInVid = 0;
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
    }
    width(p) {
        return 100;
    }
    height(p) {
        return 100;
    }
    init(p) {
        this.initProps(p);
        return true;
    }
    initProps(p) {
        this.p.x.init(p, this.getStartTime(), this.getEndTime(), this.duration, this.width(p), this.height(p));
        this.p.y = 0;
    }
    draw(p) {
        return true;
    }
    update(msDelta, p) {
        this.p.x.update(msDelta, p);
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
    resize(width, height) {
        return 0;
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
    moveX(from = 0, to = 10, startValue = 0, endValue = 100) {
        this.props.x.moveX(from, to, startValue, endValue);
    }
}
