import CompDb from "../../compDb/compDb.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animations/animations.js";
import Circle from "./circle.js";
export default class CircleDb extends CompDb {
    constructor(linker, radius, color) {
        super(linker);
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
    getEngineComp(pack) {
        const comp = new Circle(this, pack);
        return comp;
    }
}
