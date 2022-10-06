import CompDb from "../../compDb/compDb.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animationsFacade/animationsDb.js";
import Circle from "./circle.js";
export default class CircleDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, radius, color) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.lineWidth = new AniNumberDb(1);
        this.startAngle = new AniNumberDb(0);
        this.endAngle = new AniNumberDb(360);
        this.filled = new AniBooleanDb(false);
        this.strokeColor = new AniColorDb(color);
        this.strokeWidth = new AniNumberDb(1);
        this.color.set(color);
        this.width.set(Math.floor(radius * 2));
    }
    contentHeight() {
        return this.width.value();
    }
    contentHeightRaw() {
        return this.width.valueRaw();
    }
    getEngineComp(pack) {
        const comp = new Circle(this, pack);
        return comp;
    }
}
