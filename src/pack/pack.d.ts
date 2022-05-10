import Style from "../style.js";
import Position from "../design/Position.js";
export default class Pack {
    private canvas;
    private ctx;
    constructor(canvas: HTMLCanvasElement, width?: number, height?: number | null);
    drawBackground(color?: string): string;
    canvasWidth(): number;
    canvasHeight(): number;
    quadraticCurveTo(start: Position, end: Position, controlPoint: Position, style: Style): void;
    restore(): void;
    save(): void;
    drawImage(image: HTMLImageElement, x: number, y: number, width: number, height: number): void;
    clearCanvas(): void;
    charsWidth(chars: string | undefined, fontSize: number, fontName: string): number;
    textWidth(chars: string, incomTempl: Style): number;
    drawLine(startX: number, startY: number, endX: number, endY: number, incomTempl: Style): void;
    line(startX: number, startY: number, endX: number, endY: number): void;
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number, style: Style): void;
    fill(style: Style): void;
    stroke(): void;
    drawRect(x: number, y: number, width: number, height: number, incomCtx: Style): void;
    drawFillRect(x: number, y: number, width: number, height: number, incomCtx: Style): void;
    arcTo(start: Position, end: Position, style: Style, radius?: number): void;
    drawCircle(x: number | undefined, y: number | undefined, radius: number | undefined, fill: boolean | undefined, startAngle: number | undefined, endAngle: number | undefined, incomCtx: Style): void;
    drawText(content: string, x: number, y: number, incomCtx: Style): void;
    drawIcon(code: number, x: number, y: number, incomCtx: Style): void;
    drawTextstroke(content: string, x: number, y: number, incomCtx: Style): void;
    commitCtxData(incomCtx: Style): void;
    private setFont;
    xPerc(perc: number): number;
    yPerc(perc: number): number;
    private setBwZeroNhundred;
}
//# sourceMappingURL=pack.d.ts.map