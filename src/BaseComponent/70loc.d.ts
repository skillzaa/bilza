import { Pack } from "../Bilza.js";
import WidthHeight from "./71WidthHeight.js";
import { XAlignOpt } from "./designBC/xAlignOpt.js";
import { YAlignOpt } from "./designBC/yAlignOpt.js";
import AniNoXPerc from "../animations/aniNoPerc/AniNoXPerc.js";
import AniNoYPerc from "../animations/aniNoPerc/AniNoYPerc.js";
export default class Loc extends WidthHeight {
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    x: AniNoXPerc;
    y: AniNoYPerc;
    xAlign: XAlignOpt;
    readonly XAlignOpt: typeof XAlignOpt;
    yAlign: YAlignOpt;
    readonly YAlignOpt: typeof YAlignOpt;
    constructor();
    draw(p: Pack): boolean;
    random(startTimeSec: number, endTimeSec: number, Xmin?: number, Xmax?: number, Ymin?: number, Ymax?: number, skipXFrames?: number): void;
    vibrate(from: number, to: number, x: number, y: number, offset: number, delay: number): void;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
    xAligned(): number;
    yAligned(): number;
}
//# sourceMappingURL=70loc.d.ts.map