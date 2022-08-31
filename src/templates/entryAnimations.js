export default class EntryAniPresets {
    constructor(comp) {
        this.comp = comp;
    }
    leftIn(comp) {
        comp.x.animate(0, 1, -35, 50);
    }
}
