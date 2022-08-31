export default class EntryAniPresets {
    constructor(comp) {
        this.comp = comp;
    }
    leftIn() {
        this.comp.x.animate(this.comp.getStartTime(false), this.comp.getStartTime(false) + 2, -this.comp.width.value(), this.comp.x.value());
    }
}
