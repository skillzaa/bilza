import { BaseComponent, AniNumber } from "../bilza.js";
export default class FillRect extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color = color;
        this.dynHeight = new AniNumber(10);
        this.dynWidth = new AniNumber(10);
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.dynWidth.update(msDelta);
        this.dynHeight.update(msDelta);
        return true;
    }
    widthInPix() {
        if (this.canvasWidth !== null) {
            return Math.ceil((this.canvasWidth / 100) * this.dynWidth.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    heightInPix() {
        if (this.canvasHeight !== null) {
            return Math.ceil((this.canvasHeight / 100) * this.dynHeight.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        p.drawFillRect(this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix(), this.style);
        return true;
    }
}
