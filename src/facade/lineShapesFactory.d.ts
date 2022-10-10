import IComponent from "../compDb/IComponent.js";
import ILineSeg from "../components/lineSeg/ILineSeg.js";
export default class CompFactory {
    private readonly startTime;
    private readonly endTime;
    private readonly canvasWidth;
    private readonly canvasHeight;
    private insertAction;
    private comps;
    constructor(startTime: number, endTime: number, comps: IComponent[], insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number);
    rectangle(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
}
//# sourceMappingURL=lineShapesFactory.d.ts.map