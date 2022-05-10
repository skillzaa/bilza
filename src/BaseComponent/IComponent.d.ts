import Pack from "../pack/pack.js";
import { DrawLayer } from "../design/drawLayer.js";
import { DisplayTypeOptions } from "./displayTypeOptions.js";
export default interface IComponent {
    drawLayer: DrawLayer;
    width(p: Pack): number;
    height(p: Pack): number;
    init(p: Pack): boolean;
    update(ms: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    checkCollision(x: number, y: number, p: Pack): boolean;
    resize(width: number, height: number): number;
    getEndTime(inMilliSec?: boolean): number;
    getStartTime(inMilliSec?: boolean): number;
    displayType: DisplayTypeOptions;
    displayTypeOptions: typeof DisplayTypeOptions;
}
//# sourceMappingURL=IComponent.d.ts.map