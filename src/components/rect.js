import { BaseComponent, AniNumber } from "../Bilza.js";
export default class Rect extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color = color;
        this.lineWidth = new AniNumber(1);
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.lineWidth.update(msDelta);
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
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.lineWidth = this.lineWidth.value();
        '';
        p.drawRect(this.xAligned(), this.yAligned(), this.widthInPix(), this.heightInPix(), this.style);
        return true;
    }
}
