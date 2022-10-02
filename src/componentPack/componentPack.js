import Time from "../EngineComponent/time.js";
export default class ComponentPack {
    constructor(canvasWidth, canvasHeight, charsWidth) {
        this.id = "";
        this.startTime = 0;
        this.endTime = 0;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.charsWidth = charsWidth;
    }
    init(compDb) {
        compDb.id = this.id;
        compDb.time = new Time(this.startTime, this.endTime);
    }
}
