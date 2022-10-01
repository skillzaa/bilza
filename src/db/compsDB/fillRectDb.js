import CompDB from "../baseCompDB/baseCompDb.js";
export default class FillRectDb extends CompDB {
    constructor(startTime, endTime, canvasWidth, canvasHeight, insertAction) {
        super(startTime, endTime, canvasWidth, canvasHeight, insertAction);
        this.compType = "fillRect";
    }
}
