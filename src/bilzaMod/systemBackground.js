import { DrawLayer } from "../design/drawLayer.js";
export default class SystemBackground {
    constructor(color = "#efeee3") {
        this.drawLayer = DrawLayer.BackGround;
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
