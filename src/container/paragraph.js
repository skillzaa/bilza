import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Row from "./row.js";
import { AniNumber, AniBoolean, AniColor } from "../bilza.js";
export default class Paragraph extends BaseComponent {
    constructor() {
        super();
        this.y_internal = 0;
        this.showBackground = new AniBoolean(true);
        this.useParentFontSize = new AniBoolean(false);
        this.useParentFontColor = new AniBoolean(true);
        this.padding = new AniNumber(0);
        this.fontSize = new AniNumber(50);
        this.rowGap = new AniNumber(5);
        this.border = new AniNumber(0);
        this.opacityBackground = new AniNumber(100);
        this.fontColor = new AniColor("black");
        this.colorBackground = new AniColor("grey");
        this.colorBorder = new AniColor("black");
        this.rowArray = [];
    }
    init(p) {
        super.init(p);
        for (let i = 0; i < this.rowArray.length; i++) {
            const rw = this.rowArray[i];
            rw.charsWidth = this.charsWidth;
            rw.init(p);
        }
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.rowGap.update(msDelta);
        this.fontSize.update(msDelta);
        if (this.useParentFontSize.value() == true) {
            this.setFontSize(this.fontSize.value());
        }
        if (this.useParentFontColor.value() == true) {
            this.setFontColor(this.fontColor.value());
        }
        for (let i = 0; i < this.rowArray.length; i++) {
            const rw = this.rowArray[i];
            rw.update(msDelta, p);
        }
        return true;
    }
    widthInPix() {
        if (this.canvasWidth !== null) {
            let wd = 0;
            for (let i = 0; i < this.rowArray.length; i++) {
                const rw = this.rowArray[i];
                if (rw.widthInPix() > wd) {
                    wd = rw.widthInPix();
                }
            }
            return (wd + (this.padding.value() * 2));
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    heightInPix() {
        if (this.canvasWidth !== null) {
            let ht = 0;
            for (let i = 0; i < this.rowArray.length; i++) {
                const rw = this.rowArray[i];
                ht += rw.heightInPix();
            }
            ht += (this.rowGap.value() * (this.rowArray.length - 1));
            ht += (this.padding.value() * 2);
            return ht;
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    setFontSize(fontSize) {
        for (let i = 0; i < this.rowArray.length; i++) {
            const item = this.rowArray[i];
            item.setFontSize(fontSize);
        }
    }
    setFontColor(fontColor) {
        for (let i = 0; i < this.rowArray.length; i++) {
            const item = this.rowArray[i];
            item.setFontColor(fontColor);
        }
    }
    getCell(row, column) {
        const rw = this.rowArray[row];
        return rw.getCell(column);
    }
    getRow(row) {
        return this.rowArray[row];
    }
    draw(p) {
        this.applyRotation(p);
        this.style.opacity = 100;
        if (this.border.value() > 0) {
            this.drawBorder(p);
        }
        if (this.showBackground.value() == true) {
            this.style.opacity = this.opacityBackground.value();
            this.drawBackground(p);
            this.style.opacity = 100;
        }
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        const xAligned = this.xAligned();
        for (let i = 0; i < this.rowArray.length; i++) {
            const rw = this.rowArray[i];
            rw.x.override(xAligned + this.padding.value());
            rw.y.override(this.yAligned() + this.padding.value() + this.y_internal);
            rw.draw(p);
            this.y_internal += rw.heightInPix() + this.rowGap.value();
        }
        this.removeRotation(p);
        this.style.opacity = 1;
        this.y_internal = 0;
        return true;
    }
    drawBackground(p) {
        this.style.fillStyle = this.colorBackground.value();
        this.style.strokeStyle = this.colorBackground.value();
        p.drawFillRect(this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix(), this.style);
    }
    drawBorder(p) {
        this.style.fillStyle = this.colorBorder.value();
        this.style.strokeStyle = this.colorBorder.value();
        this.style.lineWidth = this.border.value();
        p.drawRect(this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix(), this.style);
    }
    addRow(txt = "one two") {
        const r = new Row(txt);
        this.rowArray.push(r);
    }
}