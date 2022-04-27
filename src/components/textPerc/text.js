import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
import { XAlignment } from "../compsDesign/xAlignment.js";
import { YAlignment } from "../compsDesign/yAlignment.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
export default class Text extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = Number.MAX_SAFE_INTEGER, content = "", color = "black", x = 0, y = 0, widthPercent = 10, heightPercent = 10) {
        super(DataFn);
        this.xAlignmentOptions = XAlignment;
        this.yAlignmentOptions = YAlignment;
        this.setStartTime(startTimeSeconds * 1000);
        this.setEndTime(endTimeSeconds * 1000);
        this.d.content = content;
        this.d.x = x;
        this.d.y = y;
        this.d.color = color;
        this.d.colorBorder = color;
        this.d.colorBg = lightenDarkenColor(color, 10);
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
        if (this.d.dynamicFontSize == true) {
            this.setDynamicFontSize(p);
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
    setDynamicFontSize(p) {
        let reqWd = (p.canvasWidth() / 100 * this.d.widthPercent);
        let reqHt = (p.canvasWidth() / 100 * this.d.heightPercent);
        let returnFontSize = 1;
        let newStyle = this.style;
        for (let i = 1; i < 300; i++) {
            returnFontSize = i;
            let newWidth = p.textWidth(this.d.content.substring(this.d.maxDisplayChars), newStyle);
            let newHeight = this.height(p);
            if (newWidth >= reqWd || newHeight >= reqHt) {
                console.log("dynamicFontSize", returnFontSize);
                return returnFontSize;
            }
        }
        return this.style.fontSize;
    }
    drawBorder(p) {
        this.shadowsOff();
        this.style.fillStyle = this.d.colorBorder;
        this.style.strokeStyle = this.d.colorBorder;
        this.style.lineWidth = this.d.border;
        if (this.d.dynamicFontSize == true) {
            this.style.fontSize = this.setDynamicFontSize(p);
        }
        else {
            this.style.fontSize = this.d.fontSize;
        }
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
        if (this.d.dynamicFontSize == true) {
            this.style.fontSize = this.setDynamicFontSize(p);
        }
        else {
            this.style.fontSize = this.d.fontSize;
        }
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
        if (this.d.dynamicFontSize == true) {
            this.style.fontSize = this.setDynamicFontSize(p);
        }
        else {
            this.style.fontSize = this.d.fontSize;
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
