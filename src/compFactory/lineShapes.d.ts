import LineShapeFactory from "./lineShapesFactory.js";
import CompDb from "../compDb/compDb.js";
export default class LineShapes {
    private comps;
    private _canvasHeight;
    private _canvasWidth;
    constructor(canvasWidth: number, canvasHeight: number, comps: CompDb[]);
    add(secStart: number, secEnd: number): LineShapeFactory;
    alwaysOn(): LineShapeFactory;
    append(duration: number): LineShapeFactory;
}
//# sourceMappingURL=lineShapes.d.ts.map