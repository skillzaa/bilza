import FillRectDB from "../components/fillRect/fillRectDb.js";
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
        let g = new FillRectDB(this.startTime, this.endTime, this.canvasWidth, this.canvasHeight, this.insertAction);
        this.comps.push(g);
        return g;
    }
}
