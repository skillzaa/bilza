import { Pack } from "../bilza.js";
import WidthHeight from "./71WidthHeight.js";
export default class Loc extends WidthHeight {
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    constructor();
    draw(p: Pack): boolean;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
    align(x?: number | null, y?: number | null): void;
    alignRotate(x?: number | null, y?: number | null): void;
    xAligned(): number;
    yAligned(): number;
    xRotateAligned(): number;
    yRotateAligned(): number;
}
//# sourceMappingURL=70loc.d.ts.map