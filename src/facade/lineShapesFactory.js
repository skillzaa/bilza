import LinesDb from "../components/lines/linesDb.js";
import starOfDavid from "../lineShapes/starOfDavid.js";
import triangle from "../lineShapes/triangle.js";
import cross from "../lineShapes/cross.js";
import tickRight from "../lineShapes/tickRight.js";
import tickLeft from "../lineShapes/tickLeft.js";
import graphInc from "../lineShapes/graphInc.js";
import rectangle from "../lineShapes/rectangle.js";
import rightTriangle from "../lineShapes/rightTriangle.js";
export default class CompFactory {
    constructor(startTime, endTime, comps, insertAction, canvasWidth, canvasHeight) {
        this.comps = comps;
        this.startTime = startTime;
        this.endTime = endTime;
        this.insertAction = insertAction;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
    }
    starOfDavid(color = "black", lineWidth) {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        starOfDavid(g, lineWidth);
        return g;
    }
    triangle(color = "black", lineWidth) {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        triangle(g, lineWidth);
        return g;
    }
    cross(color = "black", lineWidth) {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        cross(g, lineWidth);
        return g;
    }
    tickRight(color = "black", lineWidth) {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        tickRight(g, lineWidth);
        return g;
    }
    tickLeft(color = "black", lineWidth) {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        tickLeft(g, lineWidth);
        return g;
    }
    graphInc(color = "black", lineWidth) {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        graphInc(g, lineWidth);
        return g;
    }
    rectangle(color = "black", lineWidth) {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        rectangle(g, lineWidth);
        return g;
    }
    rightTriangle(color = "black", lineWidth) {
        let g = new LinesDb(this.startTime, this.endTime, this.insertAction, this.canvasWidth, this.canvasHeight, color);
        this.comps.push(g);
        rightTriangle(g, lineWidth);
        return g;
    }
}
