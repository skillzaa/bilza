import CoreProps from "./coreProps.js";
import Alignment from "./alignment.js";
export default class BaseCompDb extends CoreProps {
    constructor(startTime, endTime, canvasWidth, canvasHeight) {
        super();
        this.startTime = startTime;
        this.endTime = endTime;
        this.canvasWidth = canvasWidth;
        this.canvasHeight = canvasHeight;
        this.alignment = new Alignment(0, 0);
    }
}
