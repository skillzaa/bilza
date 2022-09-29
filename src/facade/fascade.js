import getCanvasElement from "../functions/getCanvasElement.js";
import CompFactory from "./compFactory.js";
export default class Fascade {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.comps = [];
        this.canvasId = canvasId;
        this.canvasWidthPerc = canvasWidthPerc;
        this.canvas = getCanvasElement(this.canvasId);
        this.canvasWidth = 680;
        this.canvasHeight = 320;
    }
    add(secStart, secEnd) {
        const cf = new CompFactory(secStart, secEnd, this.comps, "add", this.canvasWidth, this.canvasHeight);
        return cf;
    }
}
