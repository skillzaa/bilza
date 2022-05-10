import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class Line extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = 300, x1 = 0, y1 = 0, x2 = 100, y2 = 100, color = "black", lineWidth = 2) {
        super(DataFn, startTimeSeconds, endTimeSeconds);
        this.d.x1 = x1;
        this.d.y1 = y1;
        this.d.x2 = x2;
        this.d.y2 = y2;
        this.d.color = color;
        this.d.lineWidth = lineWidth;
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
