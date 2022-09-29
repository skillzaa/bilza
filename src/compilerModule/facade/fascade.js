import getCanvasElement from "../../functions/getCanvasElement.js";
import BaseCompDb from "./baseComponentDB/baseCompDb.js";
export default class Fascade {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.comps = [];
        this.canvasId = canvasId;
        this.canvasWidthPerc = canvasWidthPerc;
        this.canvas = getCanvasElement(this.canvasId);
        this.canvasWidth = 680;
        this.canvasHeight = 320;
    }
    addTextComp(startTime, endTime) {
        const base = new BaseCompDb(startTime, endTime, this.canvasWidth, this.canvasHeight);
        this.comps.push(base);
        console.log(this.comps);
    }
}
