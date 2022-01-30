export default class CtxData {
    startFrame: number;
    x: number;
    y: number;
    fontSize: number | null;
    font: string | null;
    fontName: string | null;
    fillStyle: string | null;
    strokeStyle: string | null;
    lineWidth: number | null;
    constructor(startFrame?: number);
    merge(incomming: CtxData): void;
}
//# sourceMappingURL=ctxData.d.ts.map