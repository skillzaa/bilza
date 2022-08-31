import { IComponent } from "../bilza.js";
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
    add(comp: IComponent, startTimeSec: number, endTimeSec: number): void;
    startTimePlus(timeSec?: number): number;
    endTimeMinus(timeSec?: number): number;
}
//# sourceMappingURL=scene.d.ts.map