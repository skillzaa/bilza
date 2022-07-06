import RotateObj from "./60rotateObj.js";
export default class BaseComponent extends RotateObj {
    constructor() {
        super();
    }
    init(p) {
        this.canvasWidth = p.canvasWidth();
        this.canvasHeight = p.canvasHeight();
        this.x.init(this.usePercentages, this.canvasWidth);
        this.y.init(this.usePercentages, this.canvasHeight);
        return true;
    }
    update(msDelta, p) {
        this.x.update(msDelta);
        this.y.update(msDelta);
        this.visible.update(msDelta);
        this.width.update(msDelta);
        this.height.update(msDelta);
        return true;
    }
}
