import { AniBoolean, } from "../animationModule/animations.js";
import RawText from "./rawText.js";
export default class Text extends RawText {
    constructor(content = "", colorHax = "#000000") {
        super(content, colorHax);
        this.fitTextToWidth = new AniBoolean(false);
        this.fitTextToHeight = new AniBoolean(false);
    }
    update(msDelta, p) {
        if (this.fitTextToWidth.value() == true) {
            this.dynamicFontSize(p);
        }
        if (this.fitTextToHeight.value() == true) {
            this.shrinkToFitMaxHeight(p);
        }
        super.update(msDelta, p);
        return true;
    }
    dynamicFontSize(p) {
        const reqWdInPix = (this.width.value());
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
        const reqHtInPix = (this.height.value());
        const contentHeight = this.charsWidth("W", this.fontSize.value(), this.style.fontFamily);
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
