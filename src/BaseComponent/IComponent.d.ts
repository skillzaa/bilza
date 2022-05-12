import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import { InsertTypeOptions } from "./insertTypeOptions.js";
export default interface IComponent {
    drawLayer: DrawLayer;
    width(p: Pack): number;
    height(p: Pack): number;
    init(p: Pack): boolean;
    update(ms: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    checkCollision(x: number, y: number, p: Pack): boolean;
    resize(width: number, height: number): number;
    getStartTime(inMilliSec?: boolean): number;
    setStartTime(n: number): number;
    duration(): number;
    getEndTime(inMilliSec?: boolean): number;
    insertType: InsertTypeOptions;
    insertTypeOptions: typeof InsertTypeOptions;
}
//# sourceMappingURL=IComponent.d.ts.map