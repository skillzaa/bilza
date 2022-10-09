import LineStruct from "./lineStruct.js";
export default class Seg {
    private readonly startX;
    private readonly startY;
    color: string;
    lineWidth: number;
    lineCap: 0 | 1 | 2;
    lineJoin: 0 | 1 | 2;
    lineDash: [number, number];
    private data;
    private localData;
    constructor(data: LineStruct[], x: number, y: number, color?: string, lineWidth?: number, lineCap?: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]);
    add(x: number, y: number, color?: string, lineWidth?: number, lineCap?: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]): Seg;
    save(): void;
}
//# sourceMappingURL=seg.d.ts.map