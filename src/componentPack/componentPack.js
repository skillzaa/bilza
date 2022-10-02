export default class ComponentPack {
    constructor(canvasWidth, canvasHeight, charsWidth) {
        this.id = "";
        this.startTime = 0;
        this.endTime = 0;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.charsWidth = charsWidth;
    }
    setStartTime(startTime) {
        this.startTime = startTime;
        return this.startTime;
    }
    setEndTime(endTime) {
        this.endTime = endTime;
        return this.endTime;
    }
    setId(id) {
        this.id = id;
        return this.id;
    }
}
