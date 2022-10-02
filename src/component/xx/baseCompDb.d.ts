import IComponent from "../../componentFacade/IComponent.js";
import CoreProps from "./coreProps.js.js";
export default class ComponentDb extends CoreProps implements IComponent {
    readonly startTime: number;
    readonly endTime: number;
    readonly insertAction: "add" | "append" | "alwaysOn";
    private readonly canvasWidth;
    private readonly canvasHeight;
    xAlign: 0 | 1 | 2;
    yAlign: 0 | 1 | 2;
    xRotate: 0 | 1 | 2;
    yRotate: 0 | 1 | 2;
    constructor(startTime: number, endTime: number, canvasWidth: number, canvasHeight: number, insertAction: "add" | "append" | "alwaysOn");
    align(x?: 0 | 1 | 2 | null, y?: 0 | 1 | 2 | null): void;
    alignRotate(x?: 0 | 1 | 2 | null, y?: 0 | 1 | 2 | null): void;
    xRotateAligned(): number;
    yRotateAligned(): number;
    xAligned(): number;
    yAligned(): number;
    setPaddings(n: number): void;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
    compWidth(): number;
    compHeight(): number;
    contentHeight(): number;
    contentWidth(): number;
    compWidthPix(): number;
    compHeightPix(): number;
    contentWidthPix(): number;
    contentHeightPix(): number;
    getDuration(): number;
    setxy(x: number, y?: number | null): void;
    getStartTime(inMilliSec?: boolean): number;
    getEndTime(inMilliSec?: boolean): number;
    goto(atFrame: number, x: number, y: number): boolean;
}
//# sourceMappingURL=baseCompDb.d.ts.map