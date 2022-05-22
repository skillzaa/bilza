import AnimatedNoBase from "./AnimatedNoBase.js";
import { XAlignment } from "../../../design/xAlignment.js";
export default class XAxis extends AnimatedNoBase {
    constructor(defaultValue) {
        super(defaultValue);
        this.xAlignmentOptions = XAlignment;
        this.xAlign = this.xAlignmentOptions.Left;
        this.compWidth = null;
        this.compHeight = null;
    }
    init(compWidth, compHeight, canvasWidth, canvasHeight) {
        super.init(compWidth, compHeight, canvasWidth, canvasHeight);
        return true;
    }
    update(msDelta) {
        super.update(msDelta);
        return true;
    }
}
