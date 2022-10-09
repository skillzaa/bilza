import Pack from "../../pack/pack.js";
import Style from "../../pack/style.js";
import IPrimtive from "../IPrimtive.js";
export default class LinePrim implements IPrimtive {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    color: string;
    lineWidth: number;
    lineCap: 0 | 1 | 2;
    lineJoin: 0 | 1 | 2;
    lineDash: [line: number, gap: number];
    style: Style;
    constructor(x1: number, y1: number, x2: number, y2: number, color: string | undefined, lineWidth: number | undefined, lineCap: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]);
    draw(p: Pack): boolean;
}
//# sourceMappingURL=linePrim.d.ts.map