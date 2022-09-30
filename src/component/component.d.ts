import IEngineComp from "./IEngineComp.js";
import Pack from "../pack/pack.js";
import CoreProps from "./coreProps.js";
import Style from "../design/style.js";
export default class Component extends CoreProps implements IEngineComp {
    protected style: Style;
    constructor();
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
    getStartTime(inSec: boolean): number;
    getEndTime(inSec: boolean): number;
    protected preDraw(p: Pack): void;
    protected postDraw(p: Pack): void;
    protected contentX(): number;
    protected contentY(): number;
}
//# sourceMappingURL=component.d.ts.map