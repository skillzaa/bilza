import Bilza from "../bilza.js";
import CompFactory from "../facade/coreCompsFactory.js";
import LineShapeFactory from "../compFactory/lineShapesFactory.js";
export default class ScreenPack {
    readonly startTime: number;
    readonly endTime: number;
    private bilzaObj;
    constructor(startTime: number, endTime: number, bilzaObj: Bilza);
    add(startTimePlus?: number, endTimeMinus?: number): CompFactory;
    addLineShape(startTimePlus?: number, endTimeMinus?: number): LineShapeFactory;
    protected startTimePlus(sec: number): number;
    protected endTimeMinus(sec: number): number;
}
//# sourceMappingURL=scenePack.d.ts.map