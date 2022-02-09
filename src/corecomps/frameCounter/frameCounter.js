import { BaseComp, Style } from "../../bilzaa2d/index.js";
export default class FrameCounter extends BaseComp {
    constructor() {
        super();
        this.frame = 0;
        this.rectStyle = new Style();
        this.style.fillStyle = "yellow";
        this.rectStyle.fillStyle = "grey";
    }
    width(p) {
        return p.chars_width("Frame #:0000");
    }
    height(p) {
        return p.chars_width("Xi");
    }
    update(frame, p) {
        this.frame = frame;
        return super.update(frame, p);
    }
    draw(p) {
        let s = "Frame : " + this.frame;
        p.draw_fillRect(0, 0, p.text_width("Frame #:0000", this.rectStyle), this.height(p) + 10, this.rectStyle);
        p.drawText(s, 5, 5, this.style);
        return true;
    }
}
