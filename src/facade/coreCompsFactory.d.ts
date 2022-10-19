import IComponent from "../compDb/IComponent.js";
import IRect from "../components/rect/IRect.js";
import ICanvasBorder from "../components/canvasBorder/ICanvasBorder.js";
import IGrid from "../components/grid/IGrid.js";
import ICircle from "../components/circle/ICircle.js";
import IPic from "../components/pic/IPic.js";
import ILine from "../components/line/ILine.js";
import IArrow from "../components/arrow/IArrow.js";
import IParticleSystem from "../components/particleSystem/IParticleSystem.js";
import IText from "../components/text/IText.js";
import ILineSeg from "../components/lineSeg/ILineSeg.js";
import ICurve from "../components/curve/ICurve.js";
import Linker from "./linker.js";
export default class CompFactory {
    private linker;
    constructor(linker: Linker);
    curve(startX: number, startY: number, midX: number, midY: number, endX: number, endY: number, color?: string): ICurve;
    arrow(x1: number, y1: number, x2: number, y2: number, color?: string): IArrow;
    canvasBorder(color?: string, width?: number): ICanvasBorder;
    fillRect(color?: string): IComponent;
    particleSystem(count?: number, color?: string, delay?: number): IParticleSystem;
    rect(color?: string): IRect;
    text(content: string, color?: string): IText;
    grid(color?: string, cellWidth?: number, cellHeight?: number): IGrid;
    circle(radius?: number, color?: string): ICircle;
    marker(x: number, y: number, color?: string, radius?: number): ICircle;
    line(x1: number, y1: number, x2: number, y2: number, color?: string): ILine;
    lineSeg(x: number, y: number, hue_0_360?: number, lineWidth?: number): ILineSeg;
    pic(imgUrl: string, width?: number, height?: number): IPic;
}
//# sourceMappingURL=coreCompsFactory.d.ts.map