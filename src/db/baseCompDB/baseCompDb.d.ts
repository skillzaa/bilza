import IComponent from "../../facade/IComponent.js";
import CoreProps from "./coreProps.js";
import Alignment from "./alignment.js";
import StartTimeObj from "./startTimeObj.js";
import EndTimeObj from "./endTimeObj.js";
export default class CompDb extends CoreProps implements IComponent {
    readonly startTime: number | StartTimeObj;
    readonly endTime: number | EndTimeObj;
    readonly insertAction: "add" | "append" | "alwaysOn";
    private readonly canvasWidth;
    private readonly canvasHeight;
    alignObj: Alignment;
    alignRotateObj: Alignment;
    constructor(startTime: number, endTime: number, canvasWidth: number, canvasHeight: number, insertAction: "add" | "append" | "alwaysOn");
    align(x: number, y: number): void;
    alignRotate(x: number, y: number): void;
    compWidth(): number;
    compWidthPix(): number;
    compHeight(): number;
    compHeightPix(): number;
    contentWidth(): number;
    contentWidthPix(): number;
    contentHeight(): number;
    contentHeightPix(): number;
    getDuration(): number;
    getStartTime(inMilliSec?: boolean): number;
    getEndTime(inMilliSec?: boolean): number;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(secFrom: number, secTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
    setDrawLayer(drawLayerNumber: 0 | 1 | 2 | 3 | 4): 0 | 1 | 2 | 3 | 4;
}
//# sourceMappingURL=baseCompDb.d.ts.map