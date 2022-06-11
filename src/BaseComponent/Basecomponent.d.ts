import { Pack, IComponent, XAlignment, YAlignment } from "../Bilza.js";
import BaseComponentBase from "./BaseComponentBase.js";
import { OffScreenXOpt } from "../design/OffScreenXOpt.js";
import { OffScreenYOpt } from "../design/OffScreenYOpt.js";
export default class BaseComponentMain extends BaseComponentBase implements IComponent {
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    constructor();
    width(): number;
    height(): number;
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    checkCollision(x: number, y: number, p: Pack): boolean;
    shadowsOff(): void;
    setShadow(shadowBlur?: number, shadowOffsetX?: number, shadowOffsetY?: number, shadowColor?: string): void;
    shadowsOn(): void;
    getEndTime(inMilliSec?: boolean): number;
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
    goto(atFrame: number, x: number | OffScreenXOpt, y: number | OffScreenYOpt, xAlign?: XAlignment, yAlign?: YAlignment, xExtra?: number, yExtra?: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number | OffScreenXOpt, xTo: number | OffScreenXOpt, yFrom: number | OffScreenYOpt, yTo: number | OffScreenYOpt, xAlignFrom?: XAlignment, xAlignTo?: XAlignment, yAlignFrom?: YAlignment, yAlignTo?: YAlignment, xExtraFrom?: number, xExtraTo?: number, yExtraFrom?: number, yExtraTo?: number): void;
    x(): number;
    y(): number;
}
//# sourceMappingURL=BaseComponent.d.ts.map