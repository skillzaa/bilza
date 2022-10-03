import Component from "../engineComponent/engineComponent.js";
import { AniNumber, } from "../animations/animations.js";
export default class CanvasBorder extends Component {
    constructor(startTime, endTime, componentPack, color = "grey", borderWidth = 0.5) {
        super(componentPack);
        this.borderWidth = new AniNumber(borderWidth);
        this.color.set(color);
        this.drawLayer = 1;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.borderWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.opacity = (this.opacity.value());
        const reqWidth = (p.canvasWidth() / 100) * this.borderWidth.value();
        p.drawFillRect(0, 0, reqWidth, p.canvasHeight(), this.style);
        p.drawFillRect(p.canvasWidth() - reqWidth, 0, reqWidth, p.canvasHeight(), this.style);
        p.drawFillRect(0, 0, p.canvasWidth(), reqWidth, this.style);
        p.drawFillRect(0, p.canvasHeight() - reqWidth, p.canvasWidth(), reqWidth, this.style);
        this.postDraw(p);
        return true;
    }
}
