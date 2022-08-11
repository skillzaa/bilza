import { DrawLayer } from "../design/drawLayer.js";
import BaseComponent from "../BaseComponent/00BaseComponent.js";
export default class Background extends BaseComponent {
    constructor(color = "#efeee3") {
        super();
        this.drawLayer = DrawLayer.SystemBackGround;
        this.color.set(color);
    }
    init(p) {
        super.init(p);
        return true;
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.color.update(msDelta);
        return true;
    }
    widthInPix() {
        if (this.canvasWidth !== null) {
            return this.canvasWidth;
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    heightInPix() {
        if (this.canvasHeight !== null) {
            return this.canvasHeight;
        }
        else {
            throw new Error("the component is not initialized yet");
        }
    }
    draw(p) {
        p.drawBackground(this.color.value());
        return true;
    }
}
