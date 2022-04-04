import { Component, DrawLayer } from "../../Bilza.js";
import DataFn from "./DataFn.js";
export default class Line extends Component {
    constructor(x1 = 0, y1 = 0, x2 = 100, y2 = 100) {
        super(DataFn);
        this.d.x1 = x1;
        this.d.y1 = y1;
        this.d.x2 = x2;
        this.d.y2 = y2;
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
        return true;
    }
}
