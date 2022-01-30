// these are ctx valuesto be set in caseof any change in ctx
export default class CtxData {
    constructor(startFrame = 0) {
        this.startFrame = startFrame;
        this.x = 0;
        this.y = 0;
        this.fontSize = null;
        this.fontName = null;
        this.fillStyle = null;
        this.strokeStyle = null;
        this.lineWidth = null;
    }
}
