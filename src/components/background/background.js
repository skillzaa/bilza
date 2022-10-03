import CompEngine from "../../compEngine/compEngine.js";
export default class Background extends CompEngine {
    constructor(corePropsDb, pack) {
        super(corePropsDb, pack);
        this.drawLayer = 0;
    }
    draw(p) {
        p.drawBackground(this.color.value());
        return true;
    }
}
