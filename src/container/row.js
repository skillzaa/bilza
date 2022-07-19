import { AniColor } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import RawText from "../components/rawText.js";
export default class Row extends BaseComponent {
    constructor(incommingTextArray = "one two") {
        super();
        this.x_internal = 0;
        this.incommingTextArray = incommingTextArray.split(" ");
        this.colorBackground = new AniColor("grey");
        this.textArray = [];
        for (let i = 0; i < this.incommingTextArray.length; i++) {
            const item = this.incommingTextArray[i];
            const txt = new RawText(item);
            txt.responsiveCoordinates = false;
            txt.responsiveDims = false;
            txt.responsivePadding = false;
            txt.border.set(0);
            txt.paddingLeft.set(2);
            txt.paddingRight.set(2);
            this.textArray.push(txt);
        }
    }
    init(p) {
        super.init(p);
        for (let i = 0; i < this.textArray.length; i++) {
            const txt = this.textArray[i];
            txt.charsWidth = this.charsWidth;
            txt.init(p);
        }
        return true;
    }
    update(msDelta, p) {
        this.colorBackground.update(msDelta);
        super.update(msDelta, p);
        for (let i = 0; i < this.textArray.length; i++) {
            const txt = this.textArray[i];
            txt.update(msDelta, p);
        }
        return true;
    }
    contentWidth() {
        if (this.canvasWidth !== null) {
            let wd = 0;
            for (let i = 0; i < this.textArray.length; i++) {
                const txt = this.textArray[i];
                wd += txt.contentWidth();
            }
            return wd;
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    contentHeight() {
        if (this.canvasWidth !== null) {
            let wd = 0;
            for (let i = 0; i < this.textArray.length; i++) {
                const txt = this.textArray[i];
                if (wd < txt.contentHeight()) {
                    wd = txt.contentHeight();
                }
            }
            return (wd + this.paddingTop.value() + this.paddingBottom.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    setFontSize(fontSize) {
        for (let i = 0; i < this.textArray.length; i++) {
            const item = this.textArray[i];
            item.fontSize.set(fontSize);
        }
    }
    setFontColor(fontColor) {
        for (let i = 0; i < this.textArray.length; i++) {
            const item = this.textArray[i];
            item.color.set(fontColor);
        }
    }
    getCell(column) {
        return this.textArray[column];
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.opacity = this.opacity.value();
        this.style.strokeStyle = this.color.value();
        const yAligned = this.yAligned();
        for (let i = 0; i < this.textArray.length; i++) {
            const txt = this.textArray[i];
            txt.x.set(this.xAligned() + this.x_internal + this.paddingLeft.value());
            txt.y.set(yAligned + this.paddingTop.value());
            txt.draw(p);
            this.x_internal += txt.contentWidth();
        }
        this.x_internal = 0;
        this.postDraw(p);
        return true;
    }
}
