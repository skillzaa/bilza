import { BaseComponent, DrawLayer } from "../Bilza.js";
export default class Line extends BaseComponent {
    constructor(x1 = 0, y1 = 0, x2 = 20, y2 = 20, color = "#000000") {
        super();
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.lineWidth = 2;
        this.color = color;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.lineWidth = this.lineWidth;
        p.drawLine(p.xPerc(this.x1), p.yPerc(this.y1), p.xPerc(this.x2), p.yPerc(this.y2), this.style);
        return true;
    }
}
