import CompEngine from "../../compEngine/compEngine.js";
export default class Lines extends CompEngine {
    constructor(linesDb, pack) {
        super(linesDb, pack);
        this.data = linesDb.data;
    }
    draw(p) {
        this.preDraw(p);
        for (let i = 0; i < this.data.length; i++) {
            const item = this.data[i];
            item.draw(p, this.xAligned(), this.yAligned(), this.compWidth(), this.compHeight(), this.color.value());
        }
        this.postDraw(p);
        return true;
    }
}
