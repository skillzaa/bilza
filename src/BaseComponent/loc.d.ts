import { Pack, IComponent } from "../bilza.js";
import BaseComponentBase from "./BaseComponentBase.js";
import X from "./x.js";
import Y from "./y.js";
export default class Loc extends BaseComponentBase implements IComponent {
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    x: X;
    y: Y;
    rotation: number;
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
    applyRotation(p: Pack): void;
    removeRotation(p: Pack): void;
}
//# sourceMappingURL=loc.d.ts.map