import CompDb from "../../compDb/compDb.js";
import AniNumberDb from "../../animationsFacade/aniNumberDb/AniNumberDb.js";
import Line from "./line.js";
export default class LineDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, x1, y1, x2, y2, color = "black") {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.color.set(color);
        this.lineWidth = new AniNumberDb(1);
        this.x.set(x1);
        this.y.set(y1);
        this.x.setResp(true, this.canvasWidth());
        this.y.setResp(true, this.canvasHeight());
        this.x2 = new AniNumberDb(x2);
        this.x2.setResp(true, this.canvasWidth());
        this.y2 = new AniNumberDb(y2);
        this.y2.setResp(true, this.canvasHeight());
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
