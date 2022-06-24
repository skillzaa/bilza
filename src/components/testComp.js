import { BaseComponent, AnimatedNoBase } from "../bilza.js";
import AniNumber from "../aniNumber/aniNumber.js";
export default class TestComp extends BaseComponent {
    constructor(color = "#008000") {
        super();
        this.color = color;
        this.local_x = new AniNumber(0);
        this.local_y = new AniNumber(0);
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
        this.local_x.update(msDelta);
        this.local_y.update(msDelta);
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
        p.drawFillRect(this.local_x.value(), this.local_y.value(), this.width(), this.height(), this.style);
        return true;
    }
}
