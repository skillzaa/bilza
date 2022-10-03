import CoreProps from "./corePropsDb.js";
import CompEngine from "../compEngine/compEngine.js";
import IComponent from "./IComponent.js";
import Pack from "../pack/pack.js";
export default class CompDb extends CoreProps implements IComponent {
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
    getEngineComp(pack: Pack): CompEngine;
}
//# sourceMappingURL=compDb.d.ts.map