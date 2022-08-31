export default class ExitAniPresets {
    constructor(comp) {
        this.comp = comp;
    }
    leftOut() {
        this.comp.x.animate(this.comp.getEndTime(false) - 2, this.comp.getEndTime(false), this.comp.x.value(), -this.comp.width.value());
    }
}
