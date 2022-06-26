import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
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
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
}
//# sourceMappingURL=IComponent.d.ts.map