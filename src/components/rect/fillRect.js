import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class FillRect extends Component {
    constructor(startTimeSeconds = 0, endTimeSeconds = 300, x = 0, y = 0, widthPercent = 10, heightPercent = 10) {
        super(DataFn, startTimeSeconds, endTimeSeconds);
        this.d.x = x;
        this.d.y = y;
        this.d.widthPercent = widthPercent;
        this.d.heightPercent = heightPercent;
        this.drawLayer = DrawLayer.MiddleGround;
    }
    width(p) {
        return ((p.canvasWidth() / 100) * this.d.widthPercent);
    }
    height(p) {
        return ((p.canvasHeight() / 100) * this.d.heightPercent);
    }
    draw(p) {
        this.style.fillStyle = this.d.color;
        this.style.strokeStyle = this.d.color;
        let newX = p.xPerc(this.d.x);
        let newY = p.yPerc(this.d.y);
        p.drawFillRect(newX, newY, this.width(p), this.height(p), this.style);
        return true;
    }
}