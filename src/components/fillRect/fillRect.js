import CompEngine from "../../compEngine/compEngine.js";
export default class FillRect extends CompEngine {
    constructor(corePropsDb, pack, color = "#000000") {
        super(corePropsDb, pack);
        this.color.set(color);
    }
    draw(p) {
        this.style.fillStyle = "blue";
        this.style.strokeStyle = "blue";
        this.style.opacity = 100;
        this.preDraw(p);
        this.style.fillStyle = this.color.value();
        this.style.fillStyle = "red";
        this.style.strokeStyle = "red";
        this.style.strokeStyle = this.color.value();
        p.drawFillRect(this.contentX(), this.contentY(), this.width.value(), this.height.value(), this.style);
        this.postDraw(p);
        return true;
    }
}
