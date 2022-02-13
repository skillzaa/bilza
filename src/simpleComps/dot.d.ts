import { Component, Pack, Position } from "../bilzaa2d/index.js";
export default class Dot extends Component {
    colorStroke: string;
    colorFill: string;
    radius: number;
    pos: Position;
    private style;
    constructor(color?: string, radius?: number, pos?: Position);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=dot.d.ts.map