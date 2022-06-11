import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
export default interface IComponent {
    drawLayer: DrawLayer;
    alwaysOn: boolean;
    init(p: Pack): boolean;
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    charsWidth: null | ((chars: string, fontSize: number, fontName: string) => number);
    checkCollision(x: number, y: number, p: Pack): boolean;
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
    duration: number;
    getEndTime(inMilliSec?: boolean): number;
}
//# sourceMappingURL=IComponent.d.ts.map