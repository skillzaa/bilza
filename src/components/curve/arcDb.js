import CompDb from "../../compDb/compDb.js";
import { AniNumberDb } from "../../animationsFacade/animationsDb.js";
import Arc from "./curve.js";
export default class ArcDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, startX, startY, midX, midY, endX, endY, color = "black") {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.x.set(startX);
        this.y.set(startY);
        this.midX = new AniNumberDb(midX);
        this.midY = new AniNumberDb(midY);
        this.endX = new AniNumberDb(endX);
        this.endY = new AniNumberDb(endY);
        this.lineWidth = new AniNumberDb(1);
        this.color.set(color);
        this.lineWidth = new AniNumberDb(1);
    }
    getEngineComp(pack) {
        const comp = new Arc(this, pack);
        return comp;
    }
}
