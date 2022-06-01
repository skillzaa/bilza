import { BaseComponent, DrawLayer } from "../Bilza.js";
export default class Text extends BaseComponent {
    constructor(content = "", colorHax = "#000000", x = 0, y = 0, dynWidth = 20, dynHeight = 20) {
        super();
        this.content = "Text Component";
        this.padding = 0;
        this.border = 0;
        this.dynWidth.setValue(dynWidth);
        this.dynHeight.setValue(dynHeight);
        this.colorBorder = "black";
        this.colorBg = "#e1f4e1";
        this.color = "black";
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
        return this.dynWidth.value();
    }
    height() {
        return this.dynHeight.value();
    }
    update(msDelta, p) {
        super.update(msDelta, p);
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
        this.style.fillStyle = "red";
        this.style.strokeStyle = "green";
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
}
