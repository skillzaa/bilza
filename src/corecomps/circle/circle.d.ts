import { Component, Pack, Style } from "../../bilzaa2d/index.js";
export default class Circle extends Component {
    x: number;
    y: number;
    startAngle: number;
    endAngle: number;
    radius: number;
    fill: boolean;
    constructor(x: number, y: number, radius: number, incomTempl: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=circle.d.ts.map