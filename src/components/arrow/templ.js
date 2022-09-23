export default class Templ {
    constructor(comp) {
        this.comp = comp;
    }
    spear() {
        this.comp.headWidth.set(60);
        this.comp.headHeight.set(10);
        this.comp.headFilled.set(false);
        return this.comp;
    }
    fat() {
        this.comp.lineWidth.set(10);
        this.comp.headWidth.set(30);
        this.comp.headHeight.set(5);
        this.comp.headFilled.set(true);
        return this.comp;
    }
}
