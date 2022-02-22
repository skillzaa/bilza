import { Component, Pack, Position } from "../bilzaa2d/index.js";
export default class ArcTo extends Component {
    color: string;
    lineWidth: number;
    start: Position;
    end: Position;
    mid: Position;
    showBoundingLines: boolean;
    private style;
    constructor(start?: Position, mid?: Position, end?: Position, color?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=arcTo.d.ts.map