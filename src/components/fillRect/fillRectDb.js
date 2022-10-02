import ComponentDb from "../../componentFacade/componentDb.js";
import FillRect from "./fillRect.js";
import corePropsToEngineComp from "../../componentFacade/corePropsToEngineComp.js";
export default class FillRectDb extends ComponentDb {
    constructor(startTime, endTime, canvasWidth, canvasHeight, insertAction) {
        super(startTime, endTime, canvasWidth, canvasHeight, insertAction);
    }
    getEngineComponent(componentPack) {
        const comp = new FillRect(componentPack, "red");
        corePropsToEngineComp(this, comp);
        return comp;
    }
}
