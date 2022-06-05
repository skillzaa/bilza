import { IComponent } from "../Bilza.js";
import Comps from "./comps.js";
import Duration from "./duration.js";
export default class Insert {
    private duration;
    private comps;
    private charsWidth;
    constructor(comps: Comps, duration: Duration, charsWidth: (chars: string, fontSize: number, fontName: string) => number);
    append(comp: IComponent, duration: number): IComponent;
    add(comp: IComponent, startTime: number, duration: number): IComponent;
    alwaysOn(comp: IComponent): IComponent;
}
//# sourceMappingURL=insert.d.ts.map