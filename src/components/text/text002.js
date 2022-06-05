import { BaseComponent, DrawLayer, FontFamily } from "../../Bilza.js";
import lightenDarkenColor from "../../functions/lightenDarkenColor.js";
import TextUtil from "./textUtil.js";
import AnimatedNoBase from "../../BaseComponent/animation/aniNumber/animatedNoBase/AnimatedNoBase.js";
export default class Text002 extends BaseComponent {
    constructor(content = "", colorHax = "#000000", fontSize = 40, x = 0, y = 0) {
        super();
        this.content = content;
        this.fontSize = 50;
        this.fontFamily = FontFamily.Calibri;
        this.paddingLeft = new AnimatedNoBase(0);
        this.paddingRight = new AnimatedNoBase(0);
        this.paddingTop = new AnimatedNoBase(0);
        this.paddingBottom = new AnimatedNoBase(0);
        this.border = new AnimatedNoBase(0);
        this.colorBorder = colorHax;
        this.colorBg = lightenDarkenColor(colorHax, 225);
        this.color = colorHax;
        this.showContent = true;
        this.showBg = false;
        this.showTextShadow = false;
        this.showBgShadow = false;
        this.showBorderShadow = false;
        this.maxDisplayChars = 200;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    init(p) {
        super.init(p);
        this.paddingBottom.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.paddingLeft.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.paddingRight.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.paddingTop.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.border.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.paddingBottom.update(msDelta);
        this.paddingLeft.update(msDelta);
        this.paddingRight.update(msDelta);
        this.paddingTop.update(msDelta);
        this.border.update(msDelta);
        return true;
    }
    height() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const textHeight = this.charsWidth("W", this.style.fontSize, this.style.fontFamily);
        return textHeight + (this.paddingTop.value() + this.paddingBottom.value());
    }
    width() {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const textWdith = this.charsWidth(this.content.substring(0, this.maxDisplayChars), this.fontSize, this.fontFamily);
        return textWdith + (this.paddingLeft.value() + this.paddingRight.value());
    }
    draw(p) {
        this.style.fillStyle = this.colorBg;
        this.style.strokeStyle = this.colorBg;
        TextUtil.drawBg(p, this.style, this.loc.x(), this.loc.y(), this.width(), this.height());
        this.style.fillStyle = this.colorBorder;
        this.style.strokeStyle = this.colorBorder;
        TextUtil.drawBorder(p, this.style, this.loc.x(), this.loc.y(), this.border.value(), this.width(), this.height());
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.fontSize = this.fontSize;
        this.style.fontFamily = this.fontFamily;
        TextUtil.drawContent(p, this.style, this.content, this.loc.x(), this.loc.y(), this.maxDisplayChars, this.paddingLeft.value(), this.paddingTop.value(), this.showContent);
        return true;
    }
}
