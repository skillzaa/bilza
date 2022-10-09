import Pack from "../../pack/pack.js";
import Style from "../../pack/style.js";
import ILinesSubComp from "./ILinesSubComp.js";
export default class LinePrimtive implements ILinesSubComp {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: string | null;
    lineWidth: number;
    lineCap: 0 | 1 | 2;
    lineJoin: 0 | 1 | 2;
    lineDash: [line: number, gap: number];
    style: Style;
    constructor(x1: number, y1: number, x2: number, y2: number, color: string | null | undefined, lineWidth: number | undefined, lineCap: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]);
    draw(p: Pack, compX: number, compY: number, compWidth: number, compHeight: number, compColor: string): void;
}
//# sourceMappingURL=linePrimtive.d.ts.map