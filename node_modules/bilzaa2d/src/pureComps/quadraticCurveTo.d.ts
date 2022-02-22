import { Component, Pack, Position } from "../bilzaa2d/index.js";
export default class QuadraticCurveTo extends Component {
    color: string;
    lineWidth: number;
    start: Position;
    end: Position;
    controlPoint: Position;
    markStart: boolean;
    markEnd: boolean;
    markControlPoint: boolean;
    endColor: string;
    startColor: string;
    controlPointColor: string;
    private styleMarker;
    private styleCurve;
    constructor(start?: Position, controlPoint?: Position, end?: Position, color?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=quadraticCurveTo.d.ts.map