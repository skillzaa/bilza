import { BaseComponent, AniNumber } from "../bilza.js";
export default class Rect extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.lineWidth = new AniNumber(1);
        this.dynWidth = new AniNumber(10);
        this.dynHeight = new AniNumber(10);
        this.color = color;
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.lineWidth.update(msDelta);
        this.dynWidth.update(msDelta);
        this.dynHeight.update(msDelta);
        return true;
    }
    width() {
        if (this.canvasWidth !== null) {
            return Math.ceil((this.canvasWidth / 100) * this.dynWidth.value());
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    height() {
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
        this.style.lineWidth = this.lineWidth.value();
        p.drawRect(this.xAligned(), this.yAligned(), this.width(), this.height(), this.style);
        return true;
    }
}
