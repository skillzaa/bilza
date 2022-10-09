import Pack from "../../pack/pack.js";
import compEngine from "../../compEngine/compEngine.js";
import CompDb from "../../compDb/compDb.js";
import ILinesSubComp from "./ILinesSubComp.js";
import ILines from "./ILines.js";
import Seg from "./seg.js";
export default class LinesDb extends CompDb implements ILines {
    data: ILinesSubComp[];
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, color?: string);
    getEngineComp(pack: Pack): compEngine;
    add(x1: number, y1: number, x2: number, y2: number, color: string | null | undefined, lineWidth: number | undefined, lineCap: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]): void;
    seg(x: number, y: number, filled?: boolean, color?: string | null, lineWidth?: number, lineCap?: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]): Seg;
}
//# sourceMappingURL=linesDb.d.ts.map