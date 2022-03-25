import { Component, DrawLayer } from "../../index.js";
import DataFn from "./DataFn.js";
export default class Counter extends Component {
    constructor(msStart = 0, msEnd = Number.MAX_SAFE_INTEGER) {
        super(DataFn, msStart, msEnd);
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        this.style.fontSize = this.d.fontSize;
        const thestr = `   ${this.d.content}   ${parseInt(this.d.frame.toString())} `;
        const contentWidth = p.textWidth(thestr, this.style);
        return ((contentWidth + (this.d.padding * 2)) + 10);
    }
    height(p) {
        this.style.fontSize = this.d.fontSize;
        return p.textWidth("Xi", this.style);
    }
    update(msDelat, p) {
        this.d.frame = msDelat / 1000;
        return true;
    }
    draw(p) {
        let s = "Frame:" + parseInt(this.d.frame.toString());
        this.style.fillStyle = this.d.colorRectangle;
        p.drawFillRect(this.d.x, this.d.y, this.width(p) + this.d.padding, this.height(p) + this.d.padding, this.style);
        this.style.fillStyle = this.d.colorNumbers;
        p.drawText(s, this.d.x + (this.d.padding), this.d.y + (this.d.padding), this.style);
        return true;
    }
}
