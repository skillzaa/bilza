import { AniColor, } from "../animationModule/animations.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
import RawText from "../components/text.js";
export default class Row extends BaseComponent {
    constructor(incommingTextArray = "one two") {
        super();
        this.x_local = 0;
        this.incommingTextArray = incommingTextArray.split(" ");
        this.colorBackground = new AniColor("grey");
        this.textArray = [];
        for (let i = 0; i < this.incommingTextArray.length; i++) {
            const item = this.incommingTextArray[i];
            const txt = new RawText(item);
            txt.border.set(1);
            txt.width.set(30);
            txt.colorBorder.set("hsl(200,100%,50%)");
            txt.paddingLeft.set(10);
            txt.paddingRight.set(10);
            txt.paddingTop.set(10);
            txt.paddingBottom.set(10);
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
                wd += txt.compWidth();
            }
            return wd;
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    contentHeight() {
        if (this.canvasWidth !== null) {
            let ht = 0;
            for (let i = 0; i < this.textArray.length; i++) {
                const txt = this.textArray[i];
                if (ht < txt.compHeight()) {
                    ht = txt.compHeight();
                }
            }
            return (ht + this.paddingTop.value() + this.paddingBottom.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    setFontSize(fontSize) {
        for (let i = 0; i < this.textArray.length; i++) {
            const item = this.textArray[i];
            item.width.set(fontSize);
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
            const _x = this.xAligned() + this.x_local + this.paddingLeft.value();
            const _y = yAligned + this.paddingTop.value();
            txt.x.set(_x);
            txt.y.set(_y);
            txt.draw(p);
            this.x_local += txt.compWidth();
        }
        this.x_local = 0;
        this.postDraw(p);
        return true;
    }
}
