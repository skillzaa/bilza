import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber, } from "../../animations/animations.js";
export default class Arc extends CompEngine {
    constructor(propsDb, pack) {
        super(propsDb, pack);
        this.lineWidth = new AniNumber(propsDb.lineWidth);
        this.midX = new AniNumber(propsDb.midX);
        this.midY = new AniNumber(propsDb.midY);
        this.endX = new AniNumber(propsDb.endX);
        this.endY = new AniNumber(propsDb.endY);
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.lineWidth.update(msDelta);
        this.midX.update(msDelta);
        this.midY.update(msDelta);
        this.endX.update(msDelta);
        this.endY.update(msDelta);
        return true;
    }
    draw(p) {
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth.value();
        this.preDraw(p);
        p.beginPath();
        p.ctx.lineWidth = 6;
        p.ctx.strokeStyle = "red";
        p.ctx.moveTo(100, 100);
        p.ctx.quadraticCurveTo(300, 300, 500, 100);
        p.ctx.stroke();
        p.ctx.strokeStyle = "yellow";
        p.ctx.lineWidth = 2;
        p.beginPath();
        p.ctx.moveTo(100, 100);
        p.ctx.lineTo(300, 300);
        p.ctx.lineTo(500, 100);
        p.ctx.stroke();
        p.stroke();
        return true;
        this.postDraw(p);
        return true;
    }
    compWidth() {
        return 0;
    }
    compHeight() {
        return this.lineWidth.value();
    }
}
