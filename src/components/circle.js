import BaseComponent from "../BaseComponent/00BaseComponent.js";
import { AniBoolean, AniColor } from "../bilza.js";
export default class Circle extends BaseComponent {
    constructor(color = "#000000") {
        super();
        this.color = new AniColor(color);
        this.filled = new AniBoolean(true);
    }
    widthInPix() {
        if (this.canvasWidth !== null) {
            return Math.ceil((this.canvasWidth / 100) * (this.width.value()));
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    heightInPix() {
        return this.widthInPix();
    }
    draw(p) {
        this.style.fillStyle = this.color.value();
        this.style.globalAlpha = (this.opacity.value() / 100);
        this.style.strokeStyle = this.color.value();
        p.beginPath();
        p.drawCircle(this.xAligned() + (this.widthInPix() / 2), this.yAligned() + (this.widthInPix() / 2), (this.widthInPix() / 2), this.filled.value(), 0, 2 * Math.PI, this.style);
        p.stroke();
        return true;
    }
}
