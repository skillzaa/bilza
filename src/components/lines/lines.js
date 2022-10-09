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
            item.draw(p, this.xAligned(), this.yAligned(), this.compWidth(), this.compHeight());
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
