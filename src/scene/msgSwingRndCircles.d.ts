import { IComponent } from "../bilza.js";
import IScene from "./IScene.js";
export default class MsgSwingRndCircles implements IScene {
    content: string;
    startTime: number;
    duration: number;
    comps: IComponent[];
    constructor(startTime?: number, duration?: number);
    getComps(): IComponent[];
    getEndTime(): number;
}
//# sourceMappingURL=msgSwingRndCircles.d.ts.map