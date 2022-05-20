import { DrawLayer } from "../Bilza.js";
import Style from "../design/style.js";
import { XAlignment } from "../design/xAlignment.js";
import { YAlignment } from "../design/yAlignment.js";
import BaseProps from "./BaseProps.js";
import MoveXItem from "./moveXItem.js";
import { OffScreenOptions } from "./OffScreenOptions.js";
export default class BaseComponent {
    constructor() {
        this.props = new BaseProps();
        this.p = this.props;
        this.alwaysOn = false;
        this.useRelativeXY = true;
        this.moveXArray = [];
        this.moveYArray = [];
        this.offScreenOptions = OffScreenOptions;
        this.xAlignmentOptions = XAlignment;
        this.yAlignmentOptions = YAlignment;
        this.duration = 0;
        this.insertTimeInVid = 0;
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
        this.initProps(p);
        if (this.useRelativeXY == true) {
            this.initMoveXArray(p);
            this.initMoveYArray(p);
        }
        else {
            this.initMoveXArrayNONuseRelativeXY(p);
            this.initMoveYArrayNONuseRelativeXY(p);
        }
        return true;
    }
    initProps(p) {
        this.p.x.setValue(-150);
        this.p.y.setValue(Math.ceil(p.yPerc(this.p.y.value())));
    }
    initMoveXArrayNONuseRelativeXY(p) {
        for (let i = 0; i < this.moveXArray.length; i++) {
            const elm = this.moveXArray[i];
            this.p.x.increment(elm.from, elm.to, elm.startValue, elm.endValue);
        }
    }
    initMoveYArrayNONuseRelativeXY(p) {
        for (let i = 0; i < this.moveYArray.length; i++) {
            const elm = this.moveYArray[i];
            this.p.x.increment(elm.from, elm.to, elm.startValue, elm.endValue);
        }
    }
    initMoveXArray(p) {
        for (let i = 0; i < this.moveXArray.length; i++) {
            const elm = this.moveXArray[i];
            if (elm.startValue < elm.endValue) {
                if (typeof elm.startValue != "number") {
                    console.log("offscreen found");
                }
            }
            else {
                this.p.x.decrement(this.getStartTime(false) + elm.from, this.getStartTime(false) + elm.to, Math.ceil(p.xPerc(elm.startValue) - 150), Math.ceil(p.xPerc(elm.endValue)));
            }
        }
    }
    initMoveYArray(p) {
        for (let i = 0; i < this.moveYArray.length; i++) {
            const elm = this.moveYArray[i];
            if (elm.startValue < elm.endValue) {
                this.p.y.increment(this.getStartTime(false) + elm.from, this.getStartTime(false) + elm.to, Math.ceil(p.yPerc(elm.startValue)), Math.ceil(p.yPerc(elm.endValue)));
            }
            else {
                this.p.y.decrement(this.getStartTime(false) + elm.from, this.getStartTime(false) + elm.to, Math.ceil(p.yPerc(elm.startValue)), Math.ceil(p.yPerc(elm.endValue)));
            }
        }
    }
    draw(p) {
        return true;
    }
    update(msDelta, p) {
        this.p.x.update(msDelta, p);
        this.p.y.update(msDelta, p);
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
        const item = new MoveXItem(from, to, startValue, endValue, offScreen);
        this.moveXArray.push(item);
    }
    moveY(from = 0, to = 10, startValue = 0, endValue = 100) {
        const item = new MoveXItem(from, to, startValue, endValue, offScreen);
        this.moveYArray.push(item);
    }
    move(from = 0, to = 10, startX = 0, endX = 100, startY = 0, endY = 100, offScreenX = false, offScreenY = false) {
        const itemX = new MoveXItem(from, to, startX, endX, offScreenX);
        const itemY = new MoveXItem(from, to, startY, endY, offScreenY);
        this.moveXArray.push(itemX);
        this.moveYArray.push(itemY);
    }
}
