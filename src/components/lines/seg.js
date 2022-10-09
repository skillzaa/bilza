import LineStruct from "./linePrimtive.js";
import Style from "../../pack/style.js";
export default class Seg {
    constructor(x, y, filled = true, color = null, lineWidth = 4, lineCap = 0, lineJoin = 0, lineDash = [1, 0]) {
        this.data = [];
        this.startX = x;
        this.startY = y;
        this.color = color;
        this.filled = filled;
        this.lineWidth = lineWidth,
            this.lineCap = lineCap;
        this.lineJoin = lineJoin;
        this.lineDash = lineDash;
        this.style = new Style();
    }
    add(x, y, lineWidth = this.lineWidth, lineCap = this.lineCap, lineJoin = this.lineJoin, lineDash = this.lineDash) {
        if (this.data.length == 0) {
            const l = new LineStruct(this.startX, this.startY, x, y, this.color, lineWidth, lineCap, lineJoin, lineDash);
            this.data.push(l);
        }
        else {
            const l = new LineStruct(this.data[this.data.length - 1].x2, this.data[this.data.length - 1].y2, x, y, this.color, lineWidth, lineCap, lineJoin, lineDash);
            this.data.push(l);
        }
        return this;
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
        p.moveTo(compX + (wdFactor * this.startX), compY + (htFactor * this.startY));
        p.beginPath();
        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            p.lineTo(compX + (wdFactor * item.x2), compY + (htFactor * item.y2), this.style);
        }
        if (this.filled == true) {
            p.fill(this.style);
        }
        else {
            p.closePath();
            p.stroke();
        }
        return;
    }
}
