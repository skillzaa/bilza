import { BaseComponent, AnimatedNoBase } from "../bilza.js";
export default class Rect extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.lineWidth = new AnimatedNoBase(1);
        this.dynWidth = new AnimatedNoBase(10);
        this.dynHeight = new AnimatedNoBase(10);
        this.color = color;
    }
    init(p) {
        super.init(p);
        this.dynWidth.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.dynHeight.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
        this.lineWidth.init(this.width.bind(this), this.height.bind(this), p.canvasWidth(), p.canvasHeight());
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
        p.drawRect(this.loc.x(), this.loc.y(), this.width(), this.height(), this.style);
        return true;
    }
}
