import CompDb from "../../compDb/compDb.js";
import Arrow from "./arrow.js";
import { AniNumberDb, AniColorDb, AniBooleanDb } from "../../animationsFacade/animationsDb.js";
export default class ArrowDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, x1, y1, x2, y2, color) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.x.set(x1);
        this.y.set(y1);
        this.x2 = new AniNumberDb(x2);
        this.y2 = new AniNumberDb(y2);
        this.x2.setResp(true, this.canvasWidth());
        this.y2.setResp(true, this.canvasHeight());
        this.headWidth = new AniNumberDb(75);
        this.headHeight = new AniNumberDb(40);
        this.headFilled = new AniBooleanDb(false);
        this.colorHead = new AniColorDb(color);
        this.lineWidth = new AniNumberDb(1);
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new Arrow(this, pack);
        return comp;
    }
    align(x = null, y) {
        super.align(0, 0);
    }
    alignRotate(x = null, y) {
        super.alignRotate(x, 0);
    }
    pointTo(second, x, y) {
        this.x2.goto(second, x);
        this.y2.goto(second, y);
    }
}
