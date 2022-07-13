import { AniColor } from "../bilza.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Text from "../components/text.js";
export default class Row extends BaseComponent {
    constructor(incommingTextArray = "one two") {
        super();
        this.x_internal = 0;
        this.incommingTextArray = incommingTextArray.split(" ");
        this.colorBackground = new AniColor("grey");
        this.textArray = [];
        for (let i = 0; i < this.incommingTextArray.length; i++) {
            const item = this.incommingTextArray[i];
            const txt = new Text(item);
            txt.width.set(10);
            txt.usePercentages = false;
            txt.fitTextToWidth = false;
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
    widthInPix() {
        if (this.canvasWidth !== null) {
            let wd = 0;
            for (let i = 0; i < this.textArray.length; i++) {
                const txt = this.textArray[i];
                wd += txt.widthInPix();
            }
            return (wd + this.paddingLeft.value() + this.paddingRight.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    heightInPix() {
        if (this.canvasWidth !== null) {
            let wd = 0;
            for (let i = 0; i < this.textArray.length; i++) {
                const txt = this.textArray[i];
                if (wd < txt.heightInPix()) {
                    wd = txt.heightInPix();
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
        this.applyRotation(p);
        this.style.fillStyle = this.color.value();
        this.style.opacity = this.opacity.value();
        this.style.strokeStyle = this.color.value();
        this.drawBackground(p);
        const yAligned = this.yAligned();
        for (let i = 0; i < this.textArray.length; i++) {
            const txt = this.textArray[i];
            txt.x.override(this.xAligned() + this.x_internal + this.paddingLeft.value());
            txt.y.override(yAligned + this.paddingTop.value());
            txt.draw(p);
            this.x_internal += txt.widthInPix();
        }
        this.removeRotation(p);
        this.style.opacity = 1;
        this.x_internal = 0;
        return true;
    }
    drawBackground(p) {
        this.style.fillStyle = this.colorBackground.value();
        this.style.strokeStyle = this.colorBackground.value();
        p.drawFillRect(this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix(), this.style);
    }
}
