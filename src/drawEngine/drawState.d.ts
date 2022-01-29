import DrawInstr from "./drawInstr.js";
/** DrawEngine is concerned with drawing and templating it does not care about x or y */
export default class DrawState {
    canvas: HTMLCanvasElement;
    ctx: CanvasRenderingContext2D;
    fontName: string;
    fontSize: number;
    fillStyle: string;
    strokeStyle: string;
    constructor();
    draw_line(instr: DrawInstr, startX: number, startY: number, endX: number, endY: number): void;
    chars_width(chars?: string, fontSize?: number, fontName?: string): number;
    drawText(instr: DrawInstr, x: number, y: number): void;
    drawSpecialChar(instr: DrawInstr, x: number, y: number): void;
}
//# sourceMappingURL=drawState.d.ts.map