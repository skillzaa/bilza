export default class EntryAniPresets {
    constructor(comp) {
        this.comp = comp;
    }
    leftIn() {
        this.comp.x.animate(this.comp.getStartTime(false), this.comp.getStartTime(false) + 2, -this.comp.width.value(), this.comp.x.value());
    }
    rightIn() {
        this.comp.x.animate(this.comp.getStartTime(false), this.comp.getStartTime(false) + 1, 100 + this.comp.width.value(), this.comp.x.value());
    }
    bottomIn() {
        this.comp.y.animate(this.comp.getStartTime(false), this.comp.getStartTime(false) + 1, 100 + this.comp.height.value(), this.comp.y.value());
    }
    topIn() {
        this.comp.y.animate(this.comp.getStartTime(false), this.comp.getStartTime(false) + 1, (-1 * this.comp.height.value()), this.comp.y.value());
    }
    fadeIn() {
        this.comp.opacity.animate(this.comp.getStartTime(false), this.comp.getStartTime(false) + 1, 0, 100);
    }
}
