import AniColorDb from "../../animationsFacade/aniColorDb/AniColorDb.js";
import Background from "./background.js";
import CompDb from "../../compDb/compDb.js";
export default class BackgroundDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, color = "#efeee3") {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.color = new AniColorDb(color);
    }
    getEngineComp(pack) {
        const comp = new Background(this, pack);
        return comp;
    }
}
