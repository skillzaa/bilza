import { Component, FontNames } from "../../index.js";
import DataFn from "./DataFn.js";
import CalcData from "./calcData.js";
export default class Text extends Component {
    constructor(content = "", fontColor = "black", fontSize = 40, msStart = 0, msEnd = Number.MAX_SAFE_INTEGER, x = 50, y = 50) {
        super(DataFn, msStart, msEnd);
        this.calcData = new CalcData();
        this.fontFamilyNames = FontNames;
        this.d.content = content;
        this.d.x = x;
        this.d.y = y;
        this.d.fontColor = fontColor;
        this.d.fontSize = fontSize;
    }
    width(p) {
        return ((this.d.widthMargin * 2) + (this.d.widthPadding * 2) + this.calcData.contentWidth);
    }
    height(p, perc = 0) {
        return ((this.d.widthMargin * 2) + (this.d.widthPadding * 2) + this.calcData.contentHeight);
    }
    update(ms, p) {
        this.compData.apply(ms);
        this.calcData.marginX = this.d.x;
        this.calcData.marginY = this.d.y;
        this.calcData.borderX = this.d.x + this.d.widthMargin;
        this.calcData.borderY = this.d.y + this.d.widthMargin;
        this.calcData.paddingX = this.d.x + this.d.widthMargin + this.d.widthBorder;
        this.calcData.paddingY = this.d.y + this.d.widthMargin + this.d.widthBorder;
        this.calcData.contentAreaX = this.d.x + this.d.widthMargin + this.d.widthBorder + this.d.widthPadding;
        this.calcData.contentAreaY = this.d.y + this.d.widthMargin + this.d.widthBorder + this.d.widthPadding;
        this.calcData.contentWidth = this.contentWidth(p);
        this.calcData.contentHeight = this.contentHeight(p);
        return true;
    }
    draw(p) {
        this.drawMargin(p);
        this.drawBorder(p);
        this.drawPadding(p);
        this.drawContentArea(p);
        this.drawText(p);
        this.drawBoundingRectangle(p);
        return true;
    }
    drawContentArea(p) {
        if (this.d.flagDrawContentArea == false) {
            return;
        }
        this.style.fillStyle = this.d.colorContentBg;
        p.drawFillRect(this.calcData.contentAreaX, this.calcData.contentAreaY, this.contentWidth(p), this.contentHeight(p), this.style);
    }
    drawText(p) {
        if (this.d.flagDrawText == false) {
            return;
        }
        if (this.d.flagTextShadow == true) {
            this.style.shadowColor = this.d.textShadowColor;
            this.style.shadowOffsetX = this.d.textShadowOffsetX;
            this.style.shadowOffsetY = this.d.textShadowOffsetY;
            this.style.shadowBlur = this.d.textShadowBlur;
        }
        else {
            this.style.shadowOffsetX = 0;
            this.style.shadowOffsetY = 0;
            this.style.shadowBlur = 0;
        }
        this.style.fillStyle = this.d.fontColor;
        this.style.fontSize = this.d.fontSize;
        this.style.fontName = this.d.fontFamily;
        p.drawText(this.d.content, this.calcData.contentAreaX, this.calcData.contentAreaY, this.style);
    }
    contentHeight(p, perc = 40) {
        let charHt = p.charsWidth("X", this.d.fontSize, this.d.fontFamily);
        charHt += (charHt / 100 * perc);
        return charHt;
    }
    contentWidth(p) {
        let r = p.charsWidth(this.d.content, this.d.fontSize, this.d.fontFamily);
        return r;
    }
    drawPadding(p) {
        if (this.d.flagDrawPadding == false) {
            return;
        }
        this.style.fillStyle = this.d.colorPadding;
        p.drawFillRect(this.calcData.paddingX, this.calcData.paddingY, (this.d.widthPadding * 2) + this.calcData.contentWidth, (this.d.widthPadding * 2) + this.calcData.contentHeight, this.style);
    }
    drawBorder(p) {
        if (this.d.flagDrawBorder == false) {
            return;
        }
        this.style.fillStyle = this.d.colorBorder;
        p.drawFillRect(this.calcData.borderX, this.calcData.borderY, ((this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentWidth), ((this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentHeight), this.style);
    }
    drawMargin(p) {
        if (this.d.flagDrawMargin == false) {
            return;
        }
        this.style.fillStyle = this.d.colorMargin;
        this.style.strokeStyle = this.d.colorMargin;
        this.style.lineWidth = this.d.widthMargin;
        p.drawFillRect(this.calcData.marginX, this.calcData.marginY, ((this.d.widthMargin * 2) + (this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentWidth), ((this.d.widthMargin * 2) + (this.d.widthBorder * 2) + (this.d.widthPadding * 2) + this.calcData.contentHeight), this.style);
    }
    drawBoundingRectangle(p, color = "red", lineWidth = 4) {
        if (this.d.flagDrawBoundingRectangle == false) {
            return;
        }
        if (this.d.flagBoundingRectShadow == true) {
            this.style.fillStyle = this.d.colorBoundingRect;
            this.style.strokeStyle = this.d.colorBoundingRect;
            this.style.shadowColor = this.d.boundingRectShadowColor;
            this.style.shadowOffsetX = this.d.boundingRectShadowOffsetX;
            this.style.shadowOffsetY = this.d.boundingRectShadowOffsetY;
            this.style.shadowBlur = this.d.boundingRectShadowBlur;
        }
        else {
            this.style.shadowOffsetX = 0;
            this.style.shadowOffsetY = 0;
            this.style.shadowBlur = 0;
        }
        p.drawRect(this.d.x - (this.d.boundingRectXYExtra[0] / 2), this.d.y - (this.d.boundingRectXYExtra[1] / 2), this.width(p) + this.d.boundingRectXYExtra[0], this.height(p) + this.d.boundingRectXYExtra[1], this.style);
    }
    checkCollision(x, y, p) {
        if (x > this.d.x && x < this.width(p)) {
            if (y > this.d.y && y < this.height(p)) {
                return true;
            }
        }
        return false;
    }
}