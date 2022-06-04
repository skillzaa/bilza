import { BaseComponent, DrawLayer, FontFamily } from "../../Bilza.js";
import TextUtil from "./textUtil.js";
export default class Text extends BaseComponent {
    constructor(content = "", colorHax = "#000000", fontSize = 40, x = 0, y = 0) {
        super();
        this.content = content;
        this.fontSize = fontSize;
        this.fontFamily = FontFamily.Calibri;
        this.paddingLeft = 0;
        this.paddingRight = 0;
        this.paddingTop = 0;
        this.paddingBottom = 0;
        this.border = 0;
        this.colorBorder = colorHax;
        this.colorBg = "pink";
        this.color = colorHax;
        this.showContent = true;
        this.showBg = false;
        this.showTextShadow = false;
        this.showBgShadow = false;
        this.showBorderShadow = false;
        this.maxDisplayChars = 200;
        this.drawLayer = DrawLayer.MiddleGround;
        this.realWidth = 0;
        this.realHeight = 0;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.realWidth = TextUtil.realWidth(p, this.content, this.maxDisplayChars, this.fontSize, this.fontFamily, this.paddingLeft, this.paddingRight);
        this.realHeight = TextUtil.realHeight(p, this.fontSize, this.fontFamily, this.paddingTop, this.paddingBottom);
        return true;
    }
    width() {
        return this.realWidth;
    }
    height() {
        return this.realHeight;
    }
    draw(p) {
        this.style.fillStyle = this.colorBg;
        this.style.strokeStyle = this.colorBg;
        TextUtil.drawBg(p, this.style, this.loc.x(), this.loc.y(), this.realWidth, this.realHeight);
        this.style.fillStyle = this.colorBorder;
        this.style.strokeStyle = this.colorBorder;
        TextUtil.drawBorder(p, this.style, this.loc.x(), this.loc.y(), 5, this.realWidth, this.realHeight);
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.fontSize = this.fontSize;
        this.style.fontFamily = this.fontFamily;
        TextUtil.drawContent(p, this.style, this.content, this.loc.x(), this.loc.y(), this.maxDisplayChars, this.paddingLeft, this.paddingTop, this.showContent);
        return true;
    }
}
