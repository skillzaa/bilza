import getCanvasElement from "../functions/getCanvasElement.js";
export default class EngineDb {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.canvasId = canvasId;
        this.canvasWidthPerc = canvasWidthPerc;
        this.canvas = getCanvasElement(this.canvasId);
        this.canvasWidth = this.canvas.width;
        this.canvasHeight = this.canvas.height;
    }
}
