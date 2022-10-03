import IComponent from "./IComponent.js";
import CoreProps from "../coreProps/corePropsDb.js";
import ComponentPack from "../componentPack/componentPack.js";
import Component from "../engineComponent/engineComponent.js";
export default class ComponentDb extends CoreProps implements IComponent {
    readonly startTime: number;
    readonly endTime: number;
    readonly insertAction: "add" | "append" | "alwaysOn";
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn");
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
    getStartTime(inSec?: boolean): number;
    getEndTime(inSec?: boolean): number;
    goto(atFrame: number, x: number, y: number): boolean;
    getEngineComponent(componentPack: ComponentPack): Component;
}
//# sourceMappingURL=componentDb.d.ts.map