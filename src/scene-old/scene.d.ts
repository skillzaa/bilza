import IComponent from "../compDb/IComponent.js";
import CompFactory from "../facade/coreCompsFactory.js";
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
    add(startTime?: number, endTime?: number): CompFactory;
    insert(comp: IComponent, startTime: number, endTime: number, actionType: string): IComponent;
    private setCompTimings;
    private startTimePlus;
    private endTimeMinus;
    private minDurationViolation;
}
//# sourceMappingURL=scene.d.ts.map