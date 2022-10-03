import AniColorDb from "../../animationsFacade/AniColorDb.js";
import Background from "./background.js";
import ComponentDb from "../../compDb/compDb.js";
export default class BackgroundDb extends ComponentDb {
    constructor(startTime, endTime, insertAction, color = "black") {
        super(startTime, endTime, insertAction);
        this.color = new AniColorDb(color);
    }
    getEngineComponent() {
        const comp = new Background("red");
        return comp;
    }
}
