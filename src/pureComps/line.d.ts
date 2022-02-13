import { Component, Pack, Position } from "../bilzaa2d/index.js";
export default class Line extends Component {
    color: string;
    lineWidth: number;
    start: Position;
    end: Position;
    private style;
    constructor(start?: Position, end?: Position, color?: string);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=line.d.ts.map