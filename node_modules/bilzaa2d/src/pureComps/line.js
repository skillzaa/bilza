import { Component, Style, Position } from "../bilzaa2d/index.js";
export default class Line extends Component {
    constructor(start = new Position(0, 0), end = new Position(100, 100), color = "red") {
        super();
        this.start = start;
        this.end = end;
        this.color = color;
        this.lineWidth = 2;
        this.style = new Style();
    }
    width(p) {
        return this.start.x - this.end.x;
    }
    height(p) {
        return this.start.x - this.end.x;
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.lineWidth = this.lineWidth;
        p.drawLine(this.start.x, this.start.y, this.end.x, this.end.y, this.style);
        return true;
    }
}
