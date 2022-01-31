import { Cornor } from "./cornor.js";
export default class Xy {
    cornor: Cornor;
    x: number | null;
    y: number | null;
    width: number;
    height: number;
    constructor(x?: number, y?: number, width?: number, height?: number, cornor?: Cornor);
    X(canvasWidth: number): number | null;
    Y(canvasHeight: number): number | null;
    private setBWZeronHundred;
    private setBWZeronHundredOrNull;
}
//# sourceMappingURL=xy.d.ts.map