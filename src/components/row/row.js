import BaseComponent from "../../BaseComponent/00BaseComponent.js";
import Text from "../text.js";
export default class Row extends BaseComponent {
    constructor(incommingTextArray = ["one", "two"]) {
        super();
        this.x_internal = 0;
        this.incommingTextArray = incommingTextArray;
        this.textArray = [];
        for (let i = 0; i < incommingTextArray.length; i++) {
            const txt = new Text("Text");
            txt.width.set(10);
            txt.fitTextToWidth = false;
            txt.content.set(incommingTextArray[i]);
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
        super.update(msDelta, p);
        for (let i = 0; i < this.textArray.length; i++) {
            const txt = this.textArray[i];
            txt.update(msDelta, p);
        }
        return true;
    }
    widthInPix() {
        if (this.canvasWidth !== null) {
            return Math.ceil((this.canvasWidth / 100) * this.width.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    heightInPix() {
        if (this.canvasHeight !== null) {
            return Math.ceil((this.canvasHeight / 100) * this.height.value());
        }
        else {
            throw new Error("the component is not initialized yet");
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
        for (let i = 0; i < this.textArray.length; i++) {
            const txt = this.textArray[i];
            txt.x.override(this.xAligned() + this.x_internal);
            txt.y.override(this.yAligned());
            txt.draw(p);
            this.x_internal += txt.widthInPix();
        }
        this.removeRotation(p);
        this.style.opacity = 1;
        return true;
    }
}