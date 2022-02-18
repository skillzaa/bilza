import { Component, Style, Transition } from "../../bilzaa2d/index.js";
import DataFn from "./DataFn.js";
export default class Text extends Component {
    constructor() {
        super();
        this.styleText = new Style();
        this.styleBackground = new Style();
        this.styleBorder = new Style();
        this.styleUnderline = new Style();
        this.styleOverline = new Style();
        this.compData = new Transition(DataFn);
        this.d = this.compData.data;
    }
    width(p) {
        return p.charsWidth(this.compData.data.content, this.styleText.fontSize, this.styleText.fontName);
    }
    height(p) {
        return p.charsWidth("W", this.styleText.fontSize, this.styleText.fontName);
    }
    draw(p) {
        this.drawBackground(p);
        this.drawBorder(p);
        // p.drawBackground("green");
        this.drawContent(p);
        this.drawUnderline(p);
        this.drawOverline(p);
        return true;
    }
    update(frame, p) {
        this.compData.apply(frame); //--important!!
        return true;
    }
    drawBackground(p) {
        if (this.d.showBackground == true) {
            this.styleBackground.fillStyle = this.d.backgroundColor;
            p.drawFillRect(p.xPerc(this.d.x), p.yPerc(this.d.y), this.width(p), this.height(p), this.styleBackground);
        }
    }
    drawBorder(p) {
        if (this.d.showBorder == true) {
            this.styleBorder.fillStyle = this.d.borderColor;
            this.styleBorder.lineWidth = this.d.borderWidth;
            p.drawRect(p.xPerc(this.d.x), p.yPerc(this.d.y), this.width(p), this.height(p), this.styleBorder);
        }
    }
    drawUnderline(p) {
        if (this.d.underline == true) {
            this.styleUnderline.fillStyle = this.d.underlineColor;
            this.styleUnderline.strokeStyle = this.d.underlineColor;
            this.styleUnderline.lineWidth = this.d.underlineWidth;
            p.drawLine(p.xPerc(this.d.x), p.yPerc(this.d.y) + this.height(p), p.xPerc(this.d.x) + this.width(p), p.yPerc(this.d.y) + this.height(p), this.styleUnderline);
        }
    }
    drawOverline(p) {
        if (this.d.overline == true) {
            this.styleUnderline.fillStyle = this.d.underlineColor;
            this.styleUnderline.strokeStyle = this.d.underlineColor;
            this.styleUnderline.lineWidth = this.d.underlineWidth;
            p.drawLine(p.xPerc(this.d.x), p.yPerc(this.d.y), p.xPerc(this.d.x) + this.width(p), p.yPerc(this.d.y), this.styleUnderline);
        }
    }
    drawContent(p) {
        this.styleText.fillStyle = this.d.fontColor;
        this.styleText.strokeStyle = this.d.fontColor;
        this.styleText.fontSize = this.d.fontSize;
        this.styleText.fontName = this.d.fontName;
        p.drawText(this.d.content, p.xPerc(this.d.x), p.yPerc(this.d.y), this.styleText);
    }
}
