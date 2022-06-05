import { AnimatedNoBase } from "../../Bilza.js";
import Text002 from "./text002.js";
import TextUtil from "./textUtil.js";
export default class Text extends Text002 {
    constructor(content = "", colorHax = "#000000", fontSize = 40, x = 0, y = 0) {
        super(content, colorHax, fontSize, x, y);
        this.maxHeight = 20;
        this.dynWidth = new AnimatedNoBase(10);
        this.useDynWidth = false;
        this.useMaxHeight = false;
    }
    init(p) {
        super.init(p);
        this.dynWidth.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.dynWidth.update(msDelta);
        if (this.useDynWidth == true) {
            this.dynamicFontSize(p);
        }
        if (this.useMaxHeight == true) {
            this.shrinkToFitMaxHeight(p);
        }
        return true;
    }
    dynamicFontSize(p) {
        const reqWdInPix = this.reqWdInPixForFontSize(p);
        this.style.fontSize = this.fontSize;
        for (let i = 1; i < 900; i++) {
            const newWidthInPix = p.charsWidth(this.content, i, this.style.fontFamily);
            if (newWidthInPix >= (reqWdInPix)) {
                this.fontSize = i;
                this.style.fontSize = i;
                return this.fontSize;
            }
        }
        return null;
    }
    reqWdInPixForFontSize(p) {
        const r = (p.canvasWidth() / 100 * this.dynWidth.value());
        const s = r - (this.paddingLeft.value() + this.paddingRight.value());
        return s;
    }
    shrinkToFitMaxHeight(p) {
        const reqHtInPix = (p.canvasHeight() / 100 * this.maxHeight);
        const reqHtInPixwoPad = reqHtInPix - (this.paddingTop.value() + this.paddingBottom.value());
        const contentHeight = TextUtil.contentHeight(p, this.style.fontSize, this.style.fontFamily);
        if (contentHeight < reqHtInPixwoPad) {
            return true;
        }
        for (let i = 300; i > 0; i--) {
            const newHeightInPix = p.charsWidth("W", i, this.style.fontFamily);
            if (newHeightInPix <= reqHtInPixwoPad) {
                this.fontSize = i;
                this.style.fontSize = i;
                return true;
            }
        }
        return true;
    }
}
