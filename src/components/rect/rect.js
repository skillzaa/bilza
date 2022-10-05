import CompEngine from "../../compEngine/compEngine.js";
import { AniNumber } from "../../animations/animations.js";
export default class Rect extends CompEngine {
    constructor(corePropsDb, pack) {
        super(corePropsDb, pack);
        this.lineWidth = new AniNumber(corePropsDb.lineWidth);
    }
    update(msDelta, p) {
        super.update(msDelta, p);
        this.lineWidth.update(msDelta);
        return true;
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        this.style.lineWidth = this.lineWidth.value();
        p.drawRect(this.contentX(), this.contentY(), this.width.value(), this.height.value(), this.style);
        this.postDraw(p);
        return true;
    }
}
