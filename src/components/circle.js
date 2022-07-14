import BaseComponent from "../BaseComponent/00BaseComponent.js";
import { AniBoolean, AniColor } from "../bilza.js";
export default class Circle extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color = new AniColor(color);
        this.filled = new AniBoolean(true);
    }
    widthInPix() {
        return (this.contentWidth() + this.lateralPaddingSum());
    }
    heightInPix() {
        return (this.contentHeight() + this.verticalPaddingSum());
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
        this.style.opacity = 100;
        this.drawBackground(p);
        this.drawBorder(p);
        this.style.fillStyle = this.color.value();
        this.style.opacity = (this.opacity.value());
        this.style.strokeStyle = this.color.value();
        p.beginPath();
        p.drawCircle(this.xAlignedPadded(), this.yAlignedPadded(), (this.contentWidth() / 2), this.filled.value(), 0, 2 * Math.PI, this.style);
        p.stroke();
        return true;
    }
}
