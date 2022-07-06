import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class FillRect extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color = color;
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
    draw(p) {
        this.applyRotation(p);
        this.style.fillStyle = this.color;
        this.style.globalAlpha = (this.opacity.value() / 100);
        this.style.strokeStyle = this.color;
        p.drawFillRect(this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix(), this.style);
        this.removeRotation(p);
        this.style.globalAlpha = 1;
        return true;
    }
}
