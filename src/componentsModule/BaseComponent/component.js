import { DrawLayer } from "../../Bilza.js";
import Style from "../../design/style.js";
import Transition from "../transition/transition.js";
import { XAlignment } from "./xAlignment.js";
import { YAlignment } from "./yAlignment.js";
import { InsertTypeOptions } from "./insertTypeOptions.js";
export default class Component {
    constructor(DataFn, duration = 10) {
        this.xAlignmentOptions = XAlignment;
        this.yAlignmentOptions = YAlignment;
        this.insertTypeOptions = InsertTypeOptions;
        this.insertType = this.insertTypeOptions.Insert;
        this.DURATION = duration;
        this.insertTimeInVid = 0;
        this.compData = new Transition(DataFn);
        this.d = this.compData.data;
        this.data = this.compData.data;
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    init(p) {
        return true;
    }
    draw(p) {
        return true;
    }
    update(msDelta, p) {
        return true;
    }
    log(msg) {
        console.log(msg);
    }
    addTransition(msStart) {
        return this.compData.add(msStart);
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
    drawBoundingRectangle(p) {
        this.style.strokeStyle = "black";
        p.drawRect(p.xPerc(this.d.x), p.yPerc(this.d.y), this.width(p), this.height(p), this.style);
        return true;
    }
    applyTransition(msDelta) {
        this.compData.apply(msDelta);
    }
    xAfterAlignment(p) {
        let x = this.d.x;
        if (this.d.useRelativeXY == true) {
            x = p.xPerc(this.d.x);
        }
        switch (this.d.xAlignment) {
            case this.xAlignmentOptions.Left:
                break;
            case this.xAlignmentOptions.Mid:
                x = Math.floor(x - ((this.width(p) / 2)));
                break;
            case this.xAlignmentOptions.Right:
                Math.floor(x - (this.width(p)));
                break;
        }
        return x;
    }
    yAfterAlignment(p) {
        let y = this.d.y;
        if (this.d.useRelativeXY == true) {
            y = p.yPerc(this.d.y);
        }
        switch (this.d.yAlignment) {
            case this.yAlignmentOptions.Top:
                break;
            case this.yAlignmentOptions.Mid:
                y = Math.floor(y - ((this.height(p) / 2)));
                break;
            case this.yAlignmentOptions.Bot:
                y = Math.floor(y - (this.height(p)));
                break;
        }
        return y;
    }
    getEndTime(inMilliSec = true) {
        let r = this.insertTimeInVid + this.DURATION;
        return inMilliSec ? (r * 1000) : r;
    }
    duration() {
        return this.DURATION;
    }
    getStartTime(inMilliSec = true) {
        return inMilliSec ? (this.insertTimeInVid * 1000) : this.insertTimeInVid;
    }
    setStartTime(n) {
        this.insertTimeInVid = n;
        return this.insertTimeInVid;
    }
}
