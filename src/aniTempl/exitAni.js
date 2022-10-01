export default class ExitAniPresets {
    constructor(comp) {
        this.comp = comp;
    }
    leftOut() {
        this.comp.x.animate(this.comp.time.getEnd(true) - 2, this.comp.time.getEnd(true), this.comp.x.value(), -this.comp.width.value());
        return this.comp;
    }
    rightOut() {
        this.comp.x.animate(this.comp.time.getEnd(true) - 1, this.comp.time.getEnd(true), this.comp.x.value(), 100 + this.comp.width.value());
        return this.comp;
    }
    bottomOut() {
        this.comp.y.animate(this.comp.time.getEnd(true) - 1, this.comp.time.getEnd(true), this.comp.y.value(), 100 + this.comp.height.value());
        return this.comp;
    }
    topOut() {
        this.comp.y.animate(this.comp.time.getEnd(true) - 1, this.comp.time.getEnd(true), this.comp.y.value(), (-1 * this.comp.height.value()));
        return this.comp;
    }
    fadeOut() {
        this.comp.opacity.animate(this.comp.time.getEnd(true) - 1, this.comp.time.getEnd(true), 100, 0);
        return this.comp;
    }
}
