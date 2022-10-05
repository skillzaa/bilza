import AniColorDb from "../../animationsFacade/aniColorDb/AniColorDb.js";
import Background from "./background.js";
import CompDb from "../../compDb/compDb.js";
export default class BackgroundDb extends CompDb {
    constructor(startTime, endTime, insertAction, color = "#efeee3") {
        super(startTime, endTime, insertAction);
        this.color = new AniColorDb(color);
    }
    getEngineComp(pack) {
        const comp = new Background(this, pack);
        return comp;
    }
}
