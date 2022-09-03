export default class ExitAniPresets {
    constructor(comp) {
        this.comp = comp;
    }
    leftOut() {
        this.comp.x.animate(this.comp.getEndTime(false) - 2, this.comp.getEndTime(false), this.comp.x.value(), -this.comp.width.value());
    }
    rightOut() {
        this.comp.x.animate(this.comp.getEndTime(false) - 1, this.comp.getEndTime(false), this.comp.x.value(), 100 + this.comp.width.value());
    }
    bottomOut() {
        this.comp.y.animate(this.comp.getEndTime(false) - 1, this.comp.getEndTime(false), this.comp.y.value(), 100 + this.comp.height.value());
    }
    topOut() {
        this.comp.y.animate(this.comp.getEndTime(false) - 1, this.comp.getEndTime(false), this.comp.y.value(), (-1 * this.comp.height.value()));
    }
    fadeOut() {
        this.comp.opacity.animate(this.comp.getEndTime(false) - 1, this.comp.getEndTime(false), 100, 0);
    }
}
