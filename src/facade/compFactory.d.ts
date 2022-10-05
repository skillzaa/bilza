import IComponent from "../compDb/IComponent.js";
import IRect from "../components/rect/Irect.js";
export default class CompFactory {
    private readonly startTime;
    private readonly endTime;
    private readonly canvasWidth;
    private readonly canvasHeight;
    private insertAction;
    private comps;
    constructor(startTime: number, endTime: number, comps: IComponent[], insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number);
    fillRect(color?: string): IComponent;
    rect(color?: string): IRect;
}
//# sourceMappingURL=compFactory.d.ts.map