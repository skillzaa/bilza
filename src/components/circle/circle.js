import { Component } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class Circle extends Component {
    constructor(startTime = 0, duration = 300, x = 0, y = 0, radiusPercent = 10, color = "grey", fill = true, startAngle = 0, endAngle = 2 * Math.PI) {
        super(DataFn);
        this.startTime = startTime;
        this.duration = duration;
        this.d.x = x;
        this.d.y = y;
        this.d.color = color;
        this.d.radiusPercent = radiusPercent;
        this.d.startAngle = startAngle;
        this.d.endAngle = endAngle;
        this.d.fill = fill;
    }
    width(p) {
        return (p.canvasWidth() / 100 * (this.d.radiusPercent));
    }
    height(p) {
        return (p.canvasWidth() / 100 * (this.d.radiusPercent));
    }
    draw(p) {
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        p.drawCircle(p.xPerc(this.d.x), p.yPerc(this.d.y), Math.floor(this.width(p) / 2), this.d.fill, this.d.startAngle, this.d.endAngle, this.style);
        return true;
    }
}
