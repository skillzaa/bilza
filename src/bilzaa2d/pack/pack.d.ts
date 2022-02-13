import Style from "./style.js";
import Position from "../design/Position.js";
export default class Pack {
    canvas: HTMLCanvasElement;
    private ctx;
    constructor(canvasId?: string);
    drawBackground(color?: string): void;
    canvasWidth(): number;
    canvasHeight(): number;
    restore(): void;
    save(): void;
    clearCanvas(): void;
    charsWidth(chars: string | undefined, fontSize: number, fontName: string): number;
    textWidth(chars: string, incomTempl: Style): number;
    drawLine(startX: number, startY: number, endX: number, endY: number, incomTempl: Style): void;
    beginPath(): void;
    closePath(): void;
    moveTo(x: number, y: number): void;
    lineTo(x: number, y: number, style: Style): void;
    fill(style: Style): void;
    stroke(): void;
    drawRect(x: number, y: number, width: number, height: number, incomCtx: Style): void;
    drawFillRect(x: number, y: number, width: number, height: number, incomCtx: Style): void;
    drawCircle(x: number, y: number, radius: number, fill: boolean, incomCtx: Style, startAngle?: number, endAngle?: number): void;
    drawText(content: string, x: number, y: number, incomCtx: Style): void;
    drawIcon(code: number, x: number, y: number, incomCtx: Style): void;
    drawTextstroke(content: string, x: number, y: number, incomCtx: Style): void;
    drawLines(positions: Position[], incomCtx: Style, fill?: boolean): void;
    private commitCtxData;
    private setFont;
    xPerc(perc: number): number;
    yPerc(perc: number): number;
    private setBwZeroNhundred;
}
//# sourceMappingURL=pack.d.ts.map