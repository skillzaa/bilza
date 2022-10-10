import CompDb from "../../compDb/compDb.js";
import Vertex from "./vertex.js";
import ISeg from "./ILineSeg.js";
import LineSeg from "./lineSeg.js";
import Pack from "../../pack/pack.js";
export default class SegDb extends CompDb implements ISeg {
    startX: number;
    startY: number;
    lineWidth: number;
    filled: boolean;
    closed: boolean;
    lineCap: "butt" | "square" | "round";
    lineJoin: "round" | "bevel" | "miter";
    lineDash: [number, number];
    data: Vertex[];
    constructor(startTime: number, endTime: number, insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number, x: number, y: number, hue_0_360?: number, lineWidth?: number);
    setLineCap(lineCap: "butt" | "square" | "round"): void;
    getLineCap(): "butt" | "square" | "round";
    setLineJoin(lineJoin?: "round" | "bevel" | "miter"): void;
    getLineJoin(): "round" | "bevel" | "miter";
    setLineDash(lineDash?: [line: number, dash: number]): void;
    getLineDash(): [line: number, dash: number];
    setFilled(filled?: boolean): boolean;
    getFilled(): boolean;
    setClosed(closed?: boolean): boolean;
    getClosed(): boolean;
    add(x: number, y: number): void;
    getEngineComp(pack: Pack): LineSeg;
}
//# sourceMappingURL=lineSegDb.d.ts.map