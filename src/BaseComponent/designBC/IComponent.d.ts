import { DrawLayer, Pack, Style } from "../../bilza.js";
export default interface IComponent {
    readonly id: string;
    usePercentages: boolean;
    drawLayer: DrawLayer;
    duration: number;
    alwaysOn: boolean;
    version: string;
    style: Style;
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
    getEndTime(inMilliSec?: boolean): number;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
}
//# sourceMappingURL=IComponent.d.ts.map