export default class ComponentPack {
    constructor(canvasWidth, canvasHeight, charsWidth) {
        this.id = "";
        this.startTime = 0;
        this.endTime = 0;
        this.insertAction = "";
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.charsWidth = charsWidth;
    }
    init(compDb) {
        this.id = compDb.id;
        this.startTime = compDb.startTime;
        this.endTime = compDb.endTime;
        this.insertAction = compDb.insertAction;
    }
}
