import Style from "../../pack/style.js";
export default class LinePrimtive {
    constructor(x1, y1, x2, y2, color = null, lineWidth = 3, lineCap, lineJoin = 0, lineDash = [1, 0]) {
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
    draw(p, compX, compY, compWidth, compHeight, compColor) {
        const wdFactor = compWidth / 100;
        const htFactor = compHeight / 100;
        this.style.lineWidth = this.lineWidth;
        this.style.lineCap = this.lineCap;
        this.style.lineJoin = this.lineJoin;
        this.style.lineDash = this.lineDash;
        if (this.color == null) {
            this.style.fillStyle = compColor;
            this.style.strokeStyle = compColor;
        }
        else {
            this.style.fillStyle = this.color;
            this.style.strokeStyle = this.color;
        }
        p.beginPath();
        p.moveTo(compX + (wdFactor * this.x1), compY + (htFactor * this.y1));
        p.lineTo(compX + (wdFactor * this.x2), compY + (htFactor * this.y2), this.style);
        p.stroke();
        p.closePath();
        return;
    }
}
