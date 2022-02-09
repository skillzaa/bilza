import { BaseComp, Style } from "../../bilzaa2d/index.js";
export default class Icon extends BaseComp {
    constructor(code = 9876, x = 0, y = 0, incomTempl = new Style()) {
        super();
        this.x = x;
        this.y = y;
        this.code = code;
        this.style.merge(incomTempl);
    }
    width(p) {
        return p.text_width(String.fromCharCode(this.code), this.style);
    }
    height(p) {
        return p.text_width("X.", this.style);
    }
    draw(p) {
        p.drawIcon(this.code, this.x, this.y, this.style);
        return true;
    }
}
