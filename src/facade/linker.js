export default class Linker {
    constructor(startTime, endTime, comps, insertAction, canvasWidth, canvasHeight, charsWidth) {
        this.comps = comps;
        this._startTime = startTime;
        this._endTime = endTime;
        this._insertAction = insertAction;
        this._canvasWidth = canvasWidth;
        this._canvasHeight = canvasHeight;
        this.charsWidth = charsWidth;
    }
    canvasWidth() { return this._canvasWidth; }
    canvasHeight() { return this._canvasHeight; }
    startTime() { return this._startTime; }
    endTime() { return this._endTime; }
    insertAction() {
        return this._insertAction;
    }
    setInsertAction(insertAction) {
        this._insertAction = insertAction;
    }
    push(compDb) {
        this.comps.push(compDb);
    }
}
