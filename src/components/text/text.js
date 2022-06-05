import Text002 from "./text002.js";
export default class Text extends Text002 {
    constructor(content = "", colorHax = "#000000", fontSize = 40, x = 0, y = 0) {
        super(content, colorHax, fontSize, x, y);
        this.useDynamicWidth = true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        return true;
    }
}
