import FillRectDB from "../components/fillRect/fillRectDb.js";
import RectDB from "../components/rect/rectDb.js";
import CanvasBorderDb from "../components/canvasBorder/canvasBorderDb.js";
import GridDb from "../components/grid/gridDb.js";
import CircleDb from "../components/circle/circleDb.js";
export default class CompFactory {
    constructor(startTime, endTime, comps, insertAction, canvasWidth, canvasHeight) {
        this.comps = comps;
        this.startTime = startTime;
        this.endTime = endTime;
        this.insertAction = insertAction;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    fillRect(color = "#000000") {
        let g = new FillRectDB(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        return g;
    }
    rect(color = "#000000") {
        let g = new RectDB(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        return g;
    }
    canvasBorder(color = "grey", width = 0.25) {
        let g = new CanvasBorderDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color, width);
        this.comps.push(g);
        return g;
    }
    grid(color = "grey", cellWidth = 10, cellHeight = 10) {
        let g = new GridDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color, cellWidth, cellHeight);
        this.comps.push(g);
        return g;
    }
    circle(radius = 5, color = "black") {
        let g = new CircleDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, radius, color);
        this.comps.push(g);
        return g;
    }
}
