import CircleDb from "./circleDb.js";
export default class MarkerDb extends CircleDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, x, y, color = "red", radius = 5) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight, radius, color);
        this.x.set(x);
        this.y.set(y);
        this.filled.set(true);
        this.showBackground.set(false);
    }
}
