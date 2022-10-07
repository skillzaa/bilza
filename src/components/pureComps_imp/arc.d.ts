import { Component, Pack, Position } from "../bilzaa2d/index.js.js";
export default class Arc extends Component {
    color: string;
    lineWidth: number;
    start: Position;
    end: Position;
    mid: Position;
    private style;
    constructor(start?: Position, mid?: Position, end?: Position, color?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=arc.d.ts.map