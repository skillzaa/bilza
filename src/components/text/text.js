import { Component, Style } from "../../bilzaa2d/index.js";
import TextTemplates from "./textTemplates.js";
export { TextTemplates };
import { XAlignment, YAlignment } from "../../bilzaa2d/design/alignment.js";
//this is simple text / word
export default class Text extends Component {
    constructor(content) {
        super();
        this.x = 0;
        this.xAlignment = XAlignment.Mid;
        this.yAlignment = YAlignment.Top;
        this.y = 0;
        this.content = content;
        this.fontColor = "blue";
        this.fontSize = 22;
        this.fontFamily = "serif";
        this.underline = false;
        this.underlineExtend = false;
        this.underlineColor = "black";
        this.underlineWidth = 2;
        this.overlineWidth = 2;
        this.overline = false;
        this.overlineExtend = false;
        this.overlineColor = "black";
        this.highlight = false;
        this.highlightExtend = false;
        this.highlightColor = "yellow";
        this.shadow = true;
        this.shadowBlur = 5;
        this.shadowColor = "grey";
        this.shadowOffsetX = 8;
        this.shadowOffsetY = 8;
        this.style = new Style();
    }
    finalX(p) {
        let xPix = p.xPerc(this.x);
        switch (this.xAlignment) {
            case XAlignment.Left:
                return xPix;
                break;
            case XAlignment.Mid:
                return xPix - (this.width(p) / 2);
                break;
            case XAlignment.Right:
                return xPix - (this.width(p));
                break;
        }
    }
    width(p) {
        return p.charsWidth(this.content, this.style.fontSize, this.style.fontName);
    }
    height(p) {
        return p.charsWidth("W", this.style.fontSize, this.style.fontName);
    }
    draw(p) {
        if (this.highlight == true) {
            this.drawHighlight(p);
        }
        this.drawContent(p);
        if (this.underline == true) {
            this.drawUnderline(p);
        }
        if (this.overline == true) {
            this.drawOverline(p);
        }
        return true;
    }
    drawHighlight(p) {
        if (this.highlight == true) {
            this.style.fillStyle = this.highlightColor;
            p.drawFillRect(this.finalX(p), p.yPerc(this.y), this.width(p), this.height(p), this.style);
        }
    }
    drawUnderline(p) {
        if (this.underline == true) {
            let yperc = p.yPerc(this.y);
            this.style.fillStyle = this.underlineColor;
            this.style.strokeStyle = this.underlineColor;
            this.style.lineWidth = this.underlineWidth;
            p.drawLine(this.finalX(p), yperc + this.height(p), this.finalX(p) + this.width(p), yperc + this.height(p), this.style);
        }
    }
    drawOverline(p) {
        if (this.underline == true) {
            let yperc = p.yPerc(this.y);
            this.style.fillStyle = this.overlineColor;
            this.style.strokeStyle = this.overlineColor;
            this.style.lineWidth = this.overlineWidth;
            p.drawLine(this.finalX(p), yperc, this.finalX(p) + this.width(p), yperc, this.style);
        }
    }
    drawContent(p) {
        this.style.fillStyle = this.fontColor;
        this.style.strokeStyle = this.fontColor;
        this.style.fontSize = this.fontSize;
        if (this.shadow == true) {
            this.style.shadowBlur = this.shadowBlur;
            this.style.shadowColor = this.shadowColor;
            this.style.shadowOffsetX = this.shadowOffsetX;
            this.style.shadowOffsetY = this.shadowOffsetY;
        }
        p.drawText(this.content, this.finalX(p), p.yPerc(this.y), this.style);
    }
}
