import LineShapeFactory from "./lineShapesFactory.js";
import Linker from "./linker.js";
export default class LineShapes {
    private linker;
    constructor(linker: Linker);
    add(startTime: number, endTime: number): LineShapeFactory;
    alwaysOn(): LineShapeFactory;
    append(duration: number): LineShapeFactory;
}
//# sourceMappingURL=lineShapes.d.ts.map