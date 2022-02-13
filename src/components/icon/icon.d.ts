import { Component, Pack, Style } from "../../bilzaa2d/index.js";
export default class Icon extends Component {
    x: number;
    y: number;
    code: number;
    style: Style;
    constructor(code?: number, x?: number, y?: number);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=icon.d.ts.map