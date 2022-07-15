import { AniBoolean, BaseComponent } from "../bilza.js";
export default class Circle extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color.set(color);
        this.filled = new AniBoolean(true);
    }
    contentWidth() {
        if (this.canvasWidth !== null) {
            return Math.ceil((this.canvasWidth / 100) * (this.width.value()));
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    contentHeight() {
        if (this.canvasWidth !== null) {
            return Math.ceil((this.canvasWidth / 100) * (this.width.value()));
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        p.beginPath();
        p.drawCircle(this.contentX() + (this.contentWidth() / 2), this.contentY() + (this.contentWidth() / 2), (this.contentWidth() / 2), this.filled.value(), 0, 2 * Math.PI, this.style);
        p.stroke();
        this.postDraw(p);
        return true;
    }
}
