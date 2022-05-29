import { DrawLayer } from "../Bilza.js";
import Style from "../design/style.js";
import BaseProps from "./BaseProps.js";
import { OffScreenXOpt } from "./animation/aniNumber/xAxis/OffScreenXOpt.js";
import { OffScreenYOpt } from "./animation/aniNumber/yAxis/OffScreenYOpt.js";
export default class BaseComponent {
    constructor() {
        this.alwaysOn = false;
        this.offScreenXOpt = OffScreenXOpt;
        this.offScreenYOpt = OffScreenYOpt;
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
        if (this.p.canvasWidth !== null) {
            return Math.ceil((this.p.canvasWidth / 100) * this.p.widthDyn.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    height() {
        if (this.p.canvasHeight !== null) {
            return Math.ceil((this.p.canvasHeight / 100) * this.p.heightDyn.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    init(p) {
        this.p.canvasWidth = p.canvasWidth();
        this.p.canvasHeight = p.canvasHeight();
        this.p.loc.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.p.x.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.p.y.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.p.widthDyn.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.p.heightDyn.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        return true;
    }
    update(msDelta, p) {
        this.p.x.update(msDelta);
        this.p.loc.update(msDelta);
        this.p.y.update(msDelta);
        this.p.widthDyn.update(msDelta);
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
