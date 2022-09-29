import FillRectDB from "./compsDB/fillRectDb.js";
import IComponent from "./IComponent.js";
export default class CompFactory {
    private readonly startTime;
    private readonly endTime;
    private readonly canvasWidth;
    private readonly canvasHeight;
    private insertAction;
    private comps;
    constructor(startTime: number, endTime: number, comps: IComponent[], insertAction: "add" | "append", canvasWidth: number, canvasHeight: number);
    fillRect(color?: string): FillRectDB;
}
//# sourceMappingURL=compFactory.d.ts.map