import { Component, Style } from "../../bilzaa2d/index.js";
export default class FrameCounter extends Component {
    constructor() {
        super();
        this.x = 0;
        this.y = 0;
        this.content = "sec: ";
        this.frame = 0;
        this.padding = 4;
        this.styleRectangle = new Style();
        this.styleNumbers = new Style();
        //------default ??
        this.styleRectangle.fillStyle = "black";
        this.styleNumbers.fillStyle = "yellow";
    }
    width(p) {
        return p.textWidth(this.content + "0000", this.styleNumbers);
    }
    height(p) {
        return p.textWidth("Xi", this.styleNumbers);
    }
    update(frame, p) {
        this.frame = frame;
        return true;
        // return super.update(frame, p);
    }
    draw(p) {
        // it is upto the component author to use xPerc    
        let x = this.xPerc(this.x, p);
        let y = this.yPerc(this.y, p);
        let s = "Frame : " + this.frame;
        p.drawFillRect(x, y, this.width(p) + this.padding, this.height(p) + this.padding, this.styleRectangle);
        p.drawText(s, x + (this.padding / 2), y + (this.padding / 2), this.styleNumbers);
        return true;
    }
}
