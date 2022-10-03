import CompEngine from "../../compEngine/compEngine.js";
export default class FillRect extends CompEngine {
    constructor(corePropsDb, pack) {
        super(corePropsDb, pack);
    }
    draw(p) {
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.strokeStyle = this.color.value();
        p.drawFillRect(this.contentX(), this.contentY(), this.width.value(), this.height.value(), this.style);
        this.postDraw(p);
        return true;
    }
}
