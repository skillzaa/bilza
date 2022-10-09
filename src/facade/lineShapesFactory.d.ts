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
    starOfDavid(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILines;
    triangle(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILines;
    cross(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILines;
    tickRight(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILines;
    tickLeft(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILines;
    graphInc(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILines;
    rectangle(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILines;
    rightTriangle(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILines;
}
//# sourceMappingURL=lineShapesFactory.d.ts.map