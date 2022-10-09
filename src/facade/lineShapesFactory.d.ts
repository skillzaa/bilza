import IComponent from "../compDb/IComponent.js";
import ILines from "../components/lines/ILines.js";
export default class CompFactory {
    private readonly startTime;
    private readonly endTime;
    private readonly canvasWidth;
    private readonly canvasHeight;
    private insertAction;
    private comps;
    constructor(startTime: number, endTime: number, comps: IComponent[], insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number);
    starOfDavid(color?: string): ILines;
    triangle(color?: string): ILines;
}
//# sourceMappingURL=lineShapesFactory.d.ts.map