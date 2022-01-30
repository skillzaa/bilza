// these are ctx valuesto be set in caseof any change in ctx
export default class CtxData {
    constructor(startFrame = 0) {
        this.startFrame = startFrame;
        this.x = 0;
        this.y = 0;
        this.font = null;
        this.fontSize = null;
        this.fontName = null;
        this.fillStyle = null;
        this.strokeStyle = null;
        this.lineWidth = null;
    }
    merge(incomming) {
        if (incomming.strokeStyle !== null) {
            this.strokeStyle = incomming.strokeStyle;
        }
        if (incomming.fillStyle !== null) {
            this.fillStyle = incomming.fillStyle;
        }
        if (incomming.fontSize !== null) {
            this.fontSize = incomming.fontSize;
        }
        if (incomming.fontName !== null) {
            this.fontName = incomming.fontName;
        }
        if (this.fontSize !== null && this.fontName !== null)
            this.font = this.fontSize + "px " + this.fontName;
    }
}
