import { Style, DrawLayer, Transition } from "./Bilza.js";
export default class Component {
    constructor(DataFn, msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        this.compData = new Transition(DataFn);
        this.d = this.compData.data;
        this.data = this.compData.data;
        this.drawLayer = DrawLayer.MiddleGround;
        this.id = Math.random().toString(36).slice(2);
        this.style = new Style();
        this.display = true;
        this.selected = false;
        this.msStart = msStart;
        this.msEnd = msEnd;
        this.setStartTime(msStart);
        this.setEndTime(msEnd);
    }
    getSelected() {
        return this.selected;
    }
    setSelected(b) {
        this.selected = b;
        return this.selected;
    }
    getDisplay() {
        return this.display;
    }
    setDisplay(b) {
        this.display = b;
        return this.display;
    }
    getStartTime() {
        return this.msStart;
    }
    setStartTime(n = 0) {
        this.msStart = n;
        return n;
    }
    getEndTime() {
        return this.msEnd;
    }
    setEndTime(n = Number.MAX_SAFE_INTEGER) {
        this.msEnd = n;
        return n;
    }
    width(p) {
        return 0;
    }
    height(p) {
        return 0;
    }
    draw(p) {
        return true;
    }
    update(msDelta, p) {
        return true;
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
    setShadow(shadowBlur = 8, shadowOffsetX = 10, shadowOffsetY = 10, shadowColor = "#ada6a6") {
        this.style.shadowBlur = shadowBlur;
        this.style.shadowOffsetX = shadowOffsetX;
        this.style.shadowOffsetY = shadowOffsetY;
        this.style.shadowColor = shadowColor;
    }
    shadowsOn() {
        this.style.shadowBlur = 8;
        this.style.shadowOffsetX = 10;
        this.style.shadowOffsetY = 10;
        this.style.shadowColor = "#ada6a6";
    }
    resize(width, height) {
        return 0;
    }
    drawBoundingRectangle(p) {
        this.style.strokeStyle = "black";
        p.drawRect(p.xPerc(this.d.x), p.yPerc(this.d.y), this.width(p), this.height(p), this.style);
        return true;
    }
}
