export default class TextTempl {
    constructor(comp) {
        this.comp = comp;
    }
    h1() {
        this.comp.fontSize.set(200);
    }
}
