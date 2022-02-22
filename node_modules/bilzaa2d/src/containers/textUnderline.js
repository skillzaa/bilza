import { Component, Style, XAlignment } from "../bilzaa2d/index.js";
export default class TextUnderline extends Component {
    constructor(content = "some text", x = 50, y = 1, textColor = "crimson", lineColor = "green", fontSize = 80) {
        super();
        this.styleText = new Style();
        this.styleText.fontSize = fontSize;
        this.styleLine = new Style();
        this.xAlignment = XAlignment.Mid;
        this.content = content;
        this.lineColor = lineColor;
        this.textColor = textColor;
        this.x = x;
        this.y = y;
        this.lit();
    }
    width(p) {
        //i can aslo use p.textWidth here
        return p.charsWidth(this.content, this.styleText.fontSize, this.styleText.fontName);
    }
    height(p) {
        return p.charsWidth("Xi", this.styleText.fontSize, this.styleText.fontName);
    }
    draw(p) {
        let x_pix = p.xPerc(this.x);
        let x = this.moveX(x_pix, p, this.xAlignment);
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
