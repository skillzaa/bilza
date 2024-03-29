import CompFactory from "../facade/coreCompsFactory.js";
import LineShapeFactory from "../facade/lineShapesFactory.js";
import Linker from "../facade/linker.js";
export default class Scene {
    readonly startTime: number;
    readonly endTime: number;
    private linker;
    constructor(linker: Linker);
    add(startTimePlus?: number, endTimeMinus?: number): CompFactory;
    addLineShape(startTimePlus?: number, endTimeMinus?: number): LineShapeFactory;
    protected startTimePlus(sec: number): number;
    protected endTimeMinus(sec: number): number;
}
//# sourceMappingURL=scene.d.ts.map