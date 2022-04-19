import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import { XAlignment } from "./xAlignment.js";
import { YAlignment } from "./yAlignment.js";
export default class TextBase extends Component {
    constructor(content = "", color = "black", x = 0, y = 0, widthPercent = 10, heightPercent = 10) {
        super(DataFn);
        this.xAlignmentOptions = XAlignment;
        this.yAlignmentOptions = YAlignment;
        this.d.content = content;
        this.d.x = x;
        this.d.y = y;
        this.d.color = color;
        this.d.colorBorder = color;
        this.d.colorBg = "#e1f4e1";
        this.d.widthPercent = widthPercent;
        this.d.heightPercent = heightPercent;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return (p.textWidth(this.d.content.substring(0, this.d.maxDisplayChars), this.style) + (this.d.padding * 2) + (this.d.margin * 2) + (this.d.border * 2));
    }
    height(p) {
        return (p.textWidth("W", this.style) + (this.d.padding * 2) + (this.d.margin * 2) + (this.d.border * 2));
    }
    update(msDelta, p) {
        this.setFontSize(p);
        return true;
    }
    draw(p) {
        if (this.d.flagDrawBg == true) {
            this.drawBg(p);
        }
        if (this.d.flagDrawBorder == true) {
            this.drawBorder(p);
        }
        this.drawContent(p);
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
    drawBorder(p) {
        if (this.d.flagDim == true) {
            this.style.strokeStyle = this.d.colorDimBorder;
        }
        else {
            this.style.fillStyle = this.d.colorBorder;
        }
        this.style.lineWidth = this.d.border;
        p.drawRect(this.getX(p) + this.d.margin, this.getY(p) + this.d.margin, this.width(p), this.height(p), this.style);
        return true;
    }
    drawBg(p) {
        if (this.d.flagDim == true) {
            this.style.fillStyle = this.d.colorDimBg;
        }
        else {
            this.style.fillStyle = this.d.colorBg;
        }
        p.drawFillRect(this.getX(p) + this.d.margin, this.getY(p) + this.d.margin, this.width(p), this.height(p), this.style);
        return true;
    }
    drawContent(p) {
        if (this.d.flagDim == true) {
            this.style.fillStyle = this.d.colorDim;
            this.style.strokeStyle = this.d.colorDim;
        }
        else {
            this.style.fillStyle = this.d.color;
            this.style.strokeStyle = this.d.color;
        }
        p.drawText(this.d.content.substring(0, this.d.maxDisplayChars), this.getX(p) + (this.d.margin + this.d.border + this.d.padding), this.getY(p) + (this.d.margin + this.d.border + this.d.padding), this.style);
    }
    getX(p) {
        let x = p.xPerc(this.d.x);
        switch (this.d.xAlignment) {
            case this.xAlignmentOptions.Left:
                break;
            case this.xAlignmentOptions.Mid:
                x = x - (this.width(p) / 2);
                break;
            case this.xAlignmentOptions.Right:
                x = x - this.width(p);
                break;
        }
        return x;
    }
    getY(p) {
        let y = p.yPerc(this.d.y);
        switch (this.d.yAlignment) {
            case this.yAlignmentOptions.Top:
                break;
            case this.yAlignmentOptions.Mid:
                y = y - (this.height(p) / 2);
                break;
            case this.yAlignmentOptions.Bot:
                y = y - this.height(p);
                break;
        }
        return y;
    }
}
