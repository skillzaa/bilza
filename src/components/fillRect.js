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
        this.style.strokeStyle = this.color;
        p.drawFillRect((0 - (this.widthInPix() / 2)), (0 - (this.heightInPix() / 2)), this.widthInPix(), this.heightInPix(), this.style);
        this.removeRotation(p);
        return true;
    }
}
