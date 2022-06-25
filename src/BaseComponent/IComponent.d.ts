import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import { XAlignOpt, YAlignOpt } from "../bilza.js";
export default interface IComponent {
    drawLayer: DrawLayer;
    alwaysOn: boolean;
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
    duration: number;
    getEndTime(inMilliSec?: boolean): number;
    goto(atFrame: number, x: number, y: number, xAlign?: XAlignOpt, yAlign?: YAlignOpt, xExtra?: number, yExtra?: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number, xAlignFrom?: XAlignOpt, xAlignTo?: XAlignOpt, yAlignFrom?: YAlignOpt, yAlignTo?: YAlignOpt, xExtraFrom?: number, xExtraTo?: number, yExtraFrom?: number, yExtraTo?: number): boolean;
}
//# sourceMappingURL=IComponent.d.ts.map