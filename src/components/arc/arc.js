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
        this.style.fillStyle = "red";
        this.style.strokeStyle = "green";
        this.style.lineWidth = this.lineWidth.value();
        this.preDraw(p);
        p.beginPath();
        p.moveTo(100, 100);
        p.arcTo(400, 200, 100, 300, 109, this.style);
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
