import Pack from "../bilzaa2d/pack/pack.js";
import Component from "../bilzaa2d/baseComp.js";
import Style from "../bilzaa2d/style/style.js";
export default class Circle extends Component {
    x: number;
    y: number;
    radius: number;
    fill: boolean;
    constructor(x: number, y: number, radius: number, incomTempl: Style);
    width(p: Pack): number;
    height(p: Pack): number;
    draw(p: Pack): boolean;
}
//# sourceMappingURL=circle.d.ts.map