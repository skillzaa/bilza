import CompDb from "../../compDb/compDb.js";
import ParticalSystem from "./particleSystem.js";
import { AniNumberDb, AniBooleanDb, AniColorDb } from "../../animations/animations.js";
export default class ParticleSystemDb extends CompDb {
    constructor(startTime, endTime, insertAction, canvasWidth, canvasHeight, count = 20, color = "#008000", delay = 50) {
        super(startTime, endTime, insertAction, canvasWidth, canvasHeight);
        this.count = new AniNumberDb(count);
        this.particleSize = new AniNumberDb(5);
        this.lineWidth = new AniNumberDb(1);
        this.filled = new AniBooleanDb(true);
        this.lineColor = new AniColorDb(color);
        this.delay = new AniNumberDb(delay);
        this.color.set(color);
    }
    getEngineComp(pack) {
        const comp = new ParticalSystem(this, pack);
        return comp;
    }
}
