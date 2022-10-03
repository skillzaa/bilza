import CompEngine from "../../compEngine/compEngine.js";
export default class Background extends CompEngine {
    constructor(corePropsDb, pack, color = "#000000") {
        super(corePropsDb, pack);
        this.drawLayer = 0;
        this.color.set(color);
    }
    draw(p) {
        p.drawBackground(this.color.value());
        return true;
    }
}
