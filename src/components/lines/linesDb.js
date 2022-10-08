import CompDb from "../../compDb/compDb.js";
import Line from "./lines.js";
import LineStruct from "./lineStruct.js";
export default class LinesDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.data = [];
        this.width.set(30);
        this.height.set(30);
    }
    getEngineComp(pack) {
        const comp = new Line(this, pack);
        return comp;
    }
    add(x1, y1, x2, y2, color = "black", lineWidth = 1, opacity = 100, lineCap, lineJoin = 0, lineDash = [1, 0]) {
        const line = new LineStruct(x1, y1, x2, y2, color, lineWidth, opacity, lineCap, lineJoin, lineDash);
        this.data.push(line);
    }
}
