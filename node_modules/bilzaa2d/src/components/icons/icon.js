import { Component, Style } from "../../bilzaa2d/index.js";
export default class Icon extends Component {
    constructor(code = 9876, x = 0, y = 0) {
        super();
        this.style = new Style();
        this.x = x;
        this.y = y;
        this.code = code;
    }
    width(p) {
        return p.textWidth(String.fromCharCode(this.code), this.style);
    }
    height(p) {
        return p.textWidth("X.", this.style);
    }
    draw(p) {
        let x = p.xPerc(this.x);
        let y = p.yPerc(this.y);
        p.drawIcon(this.code, x, y, this.style);
        return true;
    }
}
