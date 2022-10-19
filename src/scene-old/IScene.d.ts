import IComponent from "../compDb/IComponent.js";
import CompFactory from "../facade/coreCompsFactory.js";
export default interface IScene {
    getComps(): IComponent[];
    getStartTime(): number;
    getEndTime(): number;
    duration(): number;
    add(startTime: number, endTime: number): CompFactory;
}
//# sourceMappingURL=IScene.d.ts.map