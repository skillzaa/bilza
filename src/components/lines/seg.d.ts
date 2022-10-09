import LineStruct from "./linePrimtive.js";
import Pack from "../../pack/pack.js";
import ILinesSubComp from "./ILinesSubComp.js";
import Style from "../../pack/style.js";
export default class Seg implements ILinesSubComp {
    private readonly startX;
    private readonly startY;
    color: string | null;
    lineWidth: number;
    filled: boolean;
    lineCap: 0 | 1 | 2;
    lineJoin: 0 | 1 | 2;
    lineDash: [number, number];
    data: LineStruct[];
    style: Style;
    constructor(x: number, y: number, filled?: boolean, color?: string | null, lineWidth?: number, lineCap?: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]);
    add(x: number, y: number, lineWidth?: number, lineCap?: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]): Seg;
    draw(p: Pack, compX: number, compY: number, compWidth: number, compHeight: number, compColor: string): void;
}
//# sourceMappingURL=seg.d.ts.map