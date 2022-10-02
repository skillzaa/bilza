import ComponentDb from "../../componentFacade/componentDb.js";
import FillRect from "./fillRect.js";
export default class FillRectDb extends ComponentDb {
    constructor(startTime, endTime, canvasWidth, canvasHeight, insertAction) {
        super(startTime, endTime, canvasWidth, canvasHeight, insertAction);
    }
    getEngineComponent(componentPack) {
        const comp = new FillRect(componentPack, "red");
        return comp;
    }
}
