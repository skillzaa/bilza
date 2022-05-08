import { Style, DrawLayer, Transition } from "./Bilza.js";
export default class Component {
    constructor(DataFn, startSec = 0, endSec = 300) {
        this.compData = new Transition(DataFn);
        this.d = this.compData.data;
        this.data = this.compData.data;
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.msStart = 0;
        this.msEnd = 550000;
        this.setStartTime(startSec);
        this.setEndTime(endSec);
    }
    getStartTime() {
        return this.msStart;
    }
    setStartTime(seconds = 0) {
        this.msStart = seconds * 1000;
        return this.msStart;
    }
    getEndTime() {
        return this.msEnd;
    }
    setEndTime(seconds = 300) {
        this.msEnd = seconds * 1000;
        return this.msEnd;
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
}
