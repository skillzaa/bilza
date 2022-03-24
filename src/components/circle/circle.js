import { Component } from "../../index.js";
import DataFn from "./DataFn.js";
export default class Circle extends Component {
    constructor() {
        super(DataFn);
    }
    width(p) {
        return this.d.radius * 2;
    }
    height(p) {
        return this.d.radius * 2;
    }
    draw(p) {
        if (this.d.startAngle >= 7) {
            this.d.startAngle = 0;
        }
        else {
            this.d.startAngle++;
        }
        p.drawCircle(this.d.x, this.d.y, this.d.radius, this.d.fill, this.style, this.d.startAngle);
        return true;
    }
}
