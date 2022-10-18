import Bilza from "../bilza.js";
import CompFactory from "../compFactory/compFactory.js";
export default class ScreenPack {
    readonly startTime: number;
    readonly endTime: number;
    private bilzaObj;
    constructor(startTime: number, endTime: number, bilzaObj: Bilza);
    add(startTimePlus?: number, endTimeMinus?: number): CompFactory;
    protected startTimePlus(sec: number): number;
    protected endTimeMinus(sec: number): number;
}
//# sourceMappingURL=scenePack.d.ts.map