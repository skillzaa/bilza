import LineShapeFactory from "./lineShapesFactory.js";
export default class LineShapes {
    constructor(canvasWidth, canvasHeight, comps) {
        this.comps = comps;
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
    }
    add(secStart, secEnd) {
        const cf = new LineShapeFactory(secStart, secEnd, this.comps, "add", this._canvasWidth, this._canvasHeight);
        return cf;
    }
    alwaysOn() {
        const cf = new LineShapeFactory(0, 1, this.comps, "alwaysOn", this._canvasWidth, this._canvasHeight);
        return cf;
    }
    append(duration) {
        const cf = new LineShapeFactory(0, duration, this.comps, "append", this._canvasWidth, this._canvasHeight);
        return cf;
    }
}
