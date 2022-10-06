import CircleDb from "./circleDb.js";
export default class MarkerDb extends CircleDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, radius = 2, color = "red") {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight, radius, color);
    }
}
