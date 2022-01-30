// these are ctx valuesto be set in caseof any animation
export default class AniCtxData {
    constructor(startFrame = 0) {
        this.startFrame = startFrame;
        this.x = null;
        this.y = null;
        this.fontSize = null;
        this.fontName = null;
        this.fillStyle = null;
        this.strokeStyle = null;
        this.lineWidth = null;
    }
}
