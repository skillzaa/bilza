import Pack from "../pack/pack.js";
export default class EngineDb {
    constructor(canvasId = "bilza", canvasWidthPerc = 70) {
        this.canvasId = canvasId;
        this.canvasWidthPerc = canvasWidthPerc;
        const pack = new Pack(this.canvasId, this.canvasWidthPerc);
        this.canvasWidth = pack.canvasWidth();
        this.canvasHeight = pack.canvasHeight();
        this.charsWidth = pack.charsWidth.bind(pack);
    }
}
