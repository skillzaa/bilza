import Pack from "../pack/pack.js";
import Component from "../component/component.js";
import Style from "../style/style.js";
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