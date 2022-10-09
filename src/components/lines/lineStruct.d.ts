export default class LineStruct {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    lineWidth: number;
    lineCap: 0 | 1 | 2;
    lineJoin: 0 | 1 | 2;
    lineDash: [line: number, gap: number];
    color: string;
    constructor(x1: number, y1: number, x2: number, y2: number, color: string | undefined, lineWidth: number | undefined, lineCap: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]);
}
//# sourceMappingURL=lineStruct.d.ts.map