import { IComponent, CompFactory } from "../bilza.js";
import IScene from "./IScene.js";
export default class Scene implements IScene {
    private readonly _duration;
    private readonly _startTime;
    private readonly _endTime;
    private comps;
    constructor(startTime: number, endTime: number);
    getComps(): IComponent[];
    getStartTime(): number;
    getEndTime(): number;
    duration(): number;
    add(startTime: number, endTime: number): CompFactory;
    private setCompTimings;
    insert(comp: IComponent, actionType: string): IComponent;
    private startTimePlus;
    private endTimeMinus;
    private minDurationViolation;
}
//# sourceMappingURL=scene.d.ts.map