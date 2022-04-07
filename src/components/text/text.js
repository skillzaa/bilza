import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class Text extends Component {
    constructor(content = "", color = "black", x = 0, y = 0, widthPercent = 10) {
        super(DataFn);
        this.d.content = content;
        this.d.x = x;
        this.d.y = y;
        this.d.color = color;
        this.d.colorMargin = color;
        this.d.widthPercent = widthPercent;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return (p.textWidth(this.d.content, this.style) + this.factorsWOFontSize());
    }
    height(p) {
        return (p.textWidth("Wi", this.style) + this.factorsWOFontSize());
    }
    update(msDelta, p) {
        this.setFontSizePerWidth(p);
        return true;
    }
    draw(p) {
        if (this.d.flagDrawBg == true) {
            this.drawBg(p);
        }
        if (this.d.flagDrawMargin == true) {
            this.drawMargin(p);
        }
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        p.drawText(this.d.content, p.xPerc(this.d.x) + (this.d.padding + this.d.margin), p.yPerc(this.d.y) + (this.d.padding + this.d.margin), this.style);
        return true;
    }
    setFontSizePerWidth(p) {
        let curFont = this.style.fontSize;
        let curWd = this.width(p);
        let reqWd = (p.canvasWidth() / 100 * this.d.widthPercent);
        this.style.fontSize = Math.abs(Math.ceil(curFont / curWd * reqWd));
    }
    drawMargin(p) {
        this.style.strokeStyle = this.d.colorMargin;
        this.style.lineWidth = this.d.margin;
        p.drawRect(p.xPerc(this.d.x), p.yPerc(this.d.y), this.width(p), this.height(p), this.style);
        return true;
    }
    drawBg(p) {
        this.style.fillStyle = this.d.colorBg;
        p.drawFillRect(p.xPerc(this.d.x) + (this.d.padding + this.d.margin), p.yPerc(this.d.y) + (this.d.padding + this.d.margin), this.width(p), this.height(p), this.style);
        return true;
    }
    factorsWOFontSize() {
        return (this.d.padding * 2) + (this.d.margin * 2);
    }
}
