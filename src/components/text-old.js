import PlainText from "./plainText.js";
export default class Text extends PlainText {
    constructor(content = "", colorHax = "#000000") {
        super(content, colorHax);
        this.maxHeight = 500;
    }
    init(p) {
        super.init(p);
        this.applyBoth(p);
        return true;
    }
    update(msDelta, p) {
        this.applyBoth(p);
        super.update(msDelta, p);
        return true;
    }
    dynamicFontSize(p) {
        const reqWdInPix = this.reqWdInPixForFontSize(p);
        this.style.fontSize = this.fontSize.value();
        for (let i = 1; i < 900; i++) {
            const newWidthInPix = p.charsWidth(this.content, i, this.style.fontFamily);
            if (newWidthInPix >= (reqWdInPix)) {
                this.fontSize.set(i);
                this.style.fontSize = i;
                return this.fontSize.value();
            }
        }
        return null;
    }
    reqWdInPixForFontSize(p) {
        const r = (p.canvasWidth() / 100 * this.width.value());
        const s = r - (this.paddingLeft.value() + this.paddingRight.value());
        return s;
    }
    shrinkToFitMaxHeight(p) {
        if (this.charsWidth == null) {
            throw new Error("init error");
        }
        const reqHtInPix = (p.canvasHeight() / 100 * this.maxHeight);
        const reqHtInPixwoPad = reqHtInPix - (this.paddingTop.value() + this.paddingBottom.value());
        const contentHeight = this.charsWidth("W", this.style.fontSize, this.style.fontFamily);
        if (contentHeight < reqHtInPixwoPad) {
            return true;
        }
        for (let i = 300; i > 0; i--) {
            const newHeightInPix = p.charsWidth("W", i, this.style.fontFamily);
            if (newHeightInPix <= reqHtInPixwoPad) {
                this.fontSize.set(i);
                this.style.fontSize = i;
                return true;
            }
        }
        return true;
    }
    applyBoth(p) {
        this.dynamicFontSize(p);
        this.shrinkToFitMaxHeight(p);
    }
}
