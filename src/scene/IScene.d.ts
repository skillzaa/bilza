import { IComponent } from "../bilza.js";
export default interface IScene {
    getComps(): IComponent[];
    getStartTime(): number;
    getEndTime(): number;
    duration(): number;
    push(comp: IComponent, startTimeSec: number, endTimeSec: number): void;
}
//# sourceMappingURL=IScene.d.ts.map