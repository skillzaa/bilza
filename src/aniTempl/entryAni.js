export default class EntryAniPresets {
    constructor(comp) {
        this.comp = comp;
    }
    leftIn() {
        this.comp.x.animate(this.comp.time.getStart(true), this.comp.time.getStart(true) + 2, -this.comp.compWidth(), this.comp.x.valueNR());
        return this.comp;
    }
    rightIn() {
        this.comp.x.animate(this.comp.time.getStart(true), this.comp.time.getStart(true) + 1, 100 + this.comp.width.value(), this.comp.x.value());
        return this.comp;
    }
    bottomIn() {
        this.comp.y.animate(this.comp.time.getStart(true), this.comp.time.getStart(true) + 1, 100 + this.comp.height.value(), this.comp.y.value());
        return this.comp;
    }
    topIn() {
        this.comp.y.animate(this.comp.time.getStart(true), this.comp.time.getStart(true) + 1, (-1 * (this.comp.height.value() * 3)), this.comp.y.value());
        return this.comp;
    }
    fadeIn() {
        this.comp.opacity.animate(this.comp.time.getStart(true), this.comp.time.getStart(true) + 1, 0, 100);
        return this.comp;
    }
}
