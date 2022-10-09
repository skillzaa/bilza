import Style from "../../pack/style.js";
export default class LinePrim {
    constructor(x1, y1, x2, y2, color = "black", lineWidth = 4, lineCap, lineJoin = 0, lineDash = [1, 0]) {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
        this.lineWidth = lineWidth;
        this.lineCap = lineCap;
        this.lineJoin = lineJoin;
        this.lineDash = lineDash;
        this.style = new Style();
    }
    draw(p) {
        this.style.fillStyle = this.color;
        this.style.strokeStyle = this.color;
        this.style.lineWidth = this.lineWidth;
        this.style.lineCap = this.lineCap;
        this.style.lineJoin = this.lineJoin;
        this.style.lineDash = this.lineDash;
        this.style.opacity = (100);
        p.drawLine(this.x1, this.y1, this.x2, this.y2, this.style);
        return true;
    }
}
