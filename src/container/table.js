import BaseComponent from "../BaseComponent/00BaseComponent.js";
import Row from "./row.js";
export default class Paragraph extends BaseComponent {
    constructor() {
        super();
        this.y_internal = 0;
        this.rowArray = [];
    }
    init(p) {
        super.init(p);
        for (let i = 0; i < this.rowArray.length; i++) {
            const rw = this.rowArray[i];
            rw.init(p);
        }
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
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
            return wd;
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
            return ht;
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    getCell(row, column) {
        const rw = this.rowArray[row];
        return rw.getCell(column);
    }
    draw(p) {
        this.applyRotation(p);
        this.style.fillStyle = this.color.value();
        this.style.opacity = this.opacity.value();
        this.style.strokeStyle = this.color.value();
        const xAligned = this.xAligned();
        for (let i = 0; i < this.rowArray.length; i++) {
            const rw = this.rowArray[i];
            rw.x.override(xAligned);
            rw.x.override(this.yAligned() + this.y_internal);
            rw.draw(p);
            this.y_internal += rw.heightInPix();
        }
        this.removeRotation(p);
        this.style.opacity = 1;
        this.y_internal = 0;
        return true;
    }
    addRow(txt = "one two") {
        const r = new Row(txt);
        this.rowArray.push(r);
    }
}
