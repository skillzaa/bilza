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
    triangle(color: string | undefined, lineWidth: number): ILines;
    cross(color: string | undefined, lineWidth: number): ILines;
    tickRight(color: string | undefined, lineWidth: number): ILines;
    tickLeft(color: string | undefined, lineWidth: number): ILines;
    graphInc(color: string | undefined, lineWidth: number): ILines;
    rectangle(color: string | undefined, lineWidth: number): ILines;
    rightTriangle(color: string | undefined, lineWidth: number): ILines;
}
//# sourceMappingURL=lineShapesFactory.d.ts.map