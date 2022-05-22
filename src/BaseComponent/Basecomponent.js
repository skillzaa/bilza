import { DrawLayer } from "../Bilza.js";
import Style from "../design/style.js";
import { YAlignment } from "../design/yAlignment.js";
import BaseProps from "./BaseProps.js";
import { OffScreenXOpt } from "./OffScreenXOpt.js";
import { OffScreenYOpt } from "./OffScreenYOpt.js";
export default class BaseComponent {
    constructor() {
        this.alwaysOn = false;
        this.moveYArray = [];
        this.offScreenXOpt = OffScreenXOpt;
        this.offScreenYOpt = OffScreenYOpt;
        this.yAlignmentOptions = YAlignment;
        this.duration = 0;
        this.insertTimeInVid = 0;
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.props = new BaseProps(this.width.bind(this), this.height.bind(this));
        ;
        this.p = this.props;
    }
    width() {
        if (this.p.widthPix !== null) {
            return this.p.widthPix;
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    height() {
        if (this.p.heightPix !== null) {
            return this.p.heightPix;
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    init(p) {
        this.p.widthPix = Math.ceil((p.canvasWidth() / 100) * this.p.widthDyn);
        this.p.heightPix = Math.ceil((p.canvasHeight() / 100) * this.p.heightDyn);
        this.initProps(p);
        return true;
    }
    initProps(p) {
        this.p.x.init(this.width(), this.height(), p.canvasWidth(), p.canvasHeight());
        this.p.y.init(this.width(), this.height(), p.canvasWidth(), p.canvasHeight());
    }
    draw(p) {
        return true;
    }
    update(msDelta, p) {
        this.p.x.update(msDelta);
        this.p.y.update(msDelta);
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
}
