import { Pack } from "../bilza.js";
import Shadow from "./80Shadow.js";
import X from "./xy/x.js";
import Y from "./xy/y.js";
export default class Loc extends Shadow {
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    x: X;
    y: Y;
    constructor();
    init(p: Pack): boolean;
    width(): number;
    height(): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    random(startTimeSec: number, endTimeSec: number, Xmin?: number, Xmax?: number, Ymin?: number, Ymax?: number, skipXFrames?: number): void;
    vibrate(from: number, to: number, x: number, y: number, offset: number, delay: number): void;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
    xAligned(): number;
    yAligned(): number;
}
//# sourceMappingURL=70loc.d.ts.map