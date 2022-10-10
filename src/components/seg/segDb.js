import CompDb from "../../compDb/compDb.js";
export default class SegDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
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
        p.beginPath();
        p.moveTo(compX + (wdFactor * this.startX), compY + (htFactor * this.startY));
        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            p.lineTo(compX + (wdFactor * item.x2), compY + (htFactor * item.y2), this.style);
        }
        if (this.filled == true) {
            p.fill(this.style);
            p.closePath();
        }
        else {
            if (this.closed == true) {
                p.closePath();
            }
            p.stroke();
        }
        return;
    }
    setFilled(filled = true) {
        this.filled = filled;
        return this.filled;
    }
    setClosed(closed = true) {
        this.closed = closed;
        return this.closed;
    }
}
