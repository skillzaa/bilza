import { BaseComponent, AnimatedNoBase } from "../Bilza.js";
export default class FillRect extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color = color;
        this.trueWidth = 0;
        this.dynHeight = new AnimatedNoBase(10);
        this.dynWidth = new AnimatedNoBase(10);
    }
    init(p) {
        super.init(p);
        this.dynWidth.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.dynHeight.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
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
        p.drawFillRect(this.loc.x(), this.loc.y(), this.width(), this.height(), this.style);
        return true;
    }
}
