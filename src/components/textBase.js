import lightenDarkenColor from "../functions/lightenDarkenColor.js";
import { FontFamily, Style } from "../Bilza.js";
export default class TextBase {
    constructor(content = "", colorHax = "#000000", fontSize = 30) {
        this.style = new Style();
        this.content = content;
        this.fontSize = fontSize;
        this.fontFamily = FontFamily.Calibri;
        this.paddingLeft = 0;
        this.paddingRight = 0;
        this.paddingTop = 0;
        this.paddingBottom = 0;
        this.border = 0;
        this.colorBorder = colorHax;
        this.colorBg = lightenDarkenColor(colorHax, 225);
        this.color = colorHax;
        this.showContent = true;
        this.showBg = false;
        this.showTextShadow = false;
        this.showBgShadow = false;
        this.showBorderShadow = false;
        this.maxDisplayChars = 200;
    }
    width(p) {
        const textWdith = p.charsWidth(this.content, this.fontSize, this.fontFamily);
        return textWdith + (this.paddingLeft + this.paddingRight);
    }
    height(p) {
        const textHeight = p.charsWidth("W", this.fontSize, this.fontFamily);
        return textHeight + (this.paddingTop + this.paddingBottom);
    }
    draw(p) {
        if (this.showBg == true) {
            this.drawBg(p);
        }
        if (this.border > 0) {
            this.drawBorder(p);
        }
        if (this.showContent == true) {
            this.drawContent(p);
        }
        return true;
    }
    drawBorder(p) {
        if (this.showBorderShadow == true) {
            this.setShadow(this.shadowBlur, this.shadowOffsetX, this.shadowOffsetY, this.shadowColor);
        }
        else {
            this.shadowsOff();
        }
        this.style.fillStyle = this.colorBorder;
        this.style.strokeStyle = this.colorBorder;
        this.style.lineWidth = this.border;
        this.style.fontSize = this.fontSize;
        p.drawRect(this.loc.x() - (this.border / 2), this.loc.y() - (this.border / 2), this.width() + (this.border), this.height() + (this.border), this.style);
        return true;
    }
    drawBg(p) {
        this.style.fillStyle = this.colorBg;
        this.style.strokeStyle = this.colorBg;
        this.style.fontSize = this.fontSize;
        p.drawFillRect(this.loc.x(), this.loc.y(), this.width(), this.height(), this.style);
        return true;
    }
    drawContent(p) {
        if (this.showTextShadow == true) {
            this.setShadow(this.shadowBlur, this.shadowOffsetX, this.shadowOffsetY, this.shadowColor);
        }
        else {
            this.shadowsOff();
        }
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.fontSize = this.fontSize;
        p.drawText(this.content.substring(0, this.maxDisplayChars), this.loc.x() + (this.padding), this.loc.y() + (this.padding / 2), this.style);
    }
}
