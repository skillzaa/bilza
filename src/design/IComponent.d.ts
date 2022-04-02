import Pack from "../pack/pack.js";
import { DrawLayer } from "./drawLayer.js";
export default interface IComponent {
    drawLayer: DrawLayer;
    getSelected(): boolean;
    setSelected(b: boolean): boolean;
    getDisplay(): boolean;
    setDisplay(b: boolean): boolean;
    getStart(): number;
    setStart(n: number): number;
    getEnd(): number;
    setEnd(n: number): number;
    width(p: Pack): number;
    height(p: Pack): number;
    update(ms: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    checkCollision(x: number, y: number, p: Pack): boolean;
    resize(width: number, height: number): number;
}
//# sourceMappingURL=IComponent.d.ts.map