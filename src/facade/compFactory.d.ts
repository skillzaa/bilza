import IComponent from "../compDb/IComponent.js";
import IRect from "../components/rect/IRect.js";
import ICanvasBorder from "../components/canvasBorder/ICanvasBorder.js";
import IGrid from "../components/grid/IGrid.js";
import ICircle from "../components/circle/ICircle.js";
import IPic from "../components/pic/IPic.js";
import ILine from "../components/line/ILine.js";
import IArrow from "../components/arrow/IArrow.js";
import IParticleSystem from "../components/particleSystem/IParticleSystem.js";
export default class CompFactory {
    private readonly startTime;
    private readonly endTime;
    private readonly canvasWidth;
    private readonly canvasHeight;
    private insertAction;
    private comps;
    constructor(startTime: number, endTime: number, comps: IComponent[], insertAction: "add" | "append" | "alwaysOn", canvasWidth: number, canvasHeight: number);
    arrow(x1: number, y1: number, x2: number, y2: number, color?: string): IArrow;
    canvasBorder(color?: string, width?: number): ICanvasBorder;
    fillRect(color?: string): IComponent;
    particleSystem(count?: number, color?: string, delay?: number): IParticleSystem;
    rect(color?: string): IRect;
    grid(color?: string, cellWidth?: number, cellHeight?: number): IGrid;
    circle(radius?: number, color?: string): ICircle;
    marker(radius?: number, color?: string): ICircle;
    pic(imgUrl: string, width?: number, height?: number): IPic;
    line(x1: number, y1: number, x2: number, y2: number, color?: string): ILine;
}
//# sourceMappingURL=compFactory.d.ts.map