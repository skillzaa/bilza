import RawText from "./rawText.js";
export default class Text extends RawText {
    constructor(content = "", colorHax = "#000000") {
        super(content, colorHax);
        this.fitTextToWidth = true;
        this.maxHeight = 500;
    }
    init(p) {
        super.init(p);
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        return true;
    }
    update(msDelta, p) {
        if (this.fitTextToWidth == true) {
            this.dynamicFontSize(p);
        }
        super.update(msDelta, p);
        return true;
    }
    widthInPix() {
        if (this.canvasWidth == null) {
            throw new Error("init error");
        }
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const canvasWdBy100 = Math.floor(this.canvasWidth / 100);
        const borderX2 = this.border.value() * 2;
        const pl = this.paddingLeft.value();
        const pr = this.paddingRight.value();
        const txt = this.charsWidth(this.content.value(), this.fontSize.value(), this.fontFamily);
        return Math.floor(pl + txt + pr + borderX2);
    }
    heightInPix() {
        if (this.canvasHeight == null) {
            throw new Error("init error");
        }
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const borderX2 = this.border.value() * 2;
        const pt = this.paddingTop.value();
        const pb = this.paddingBottom.value();
        const txt = this.charsWidth("W", this.style.fontSize, this.style.fontFamily);
        return Math.floor(pt + pb + txt + borderX2);
    }
    draw(p) {
        this.style.opacity = (this.opacity.value());
        this.style.fontSize = this.fontSize.value();
        this.style.fontFamily = this.fontFamily;
        this.applyRotation(p);
        if (this.showBackground.value() == true) {
            this.drawBackground(p);
        }
        if (this.border.value() > 0) {
            this.drawBorder(p);
        }
        this.drawContent(p);
        this.removeRotation(p);
        return true;
    }
    drawContent(p) {
        this.style.strokeStyle = this.color.value();
        this.style.fillStyle = this.color.value();
        p.drawText(this.content.value().substring(0, this.maxDisplayChars.value()), this.xAligned() + this.border.value() + this.paddingLeft.value(), this.yAligned() + this.border.value() + this.paddingTop.value(), this.style);
    }
    dynamicFontSize(p) {
        const reqWdInPix = (p.canvasWidth() / 100 * this.width.value());
        ;
        this.style.fontSize = this.fontSize.value();
        for (let i = 1; i < 900; i++) {
            const newWidthInPix = p.charsWidth(this.content.value(), i, this.style.fontFamily);
            if (newWidthInPix >= (reqWdInPix)) {
                this.fontSize.set(i);
                this.style.fontSize = i;
                return this.fontSize.value();
            }
        }
        return null;
    }
    shrinkToFitMaxHeight(p) {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const reqHtInPix = (p.canvasHeight() / 100 * this.maxHeight);
        const contentHeight = this.charsWidth("W", this.style.fontSize, this.style.fontFamily);
        if (contentHeight < reqHtInPix) {
            return true;
        }
        for (let i = 300; i > 0; i--) {
            const newHeightInPix = p.charsWidth("W", i, this.style.fontFamily);
            if (newHeightInPix <= reqHtInPix) {
                this.fontSize.set(i);
                this.style.fontSize = i;
                return true;
            }
        }
        return true;
    }
}
