import { BaseComponent, DrawLayer } from "../bilza.js";
export default class BgCircles extends BaseComponent {
    constructor(count = 10, color = "#008000", delay = 1) {
        super();
        this.drawLayer = DrawLayer.BackGround;
        this.count = count;
        this.color = color;
        this.size = 20;
        this.delay = delay * 60;
        this.delayCounter = this.delay;
    }
    draw(p) {
        if (this.canvasWidth == null || this.canvasHeight == null) {
            throw new Error("init error");
        }
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        for (let i = 0; i < this.count; i++) {
            p.drawCircle((Math.random() * this.canvasWidth), (Math.random() * this.canvasHeight), this.size, true, 0, (2 * Math.PI), this.style);
        }
        return true;
    }
}
