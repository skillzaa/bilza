import AniColorDb from "../../animationsFacade/AniColorDb.js";
import Background from "./background.js";
import CompDb from "../../compDb/compDb.js";
export default class BackgroundDb extends CompDb {
    constructor(startTime, endTime, insertAction, color = "black") {
        super(startTime, endTime, insertAction);
        this.color = new AniColorDb(color);
    }
    getEngineCom(pack) {
        const comp = new Background(this, pack, "red");
        return comp;
    }
}
