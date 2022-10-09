import CompDb from "../../compDb/compDb.js";
import Lines from "./lines.js";
import LineStruct from "./lineStruct.js";
import Seg from "./seg.js";
export default class LinesDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, color = "black") {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.data = [];
        this.width.set(30);
        this.height.set(30);
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new Lines(this, pack);
        return comp;
    }
    add(x1, y1, x2, y2, color = null, lineWidth = 4, lineCap, lineJoin = 0, lineDash = [1, 0]) {
        const line = new LineStruct(x1, y1, x2, y2, color, lineWidth, lineCap, lineJoin, lineDash);
    }
    seg(x, y, filled = true, color = null, lineWidth = 4, lineCap = 0, lineJoin = 0, lineDash = [1, 0]) {
        const sg = new Seg(x, y, filled, color, lineWidth, lineCap, lineJoin, lineDash);
        this.data.push(sg);
        return sg;
    }
}
