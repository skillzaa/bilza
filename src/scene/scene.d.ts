import { IComponent } from "../bilza.js";
import IScene from "./IScene.js";
export default class Scene implements IScene {
    private readonly _duration;
    private comps;
    constructor(durationSec: number);
    getComps(): IComponent[];
    duration(): number;
    protected init(): void;
    push(comp: IComponent, startTimeSec: number, endTimeSec: number): void;
}
//# sourceMappingURL=scene.d.ts.map