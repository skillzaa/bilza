import CompEngine from "../../compEngine/compEngine.js";
export default class Lines extends CompEngine {
    constructor(linesDb, pack) {
        super(linesDb, pack);
        this.data = linesDb.data;
    }
    draw(p) {
        this.preDraw(p);
        for (let i = 0; i < this.data.length; i++) {
            const line = this.data[i];
            this.style.fillStyle = line.color;
            this.style.strokeStyle = line.color;
            this.style.lineWidth = line.lineWidth;
            this.style.lineCap = line.lineCap;
            this.style.lineJoin = line.lineJoin;
            this.style.lineDash = line.lineDash;
            p.drawLine(this.xAligned() + this.resolveX(line.x1), this.yAligned() + this.resolveY(line.y1), this.xAligned() + this.resolveX(line.x2), this.yAligned() + this.resolveY(line.y2), this.style);
        }
        this.postDraw(p);
        return true;
    }
    resolveX(no) {
        return (this.width.value() / 100) * no;
    }
    resolveY(no) {
        return (this.height.value() / 100) * no;
    }
}
