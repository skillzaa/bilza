import IComponent from "../compDb/IComponent.js";
import IRect from "../components/rect/Irect.js";
import ICanvasBorder from "../components/canvasBorder/ICanvasBorder.js";
import IGrid from "../components/grid/IGrid.js";
import ICircle from "../components/circle/ICircle.js";
import IPic from "../components/pic/IPic.js";
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
    canvasBorder(color?: string, width?: number): ICanvasBorder;
    grid(color?: string, cellWidth?: number, cellHeight?: number): IGrid;
    circle(radius?: number, color?: string): ICircle;
    pic(imgUrl: string, width?: number, height?: number): IPic;
}
//# sourceMappingURL=compFactory.d.ts.map