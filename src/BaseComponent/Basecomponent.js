import { DrawLayer } from "../Bilza.js";
import Style from "../design/style.js";
import BaseComponentBase from "./BaseComponentBase.js";
import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";
export default class BaseComponent extends BaseComponentBase {
    constructor() {
        super();
        this.alwaysOn = false;
        this.offScreenXOpt = OffScreenXOpt;
        this.offScreenYOpt = OffScreenYOpt;
        this.duration = 0;
        this.insertTimeInVid = 0;
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
    }
    width() {
        if (this.canvasWidth !== null) {
            return Math.ceil((this.canvasWidth / 100) * this.dynWidth.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    height() {
        if (this.canvasHeight !== null) {
            return Math.ceil((this.canvasHeight / 100) * this.dynHeight.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    init(p) {
        this.canvasWidth = p.canvasWidth();
        this.canvasHeight = p.canvasHeight();
        this.loc.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.dynWidth.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.dynHeight.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        return true;
    }
    update(msDelta, p) {
        this.loc.update(msDelta);
        this.dynWidth.update(msDelta);
        this.dynHeight.update(msDelta);
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
