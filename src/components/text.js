import PlainText from "./plainText.js";
export default class Text extends PlainText {
    constructor(content = "", colorHax = "#000000") {
        super(content, colorHax);
        this.fitTextToWidth = true;
        this.maxHeight = 500;
    }
    update(msDelta, p) {
        if (this.fitTextToWidth == true) {
            this.dynamicFontSize(p);
        }
        super.update(msDelta, p);
        return true;
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
    applyBoth(p) {
        this.dynamicFontSize(p);
        this.shrinkToFitMaxHeight(p);
    }
}
