export default class LineStruct {
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
    }
    draw(p, compX, compY, compWidth, compHeight, compColor) {
        const wdFactor = compWidth / 100;
        const htFactor = compHeight / 100;
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
