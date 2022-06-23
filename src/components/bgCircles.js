import { BaseComponent, DrawLayer } from "../bilza.js";
import XY from "../design/xy.js";
export default class BgCircles extends BaseComponent {
    constructor(count = 10, color = "#008000", delay = 1) {
        super();
        this.drawLayer = DrawLayer.BackGround;
        this.count = count;
        this.color = color;
        this.size = 20;
        this.delay = delay * 60;
        this.delayCounter = this.delay;
        this.xy = [];
    }
    draw(p) {
        if (this.delayCounter <= this.delay) {
            this.delayCounter += 1;
            this.style.fillStyle = this.color;
            this.style.strokeStyle = this.color;
            for (let i = 0; i < this.xy.length; i++) {
                p.drawCircle(this.xy[i].x, this.xy[i].y, this.size, true, 0, (2 * Math.PI), this.style);
            }
            return false;
        }
        else {
            this.xy.length = 0;
            for (let i = 0; i < this.count; i++) {
                let xy = new XY(Math.ceil(Math.random() * p.canvasWidth()), Math.ceil(Math.random() * p.canvasHeight()));
                this.xy.push(xy);
            }
            this.delayCounter = 0;
        }
        return true;
    }
}
