import { Position } from "../../bilzaa2d/index.js";
export class TriangleData {
    constructor() {
        this.frameStart = 0;
        this.a = new Position(100, 200);
        this.b = new Position(200, 200);
        this.c = new Position(200, 100);
        this.lineColorAB = "red";
        this.lineColorBC = "green";
        this.lineColorCA = "blue";
        this.lineWidthAB = 1;
        this.lineWidthBC = 4;
        this.lineWidthCA = 8;
        this.vertexMarkerAColor = "yellow";
        this.vertexMarkerBColor = "crimson";
        this.vertexMarkerCColor = "orange";
        this.vertexMarkerAWidth = 1;
        this.vertexMarkerBWidth = 2;
        this.vertexMarkerCWidth = 3;
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
