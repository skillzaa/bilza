import { IComponent } from "../Bilza.js";
import Comps from "./comps.js";
import Duration from "./duration.js";
export default class Insert {
    private duration;
    private comps;
    constructor(comps: Comps, duration: Duration);
    append(comp: IComponent, duration: number): IComponent;
    insert(comp: IComponent, startTime: number, duration: number): IComponent;
    alwaysOn(comp: IComponent): IComponent;
}
//# sourceMappingURL=insert.d.ts.map