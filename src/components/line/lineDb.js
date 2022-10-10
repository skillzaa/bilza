import CompDb from "../../compDb/compDb.js";
import { AniNumberDb, AniPercDb } from "../../animations/animations.js";
import Line from "./line.js";
export default class LineDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, x1, y1, x2, y2, color = "black") {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.color.set(color);
        this.lineWidth = new AniNumberDb(1);
        this.x.set(x1);
        this.y.set(y1);
        this.x2 = new AniPercDb(x2, this.canvasWidth());
        this.y2 = new AniPercDb(y2, this.canvasHeight());
    }
    getEngineComp(pack) {
        const comp = new Line(this, pack);
        return comp;
    }
    align(x = null, y = null) {
        super.align(0, 0);
    }
    alignRotate(x, y = 0) {
        super.alignRotate(x, 0);
    }
}
