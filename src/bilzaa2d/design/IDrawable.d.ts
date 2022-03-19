import Pack from "../pack/pack.js";
import { DrawLayer } from "./drawLayer.js";
/**
 * An IDrawable is used and drawn. All the logic inside it has be deal with update and drawing- no business legic etc inside. That will come when we build systems.
 * The components (tools / items / objects) needs to be like lego pieces exposing just this.d.xyz and reacting to that.
 */
export default interface IDrawable {
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
}
//# sourceMappingURL=IDrawable.d.ts.map