import LineSegDb from "../components/lineSeg/lineSegDb.js";
import rectangle from "../lineShapes/rectangle.js";
export default class CompFactory {
    constructor(startTime, endTime, comps, insertAction, canvasWidth, canvasHeight) {
        this.comps = comps;
        this.startTime = startTime;
        this.endTime = endTime;
        this.insertAction = insertAction;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    rectangle(hue_0_360 = 0, filled = false, lineWidth = 4) {
        let g = new LineSegDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, 0, 0, hue_0_360, lineWidth);
        this.comps.push(g);
        rectangle(g, filled);
        return g;
    }
}
