import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./textData.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
export default class Text extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", colorHax = "#000000", x = 0, y = 0) {
        super(DataFn);
        this.xAlignmentOptions = XAlignment;
        this.yAlignmentOptions = YAlignment;
        this.setStartTime(startTimeSeconds * 1000);
        this.setEndTime(endTimeSeconds * 1000);
        this.d.content = content;
        this.d.x = x;
        this.d.y = y;
        this.d.color = colorHax;
        this.d.colorBorder = colorHax;
        this.d.colorBg = lightenDarkenColor(colorHax, 10);
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return (p.textWidth(this.d.content.substring(0, this.d.maxDisplayChars), this.style) + (this.d.padding * 2) + (this.d.margin * 2) + (this.d.border * 2));
    }
    height(p) {
        return (p.charsWidth("W", this.d.fontSize, this.style.fontName) + (this.d.padding * 2) + (this.d.margin * 2) + (this.d.border * 2));
    }
    init(p) {
        return true;
    }
    update(msDelta, p) {
        if (this.d.flagUseDynResize == true) {
            this.dynamicFontSize(p);
        }
        if (this.d.flagShrinkHeightToFit == true) {
            this.shrinkHeightToFit(p);
        }
        return true;
    }
    draw(p) {
        if (this.d.flagDrawBg == true) {
            this.drawBg(p);
        }
        if (this.d.flagDrawBorder == true) {
            this.drawBorder(p);
        }
        if (this.d.flagDrawContent == true) {
            this.drawContent(p);
        }
        return true;
    }
    drawBorder(p) {
        this.shadowsOff();
        this.style.fillStyle = this.d.colorBorder;
        this.style.strokeStyle = this.d.colorBorder;
        this.style.lineWidth = this.d.border;
        this.style.fontSize = this.d.fontSize;
        p.drawRect(this.getX(p) + this.d.margin, this.getY(p) + this.d.margin, this.width(p), this.height(p), this.style);
        return true;
    }
    drawBg(p) {
        if (this.d.flagBgShadow == true) {
            this.shadowsOn();
        }
        else {
            this.shadowsOff();
        }
        this.style.fillStyle = this.d.colorBg;
        this.style.strokeStyle = this.d.colorBg;
        this.style.fontSize = this.d.fontSize;
        p.drawFillRect(this.getX(p) + this.d.margin, this.getY(p) + this.d.margin, this.width(p), this.height(p), this.style);
        return true;
    }
    drawContent(p) {
        if (this.d.flagTextShadow == true) {
            this.style.shadowBlur = this.d.shadowBlur;
            this.style.shadowOffsetX = this.d.shadowOffsetX;
            this.style.shadowOffsetY = this.d.shadowOffsetY;
            this.style.shadowColor = this.d.colorShadow;
        }
        else {
            this.shadowsOff();
        }
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        this.style.fontSize = this.d.fontSize;
        p.drawText(this.d.content.substring(0, this.d.maxDisplayChars), this.getX(p) + (this.d.margin + this.d.border + this.d.padding), this.getY(p) + (this.d.margin + this.d.border + this.d.padding), this.style);
    }
    getX(p) {
        let x = this.d.x;
        if (this.d.flagUseRelativeXY == true) {
            x = p.xPerc(this.d.x);
        }
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
        let y = this.d.y;
        if (this.d.flagUseRelativeXY == true) {
            y = p.yPerc(this.d.y);
        }
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
    dynamicFontSize(p) {
        let reqWd = (p.canvasWidth() / 100 * this.d.dynWidth);
        this.style.fontSize = this.d.fontSize;
        let newWidth = 0;
        for (let i = 1; i < 900; i++) {
            this.style.fontSize = i;
            newWidth = this.width(p);
            if (newWidth >= reqWd) {
                this.d.fontSize = i;
                this.style.fontSize = i;
                return this.d.fontSize;
            }
        }
        return null;
    }
    shrinkHeightToFit(p) {
        let reqHt = (p.canvasHeight() / 100 * this.d.dynHeight);
        if (this.height(p) < reqHt) {
            return true;
        }
        this.style.fontSize = this.d.fontSize;
        const oldFontSize = this.style.fontSize;
        for (let i = this.style.fontSize; i > 5; i--) {
            this.style.fontSize -= 1;
            this.d.fontSize = this.style.fontSize;
            if (this.height(p) < reqHt) {
                return true;
            }
        }
        return false;
    }
}
