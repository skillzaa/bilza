import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import { OffScreenXOpt, OffScreenYOpt, XAlignment, YAlignment } from "../bilza.js";
export default interface IComponent {
    drawLayer: DrawLayer;
    alwaysOn: boolean;
    offScreenXOpt: typeof OffScreenXOpt;
    offScreenYOpt: typeof OffScreenYOpt;
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    checkCollision(x: number, y: number, p: Pack): boolean;
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
    duration: number;
    getEndTime(inMilliSec?: boolean): number;
    goto(atFrame: number, x: number | OffScreenXOpt, y: number | OffScreenYOpt, xAlign?: XAlignment, yAlign?: YAlignment, xExtra?: number, yExtra?: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number | OffScreenXOpt, xTo: number | OffScreenXOpt, yFrom: number | OffScreenYOpt, yTo: number | OffScreenYOpt, xAlignFrom?: XAlignment, xAlignTo?: XAlignment, yAlignFrom?: YAlignment, yAlignTo?: YAlignment, xExtraFrom?: number, xExtraTo?: number, yExtraFrom?: number, yExtraTo?: number): boolean;
}
//# sourceMappingURL=IComponent.d.ts.map