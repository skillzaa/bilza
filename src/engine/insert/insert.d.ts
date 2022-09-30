import { IComponent } from "../../bilza.js";
import Comps from "../comps.js";
import Duration from "./duration.js";
import IScene from "../../scene/IScene.js";
export default class Insert {
    private duration;
    private comps;
    private charsWidth;
    constructor(comps: Comps, duration: Duration, charsWidth: (chars: string, fontSize: number, fontName: string) => number);
    addScene(scene: IScene): void;
    add(comp: IComponent, startTime: number, endTime: number): import("../../component/IEngineComp.js").default;
    append(comp: IComponent, duration: number): import("../../component/IEngineComp.js").default;
    alwaysOn(comp: IComponent): IComponent;
}
//# sourceMappingURL=insert.d.ts.map