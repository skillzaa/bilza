import AniColorDb from "../../animationsFacade/AniColorDb.js";
import Background from "./background.js";
import corePropsToEngineComp from "../../componentFacade/corePropsToEngineComp.js";
import ComponentDb from "../../componentFacade/componentDb.js";
export default class BackgroundDb extends ComponentDb {
    constructor(startTime, endTime, insertAction, color = "black") {
        super(startTime, endTime, insertAction);
        this.color = new AniColorDb(color);
    }
    getEngineComponent(componentPack) {
        const comp = new Background(componentPack, "red");
        corePropsToEngineComp(this, comp);
        return comp;
    }
}
