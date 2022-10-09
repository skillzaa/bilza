import CompDb from "../../compDb/compDb.js";
import Line from "./lines.js";
import LineStruct from "./lineStruct.js";
import Seg from "./seg.js";
export default class LinesDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.data = [];
    }
    getEngineComp(pack) {
        const comp = new Line(this, pack);
        return comp;
    }
    add(x1, y1, x2, y2, color = "black", lineWidth = 4, lineCap, lineJoin = 0, lineDash = [1, 0]) {
        const line = new LineStruct(x1, y1, x2, y2, color, lineWidth, lineCap, lineJoin, lineDash);
        this.data.push(line);
    }
    seg(x, y, color = "black", lineWidth = 4, lineCap = 0, lineJoin = 0, lineDash = [1, 0]) {
        const sg = new Seg(this.data, x, y, color, lineWidth, lineCap, lineJoin, lineDash);
        return sg;
    }
}
