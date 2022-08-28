import { hsl } from "../bilza.js";
export default class TextTheme {
    constructor(comp) {
        this.comp = comp;
    }
    red() {
        this.comp.color.set(hsl(0));
    }
}
