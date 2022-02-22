import { Component, Style, Position } from "../bilzaa2d/index.js";
export default class QuadraticCurveTo extends Component {
    constructor(start = new Position(50, 20), controlPoint = new Position(230, 30), end = new Position(50, 100), color = "black") {
        super();
        this.start = start;
        this.end = end;
        this.controlPoint = controlPoint;
        this.color = color;
        this.lineWidth = 2;
        this.styleCurve = new Style();
        this.styleMarker = new Style();
        this.controlPointColor = "crimson";
        this.startColor = "blue";
        this.endColor = "blue";
        this.styleMarker.lineWidth = 0;
        this.styleMarker.strokeStyle = this.controlPointColor;
        this.styleMarker.fillStyle = this.controlPointColor;
        this.markStart = true;
        this.markEnd = true;
        this.markControlPoint = true;
    }
    width(p) {
        return this.start.x - this.end.x;
    }
    height(p) {
        return this.start.x - this.end.x;
    }
    draw(p) {
        this.styleCurve.strokeStyle = this.color;
        this.styleCurve.lineWidth = this.lineWidth;
        // Quadratic Bézier curve
        p.quadraticCurveTo(this.start, this.end, this.controlPoint, this.styleCurve);
        if (this.markControlPoint == true) {
            this.styleMarker.fillStyle = this.controlPointColor;
            this.styleMarker.strokeStyle = this.controlPointColor;
            p.drawCircle(this.controlPoint.x - 5, this.controlPoint.y - 5, 5, true, this.styleMarker);
        }
        if (this.markStart == true) {
            this.styleMarker.fillStyle = this.startColor;
            this.styleMarker.strokeStyle = this.startColor;
            p.drawCircle(this.start.x - 5, this.start.y - 5, 5, true, this.styleMarker);
        }
        if (this.markEnd == true) {
            this.styleMarker.fillStyle = this.endColor;
            this.styleMarker.strokeStyle = this.endColor;
            p.drawCircle(this.end.x - 5, this.end.y - 5, 5, true, this.styleMarker);
        }
        return true;
    }
}
