export default class EnginePack {
    constructor(canvasId = "bilza", canvasWidthPerc = 70, comps = [], background = null, duration, pack) {
        this.comps = [];
        this.background = null;
        this.canvasId = canvasId;
        this.canvasWidthPerc = canvasWidthPerc;
        this.comps = comps;
        this.background = background;
        this.duration = duration;
        this.pack = pack;
    }
}
