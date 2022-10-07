import Pack from "../pack/pack.js";
import BackgroundDb from "../components/background/backgroundDb.js";
export default class EngineDb {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.canvasId = canvasId;
        this.canvasWidthPerc = canvasWidthPerc;
        const pack = new Pack(this.canvasId, this.canvasWidthPerc);
        this.responsiveMode = true;
        this.canvasWidth = pack.canvasWidth();
        this.canvasHeight = pack.canvasHeight();
        this.charsWidth = pack.charsWidth.bind(pack);
        this.backgroundDb = new BackgroundDb(0, 0, "alwaysOn", this.canvasWidth, this.canvasHeight, "#efeee3");
    }
}
