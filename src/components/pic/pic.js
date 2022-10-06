import CompEngine from "../../compEngine/compEngine.js";
export default class Pic extends CompEngine {
    constructor(corePropsDb, pack) {
        super(corePropsDb, pack);
        this.img = corePropsDb.img;
        this.orignalWidth = corePropsDb.orignalWidth;
        this.orignalHeight = corePropsDb.orignalHeight;
        this.img.setAttribute("width", this.width.value().toString());
        this.img.setAttribute("height", this.height.value().toString());
    }
    draw(p) {
        this.preDraw(p);
        p.drawImage(this.img, this.contentX(), this.contentY(), this.width.value(), this.height.value());
        this.postDraw(p);
        return true;
    }
}
