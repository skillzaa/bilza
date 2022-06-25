import { Pack, IComponent, XAlignOpt, YAlignOpt } from "../bilza.js";
import BaseComponentBase from "./BaseComponentBase.js";
export default class Loc extends BaseComponentBase implements IComponent {
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    private preInitGotos;
    private preInitAnimates;
    private preInitVibrates;
    constructor();
    init(p: Pack): boolean;
    initVibrateX(): void;
    initGoto(): void;
    initAnimate(): void;
    width(): number;
    height(): number;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    goto(atFrame: number, x: number, y: number, xAlign?: XAlignOpt, yAlign?: YAlignOpt, xExtra?: number, yExtra?: number): boolean;
    shadowsOff(): void;
    setShadow(shadowBlur?: number, shadowOffsetX?: number, shadowOffsetY?: number, shadowColor?: string): void;
    shadowsOn(): void;
    getEndTime(inMilliSec?: boolean): number;
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
    percToX(perc: number): number;
    percToY(perc: number): number;
    vibrateX(from: number, to: number, xValue: number, offset: number, delay: number): void;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
    xAligned(): number;
    yAligned(): number;
}
//# sourceMappingURL=loc.d.ts.map