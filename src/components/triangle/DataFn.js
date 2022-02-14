import { Position } from "../../bilzaa2d/index.js";
export class TriangleData {
    constructor() {
        this.frameStart = 0;
        this.a = new Position(200, 500);
        this.b = new Position(500, 500);
        this.c = new Position(200, 100);
        this.lineColorAB = "red";
        this.lineColorBC = "green";
        this.lineColorCA = "blue";
        this.lineWidthAB = 3;
        this.lineWidthBC = 3;
        this.lineWidthCA = 3;
        this.vertexMarkerAColor = "yellow";
        this.vertexMarkerBColor = "crimson";
        this.vertexMarkerCColor = "orange";
        this.showVertexMarker = true;
        this.fill = true;
        this.fillColor = "blue";
    }
}
;
export default function DataFn() {
    let td = new TriangleData();
    return td;
}
