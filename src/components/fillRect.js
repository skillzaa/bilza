import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class FillRect extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color.set(color);
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        return true;
    }
    widthInPix() {
        return this.contentWidth() + this.paddingLeft.value() + this.paddingRight.value();
    }
    contentWidth() {
        if (this.canvasWidth !== null) {
            return Math.ceil((this.canvasWidth / 100) * this.width.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    heightInPix() {
        return this.contentHeight() + this.paddingTop.value() + this.paddingBottom.value();
    }
    contentHeight() {
        if (this.canvasHeight !== null) {
            return Math.ceil((this.canvasHeight / 100) * this.height.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    draw(p) {
        this.preDraw();
        this.applyRotation(p);
        this.style.opacity = this.opacity.value();
        this.drawBackground(p);
        this.drawBorder(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        p.drawFillRect(this.xAlignedPadded(), this.yAlignedPadded(), this.contentWidth(), this.contentHeight(), this.style);
        this.removeRotation(p);
        this.postDraw();
        return true;
    }
}
