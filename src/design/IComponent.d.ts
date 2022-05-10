import Pack from "../pack/pack.js";
import { DrawLayer } from "./drawLayer.js";
export default interface IComponent {
    drawLayer: DrawLayer;
    width(p: Pack): number;
    height(p: Pack): number;
    init(p: Pack): boolean;
    update(ms: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    checkCollision(x: number, y: number, p: Pack): boolean;
    resize(width: number, height: number): number;
    getEndTime(): number;
    getStartTime(): number;
}
//# sourceMappingURL=IComponent.d.ts.map