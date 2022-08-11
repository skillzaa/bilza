import { IComponent } from "../bilza.js";
import IScene from "./IScene.js";
export default class Scene implements IScene {
    private startTime;
    private duration;
    private comps;
    constructor(startTime?: number, duration?: number);
    getComps(): IComponent[];
    getEndTime(): number;
    getStartTime(): number;
    getDuration(): number;
    protected init(): void;
    protected push(comp: IComponent): void;
}
//# sourceMappingURL=00scene.d.ts.map