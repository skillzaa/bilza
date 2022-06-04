import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import { FontFamily } from "../../Bilza.js";
export default class TextBase {
    constructor(content = "", colorHax = "#000000", fontSize = 30, x = 0, y = 0) {
        this.x = x;
        this.y = y;
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
        this.widthForInternalUse = 0;
        this.heightForInternalUse = 0;
    }
    width(p) {
        const textWdith = p.charsWidth(this.content, this.fontSize, this.fontFamily);
        this.widthForInternalUse = textWdith + (this.paddingLeft + this.paddingRight);
        return this.widthForInternalUse;
    }
    height(p) {
        const textHeight = p.charsWidth("W", this.fontSize, this.fontFamily);
        this.heightForInternalUse = textHeight + (this.paddingTop + this.paddingBottom);
        return this.heightForInternalUse;
    }
    drawBorder(p, style) {
        if (this.border <= 0) {
            return false;
        }
        p.drawRect(this.x - (this.border), this.y - (this.border), this.widthForInternalUse, this.heightForInternalUse, style);
        return true;
    }
    drawBg(p, style) {
        p.drawFillRect(this.x, this.y, this.widthForInternalUse, this.heightForInternalUse, style);
        return true;
    }
    drawContent(p, style) {
        if (this.showContent == false) {
            return false;
        }
        p.drawText(this.content.substring(0, this.maxDisplayChars), this.x + (this.paddingLeft), this.y + (this.paddingTop), style);
    }
}
