import lightenDarkenColor from "../functions/lightenDarkenColor.js";
import { BaseComponent, DrawLayer } from "../Bilza.js";
export default class Text extends BaseComponent {
    constructor(content = "", colorHax = "#000000", dynWidth = 30) {
        super();
        this.content = content;
        this.padding = 0;
        this.border = 0;
        this.dynWidth.setValue(dynWidth);
        this.maxHeight = 20;
        this.calcHeight = 0;
        this.colorBorder = colorHax;
        this.colorBg = lightenDarkenColor(colorHax, 225);
        this.color = colorHax;
        this.fontSize = 25;
        this.showContent = true;
        this.showBg = false;
        this.showTextShadow = false;
        this.showBgShadow = false;
        this.showBorderShadow = false;
        this.maxDisplayChars = 200;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        const widthInPix = Math.ceil(this.canvasWidth / 100 * this.dynWidth.value());
        return widthInPix + (this.padding * 2);
    }
    height() {
        return this.calcHeight;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.dynamicFontSize(p);
        this.calcHeight = p.textWidth(this.content, this.style);
        return true;
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
        if (this.showBgShadow == true) {
            this.setShadow(this.shadowBlur, this.shadowOffsetX, this.shadowOffsetY, this.shadowColor);
        }
        else {
            this.shadowsOff();
        }
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
    reqWdInPix(p) {
        const r = (p.canvasWidth() / 100 * this.dynWidth.value());
        const s = r - (this.padding * 2);
        return s;
    }
    dynamicFontSize(p) {
        const reqWdInPix = this.reqWdInPix(p);
        this.style.fontSize = this.fontSize;
        let newWidth = 0;
        for (let i = 1; i < 900; i++) {
            this.style.fontSize = i;
            const newWidthInPix = p.charsWidth(this.content, this.style.fontSize, this.style.fontFamily);
            const newHtpix = p.charsWidth("W", this.style.fontSize, this.style.fontFamily);
            const HtpixToPerc = Math.ceil(newHtpix / p.canvasHeight() * 100);
            if (newWidthInPix >= (reqWdInPix)) {
                this.fontSize = i;
                this.style.fontSize = i;
                this.maxHeight = HtpixToPerc;
                return this.fontSize;
            }
        }
        return null;
    }
}
