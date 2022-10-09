import LineStruct from "./lineStruct.js";
export default class Seg {
    private readonly startX;
    private readonly startY;
    private readonly color;
    private data;
    private localData;
    constructor(x: number, y: number, color: string, data: LineStruct[]);
    add(x: number, y: number): Seg;
    save(): void;
}
//# sourceMappingURL=seg.d.ts.map