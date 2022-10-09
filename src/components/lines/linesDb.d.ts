import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import ILine from "./ILines.js";
import LineStruct from "./lineStruct.js";
import Seg from "./seg.js";
export default class LinesDb extends CompDb implements ILine {
    data: LineStruct[];
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number);
    getEngineComp(pack: Pack): compEngine;
    add(x1: number, y1: number, x2: number, y2: number, color: string | undefined, lineWidth: number | undefined, lineCap: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]): void;
    seg(x: number, y: number, color?: string, lineWidth?: number, lineCap?: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]): Seg;
}
//# sourceMappingURL=linesDb.d.ts.map