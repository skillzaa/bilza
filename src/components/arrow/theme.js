import { hsl } from "../../bilza.js";
export default class TextTheme {
    constructor(comp) {
        this.comp = comp;
    }
    color(Hue_0_to_360) {
        this.comp.color.set(hsl(Hue_0_to_360));
        return this.comp;
    }
}
