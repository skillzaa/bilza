import { Component, Style, Position } from "../bilzaa2d/index.js.js";
export default class Arc extends Component {
    constructor(start = new Position(200, 20), mid = new Position(200, 130), end = new Position(50, 20), color = "red") {
        super();
        this.start = start;
        this.end = end;
        this.mid = mid;
        this.showBoundingLines = true;
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
        p.beginPath();
        p.moveTo(this.start);
        p.arcTo(this.mid, this.end, this.style, 40);
        p.stroke();
        return true;
    }
}
