import IComponent from "../../compDb/IComponent.js";
import Seg from "../lineSeg/lineSegDb.js";
export default interface ILines extends IComponent {
    add(x1: number, y1: number, x2: number, y2: number, color?: string | null, lineWidth?: number, lineCap?: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]): void;
    seg(x: number, y: number, filled?: boolean, color?: string | null, lineWidth?: number, lineCap?: 0 | 1 | 2, lineJoin?: 0 | 1 | 2, lineDash?: [number, number]): Seg;
}
//# sourceMappingURL=ILines.d.ts.map