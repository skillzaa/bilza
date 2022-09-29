import IComponent from "./IEngineComp.js";
import Pack from "../pack/pack.js";
import CoreProps from "./coreProps.js";
import Style from "../design/style.js";
export default class Component extends CoreProps implements IComponent {
    protected style: Style;
    constructor();
    update(msDelta: number, p: Pack): boolean;
    draw(p: Pack): boolean;
    goto(atFrame: number, x: number, y: number): boolean;
    animate(timeFrom: number, timeTo: number, xFrom: number, xTo: number, yFrom: number, yTo: number): boolean;
}
//# sourceMappingURL=component.d.ts.map