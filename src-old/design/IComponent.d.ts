import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
export default interface IComponent {
    drawLayer: DrawLayer;
    alwaysOn: boolean;
    width(p: Pack): number;
    height(p: Pack): number;
    init(p: Pack): boolean;
    update(msDelta: number): boolean;
    draw(p: Pack): boolean;
    checkCollision(x: number, y: number, p: Pack): boolean;
    resize(width: number, height: number): number;
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
    duration: number;
    getEndTime(inMilliSec?: boolean): number;
}
//# sourceMappingURL=IComponent.d.ts.map