import { BaseComponent, DrawLayer } from "../Bilza.js";
export default class Line extends BaseComponent {
    constructor() {
        super();
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 800;
        this.y2 = 100;
        this.lineWidth = 2;
        this.color = "red";
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return Math.abs(this.d.x1 - this.d.x2);
    }
    height(p) {
        return Math.abs(this.d.y1 - this.d.y2);
    }
    draw(p) {
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        this.style.lineWidth = this.d.lineWidth;
        p.drawLine(p.xPerc(this.d.x1), p.yPerc(this.d.y1), p.xPerc(this.d.x2), p.yPerc(this.d.y2), this.style);
        return true;
    }
}
