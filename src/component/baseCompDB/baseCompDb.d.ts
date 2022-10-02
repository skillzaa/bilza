import IComponent from "../../facade/IComponent.js";
import CoreProps from "./coreProps.js";
import Alignment from "./alignment.js";
export default class ComponentDb extends CoreProps implements IComponent {
    readonly startTime: number;
    readonly endTime: number;
    readonly insertAction: "add" | "append" | "alwaysOn";
    private readonly canvasWidth;
    private readonly canvasHeight;
    alignObj: Alignment;
    alignRotateObj: Alignment;
    constructor(startTime: number, endTime: number, canvasWidth: number, canvasHeight: number, insertAction: "add" | "append" | "alwaysOn");
    align(x: number, y: number): void;
    alignRotate(x: number, y: number): void;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
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
}
//# sourceMappingURL=baseCompDb.d.ts.map