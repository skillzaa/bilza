import CoreProps from "./corePropsDb.js";
import CompEngine from "../compEngine/compEngine.js";
import Pack from "../pack/pack.js";
import IComponent from "./IComponent.js";
export default class CompDb extends CoreProps implements IComponent {
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number);
    align(x?: 0 | 1 | 2 | null, y?: 0 | 1 | 2 | null): void;
    alignRotate(x?: 0 | 1 | 2 | null, y?: 0 | 1 | 2 | null): void;
    xRotateAligned(): number;
    yRotateAligned(): number;
    xAligned(): number;
    yAligned(): number;
    setPaddings(n: number): void;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
    compWidthPix(): number;
    compWidthPerc(): number;
    compHeightPix(): number;
    compHeightPerc(): number;
    contentHeightPix(): number;
    contentHeightPerc(): number;
    contentWidthPix(): number;
    contentWidthPerc(): number;
    getDuration(): number;
    goto(atFrame: number, x: number, y: number): boolean;
    setxy(x: number, y: number): void;
    getStartTime(inSec?: boolean): number;
    getEndTime(inSec?: boolean): number;
    bottomEdgePix(): number;
    bottomEdgePerc(): number;
    rightEdgePix(): number;
    rightEdgePerc(): number;
    getEngineComp(pack: Pack): CompEngine;
}
//# sourceMappingURL=compDb.d.ts.map