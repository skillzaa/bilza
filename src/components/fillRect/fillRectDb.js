import ComponentDb from "../../componentFacade/componentDb.js";
export default class FillRectDb extends ComponentDb {
    constructor(startTime, endTime, canvasWidth, canvasHeight, insertAction) {
        super(startTime, endTime, canvasWidth, canvasHeight, insertAction);
        this.compType = "fillRect";
    }
}
