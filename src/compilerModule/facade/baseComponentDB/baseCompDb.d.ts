import CoreProps from "./coreProps.js";
import Alignment from "./alignment.js";
import StartTimeObj from "./startTimeObj.js";
import EndTimeObj from "./endTimeObj.js";
export default class BaseCompDb extends CoreProps {
    readonly startTime: number | StartTimeObj;
    readonly endTime: number | EndTimeObj;
    private readonly canvasWidth;
    private readonly canvasHeight;
    alignment: Alignment;
    constructor(startTime: number | StartTimeObj, endTime: number | EndTimeObj, canvasWidth: number, canvasHeight: number);
}
//# sourceMappingURL=baseCompDb.d.ts.map