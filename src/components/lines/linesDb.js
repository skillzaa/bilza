import CompDb from "../../compDb/compDb.js";
import LinePrim from "../../primtivecomps/line/linePrim.js";
import Lines from "./lines.js";
import Seg from "./seg.js";
export default class LinesDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, color = "black") {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.data = [];
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new Lines(this, pack);
        return comp;
    }
    add(x1, y1, x2, y2, lineWidth = 4, lineCap, lineJoin = 0, lineDash = [1, 0]) {
        const line = new LinePrim(x1, y1, x2, y2, this.color.value(), lineWidth, lineCap, lineJoin, lineDash);
        this.data.push(line);
    }
    seg(x, y, lineWidth = 4, lineCap = 0, lineJoin = 0, lineDash = [1, 0]) {
        const sg = new Seg(this.data, x, y, this.color.value(), lineWidth, lineCap, lineJoin, lineDash);
        return sg;
    }
}
