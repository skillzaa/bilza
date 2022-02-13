import { Component, Pack, Transition, Position } from "../../bilzaa2d/index.js";
import { TriangleData } from "./DataFn.js";
export default class Triangle extends Component {
    d: Transition<TriangleData>;
    private styleLine;
    private styleVertexMarker;
    constructor();
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
    drawVertexMarkers(p: Pack): void;
    drawVertexMarker(p: Pack, pos: Position, color: string): void;
    update(frame: number, p: Pack): boolean;
}
//# sourceMappingURL=triangle.d.ts.map