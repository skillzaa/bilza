import Style from "../style/style.js";
export default class Pack {
    canvas: HTMLCanvasElement;
    private ctx;
    private fontSize;
    private fontName;
    constructor(canvasId?: string);
    drawBackground(color?: string): void;
    canvasWidth(): number;
    canvasHeight(): number;
    restore(): void;
    save(): void;
    clearCanvas(): void;
    chars_width(chars?: string, fontSize?: number, fontName?: string): number;
    textWidth(chars: string | undefined, incomTempl: Style): number;
    drawLine(startX: number, startY: number, endX: number, endY: number, incomTempl: Style): void;
    resetCtx(): void;
    drawRect(x: number, y: number, width: number, height: number, incomCtx: Style): void;
    drawFillRect(x: number, y: number, width: number, height: number, incomCtx: Style): void;
    drawCircle(x: number, y: number, radius: number, fill: boolean, incomCtx: Style, startAngle?: number, endAngle?: number): void;
    drawText(content: string, x: number, y: number, incomCtx: Style): void;
    drawIcon(code: number, x: number, y: number, incomCtx: Style): void;
    drawTextstroke(content: string, x: number, y: number, incomCtx: Style): void;
    private commitCtxData;
}
//# sourceMappingURL=pack.d.ts.map