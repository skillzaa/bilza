import LinesDb from "../components/lines/linesDb.js";
import starOfDavid from "../lineShapes/startOfDavid.js";
import triangle from "../lineShapes/triangle.js";
export default class CompFactory {
    constructor(startTime, endTime, comps, insertAction, canvasWidth, canvasHeight) {
        this.comps = comps;
        this.startTime = startTime;
        this.endTime = endTime;
        this.insertAction = insertAction;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    starOfDavid(color = "black") {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        starOfDavid(g);
        return g;
    }
    triangle(color = "black") {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        triangle(g);
        return g;
    }
}
