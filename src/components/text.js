import { BaseComponent, DrawLayer } from "../Bilza.js";
export default class Text extends BaseComponent {
    constructor(content = "", colorHax = "#000000", dynWidth = 30) {
        super();
        this.content = content;
        this.padding = 0;
        this.border = 0;
        this.dynWidth.setValue(dynWidth);
        this.localDynHeight = 20;
        this.colorBorder = "black";
        this.colorBg = "#e1f4e1";
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
        return Math.ceil(this.canvasWidth / 100 * this.dynWidth.value());
    }
    height() {
        if (this.canvasHeight == null) {
            throw new Error("init error");
        }
        return Math.ceil(this.canvasHeight / 100 * this.localDynHeight);
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.dynamicFontSize(p);
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
        p.drawRect(this.loc.x() + (this.border / 2), this.loc.y() + (this.border / 2), this.width(), this.height(), this.style);
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
        p.drawFillRect(this.loc.x() + (this.border), this.loc.y() + (this.border), this.width(), this.height(), this.style);
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
        p.drawText(this.content.substring(0, this.maxDisplayChars), this.loc.x() + (this.border + this.padding), this.loc.y() + (this.border + this.padding), this.style);
    }
    dynamicFontSize(p) {
        const reqWd = (p.canvasWidth() / 100 * this.dynWidth.value());
        this.style.fontSize = this.fontSize;
        let newWidth = 0;
        for (let i = 1; i < 900; i++) {
            this.style.fontSize = i;
            newWidth = p.charsWidth(this.content, this.style.fontSize, this.style.fontFamily);
            const newHtpix = p.charsWidth("W", this.style.fontSize, this.style.fontFamily);
            const HtpixToPerc = Math.ceil(newHtpix / p.canvasHeight() * 100);
            if (newWidth >= (reqWd)) {
                this.fontSize = i;
                this.style.fontSize = i;
                this.localDynHeight = HtpixToPerc;
                return this.fontSize;
            }
        }
        return null;
    }
}
