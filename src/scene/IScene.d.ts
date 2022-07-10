import { IComponent } from "../bilza.js";
export default interface IScene {
    startTime: number;
    duration: number;
    getComps(): IComponent[];
    getEndTime(): number;
}
//# sourceMappingURL=IScene.d.ts.map