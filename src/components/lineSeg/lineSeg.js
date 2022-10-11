import CompEngine from "../../compEngine/compEngine.js";
export default class LineSeg extends CompEngine {
    constructor(lineSegDb, pack) {
        super(lineSegDb, pack);
        this.startX = lineSegDb.startX;
        this.startY = lineSegDb.startY;
        this.data = lineSegDb.data;
        this.style.lineCap = lineSegDb.getLineCap();
        this.style.lineDash = lineSegDb.getLineDash();
        this.style.lineJoin = lineSegDb.getLineJoin();
        this.lineWidth = lineSegDb.lineWidth;
        this.filled = lineSegDb.filled;
        this.closed = lineSegDb.closed;
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth;
        const wdFactor = this.width.value() / 100;
        const htFactor = this.height.value() / 100;
        p.beginPath();
        p.moveTo(this.contentX() + (wdFactor * this.startX), this.contentY() + (htFactor * this.startY));
        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            if (item.command == "lineTo") {
                p.lineTo(this.contentX() + (wdFactor * item.x), this.contentY() + (htFactor * item.y), this.style);
            }
            else if (item.command == "moveTo") {
                p.moveTo(this.contentX() + (wdFactor * item.x), this.contentY() + (htFactor * item.y));
            }
            else if (item.command == "fill") {
                if (this.filled == true) {
                    p.fill(this.style);
                }
            }
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
        this.postDraw(p);
        return true;
    }
}
