import CompDb from "../../compDb/compDb.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
import CanvasBorder from "./canvasBorder.js";
export default class CanvasBorderDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, color = "grey", width = 0.25) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.borderWidth = new AniNumberDb(width);
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new CanvasBorder(this, pack);
        return comp;
    }
}
