import Pack from "../pack/pack.js";
import BackgroundDb from "../components/background/backgroundDb.js";
export default class EngineDb {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.canvasId = canvasId;
        this.canvasWidthPerc = canvasWidthPerc;
        const pack = new Pack(this.canvasId, this.canvasWidthPerc);
        this.canvasWidth = pack.canvasWidth();
        this.canvasHeight = pack.canvasWidth();
        this.backgroundDb = new BackgroundDb(0, 1, "alwaysOn", "grey");
    }
}
