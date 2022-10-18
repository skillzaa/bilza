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
    triangle(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    questionMark(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    arrow(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    home(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    exclamationMark(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    rectangle(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    rightTriangle(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    tickLeft(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    tickRight(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    graphInc(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    cross(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
    starOfDavid(hue_0_360?: number, filled?: boolean, lineWidth?: number): ILineSeg;
}
//# sourceMappingURL=lineShapesFactory.d.ts.map