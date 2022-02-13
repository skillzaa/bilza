import { Component, Pack } from "../../bilzaa2d/index.js";
import { TriangleData } from "./DataFn.js";
export default class Triangle extends Component {
    private compData;
    private styleLine;
    private styleVertexMarker;
    d: TriangleData;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    private drawVertexMarker;
    private drawLine;
    update(frame: number, p: Pack): boolean;
}
//# sourceMappingURL=triangle.d.ts.map