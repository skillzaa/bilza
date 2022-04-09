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
        this.setFontSize(p);
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
        p.drawText(this.d.content, this.getX(p) + (this.d.padding + this.d.margin), p.yPerc(this.d.y) + (this.d.padding + this.d.margin), this.style);
        return true;
    }
    setFontSize(p) {
        let reqWd = (p.canvasWidth() / 100 * this.d.widthPercent);
        let reqHt = (p.canvasWidth() / 100 * this.d.heightPercent);
        for (let i = 1; i < 300; i++) {
            this.style.fontSize = i;
            let newWidth = this.width(p);
            let newHeight = this.height(p);
            if (newWidth >= reqWd || newHeight >= reqHt) {
                return this.style.fontSize;
            }
        }
        return this.style.fontSize;
    }
    drawMargin(p) {
        this.style.strokeStyle = this.d.colorMargin;
        this.style.lineWidth = this.d.margin;
        p.drawRect(this.getX(p), p.yPerc(this.d.y), this.width(p), this.height(p), this.style);
        return true;
    }
    drawBg(p) {
        this.style.fillStyle = this.d.colorBg;
        p.drawFillRect(this.getX(p), p.yPerc(this.d.y), this.width(p), this.height(p), this.style);
        return true;
    }
    factorsWOFontSize() {
        return (this.d.padding * 2) + (this.d.margin * 2);
    }
    getX(p) {
        let x = p.xPerc(this.d.x);
        switch (this.d.xAlignment) {
            case 0:
                break;
            case 1:
                x = x - (this.width(p) / 2);
                break;
            case 2:
                break;
            default:
                return x;
                break;
        }
        return x;
    }
}
