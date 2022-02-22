import { Component, Style } from "../../bilzaa2d/index.js";
export default class TextUnderline extends Component {
    constructor() {
        super();
        this.styleText = new Style();
        this.styleLine = new Style();
        this.content = "some content";
        this.lineColor = "green";
        this.textColor = "crimson";
        this.x = 0;
        this.y = 0;
    }
    width(p) {
        //i can aslo use p.textWidth here
        return p.charsWidth(this.content, this.styleText.fontSize, this.styleText.fontName);
    }
    height(p) {
        return p.charsWidth("Xi", this.styleText.fontSize, this.styleText.fontName);
    }
    draw(p) {
        let x = p.xPerc(this.x);
        let y = p.yPerc(this.y);
        p.drawText(this.content, x, y, this.styleText);
        //---------------------------------
        p.drawLine(x, y + this.height(p), x + this.width(p), y + this.height(p), this.styleLine);
        return true;
    }
    dim() {
        this.styleLine.strokeStyle = "grey";
        this.styleText.fillStyle = "grey";
    }
    lit() {
        this.styleLine.strokeStyle = this.lineColor;
        this.styleText.fillStyle = this.textColor;
        this.styleLine.shadowBlur = 8;
        this.styleLine.shadowOffsetX = 5;
        this.styleLine.shadowOffsetY = 9;
    }
}
