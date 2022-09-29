import CompDB from "../compDB/compDb.js";
export default class FillRectDb extends CompDB {
    constructor(startTime, endTime, canvasWidth, canvasHeight, insertAction) {
        super(startTime, endTime, canvasWidth, canvasHeight, insertAction);
    }
}
