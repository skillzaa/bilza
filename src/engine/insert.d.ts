import { IComponent } from "../Bilza.js";
import Comps from "./comps.js";
export default class Insert {
    private _pvt_duration_val;
    private comps;
    constructor(comps: Comps);
    private len;
    extend(n: number): number;
    append(comp: IComponent, duration: number): IComponent;
    insert(comp: IComponent, startTime: number, duration: number): IComponent;
    alwaysOn(comp: IComponent): IComponent;
}
//# sourceMappingURL=insert.d.ts.map