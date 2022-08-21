import { AniBoolean, } from "../animationModule/animations.js";
import RawText from "./rawText.js";
export default class Text extends RawText {
    constructor(content = "", colorHax = "#000000") {
        super(content, colorHax);
        this.fitTextToWidth = new AniBoolean(true);
    }
    update(msDelta, p) {
        if (this.fitTextToWidth.value() == true) {
            this.dynamicFontSize(p);
        }
        super.update(msDelta, p);
        return true;
    }
    dynamicFontSize(p) {
        const reqWdInPix = (this.width.value());
        ;
        this.style.fontSize = this.fontSize.value();
        const alreadyWidth = p.charsWidth(this.content.value(), this.fontSize.value(), this.style.fontFamily);
        if (alreadyWidth >= (reqWdInPix)) {
            return null;
        }
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
}
